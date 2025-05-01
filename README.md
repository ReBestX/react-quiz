# React Quiz

An interactive quiz application built with React that tests users' knowledge of React concepts and fundamentals.

![React Quiz App](https://via.placeholder.com/800x400?text=React+Quiz+App)

## Project Overview

React Quiz is an interactive web application that presents users with a series of multiple-choice questions about React. The application features:

- **Interactive Quiz Interface**: Clean and responsive UI with animated transitions between questions
- **Multiple-choice Questions**: 15+ questions covering React fundamentals, hooks, state management, and more
- **Point-based Scoring**: Questions are assigned different point values based on difficulty
- **Timed Quiz Experience**: A countdown timer adds pressure to complete the quiz before time runs out
- **Progress Tracking**: Visual progress indicators show users their advancement through the quiz
- **Immediate Feedback**: Correct and incorrect answers are visually indicated after selection
- **High Score System**: Local storage saves and displays the user's highest score
- **Result Screen**: Detailed results with score, percentage, and performance emoji
- **Fail-safe Data Loading**: Fallback to local questions if the API server is unavailable

## Technical Implementation

- Built with React 19 and modern JavaScript
- Uses the React Hooks API (useState, useEffect, useReducer) for state management
- Implements a reducer pattern for complex state management
- Fetches question data from a JSON server API with error handling
- Includes animations and transitions for a polished user experience
- Persists high scores using browser's localStorage
- Features accessibility considerations (aria attributes, keyboard navigation)

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or download the source code
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### `npm run server`

Starts the JSON server to provide quiz questions API.\
This runs on [http://localhost:8000](http://localhost:8000).

For the best experience, run the server in one terminal and the React application in another.

### Additional Scripts

#### `npm test`

Launches the test runner in interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder.

## Project Structure

- `/src` - React components and application logic
  - `App.js` - Main application component and state management
  - Component files (`Question.js`, `StartScreen.js`, etc.)
  - Styling files
- `/data` - Contains the questions.json file used by the JSON server
- `/public` - Static assets and HTML template

## Features in Detail

### Quiz Flow

1. **Start Screen**: Introduction screen with the number of questions
2. **Question Screen**: Displays questions and multiple-choice options
3. **Progress Bar**: Shows current question number, points earned, and total points
4. **Timer**: Counts down from a calculated time limit (30 seconds per question)
5. **Finish Screen**: Shows final score, percentage, and high score status

### State Management

The application uses the useReducer hook to manage complex state transitions between different quiz stages:

- loading
- error
- ready
- active
- finished

## Future Enhancements

- User accounts and global leaderboard
- Additional question categories
- Difficulty levels
- Sharing results on social media
- Custom quiz creation

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Create React App team for the project scaffolding
- React community for documentation and resources
- All contributors to this educational project
