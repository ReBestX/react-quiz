import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import FinishScreen from "./FinishScreen";
import Progress from "./Progress";
import Timer from "./Timer";

const HIGHSCORE_KEY = "react-quiz-highscore";

const initialState = {
  questions: [],
  // "loading" , "error" , "ready" , "active" , "finished"
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: JSON.parse(localStorage.getItem(HIGHSCORE_KEY)) || 0,
  secondsRemaining: null,
  errorMessage: "",
};

// Local fallback data in case server is not running
const fallbackQuestions = [
  {
    question: "Which is the most popular JavaScript framework?",
    options: ["Angular", "React", "Svelte", "Vue"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Which company invented React?",
    options: ["Google", "Apple", "Netflix", "Facebook"],
    correctOption: 3,
    points: 10,
  },
  {
    question: "What's the fundamental building block of React apps?",
    options: ["Components", "Blocks", "Elements", "Effects"],
    correctOption: 0,
    points: 10,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
        errorMessage:
          action.payload || "Failed to fetch questions. Please try again.",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * 30,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        status:
          state.index === state.questions.length - 1 ? "finished" : "active",
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "useFallbackQuestions":
      return {
        ...state,
        questions: fallbackQuestions,
        status: "ready",
      };
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [
    {
      questions,
      status,
      index,
      answer,
      points,
      highscore,
      secondsRemaining,
      errorMessage,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  // Save highscore to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(HIGHSCORE_KEY, JSON.stringify(highscore));
  }, [highscore]);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  useEffect(function () {
    async function fetchQuestions() {
      try {
        const response = await fetch("http://localhost:8000/questions");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        console.error("Error fetching questions:", error);
        dispatch({ type: "dataFailed", payload: error.message });
        // Automatically use fallback questions after a short delay
        setTimeout(() => {
          dispatch({ type: "useFallbackQuestions" });
        }, 2000);
      }
    }
    fetchQuestions();
  }, []);

  return (
    <div className="App">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && (
          <Error message={errorMessage} dispatch={dispatch} />
        )}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
