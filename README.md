# REACT QUIZ

*Test your React knowledge interactively and effectively.*

![Last Commit](https://img.shields.io/github/last-commit/rebestx/react-quiz?style=flat&logo=git&logoColor=white&color=61DAFB)  
![Top Language](https://img.shields.io/github/languages/top/rebestx/react-quiz?style=flat&color=61DAFB)  
![Language Count](https://img.shields.io/github/languages/count/rebestx/react-quiz?style=flat&color=61DAFB)

*Built with modern tools and technologies:*

![React](https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black)
![JSON](https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-264de4.svg?style=flat&logo=CSS3&logoColor=white)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Overview

**React Quiz** is an engaging web application that challenges users with multiple-choice questions covering React fundamentals. Designed with a polished UI, live feedback, and a scoring system, it's perfect for learners and professionals looking to reinforce their React knowledge.

![React Quiz App](https://via.placeholder.com/800x400?text=React+Quiz+App)

---

## Features

- **Interactive UI**: Clean and animated interface for a seamless quiz experience.
- **Multiple-Choice Questions**: 15+ questions on hooks, state, effects, and more.
- **Scoring System**: Points awarded based on question difficulty.
- **Countdown Timer**: Race against the clock to finish the quiz.
- **Progress Indicator**: Real-time tracking of your current question and score.
- **Instant Feedback**: Visual cues for right and wrong answers.
- **High Score Memory**: Saves your highest score locally.
- **Detailed Result View**: Final score, percentage, and feedback emoji.
- **Resilient Data Fetching**: Falls back to local JSON if API fetch fails.

---

## Getting Started

### Prerequisites

Ensure you have the following tools installed:

- [Node.js](https://nodejs.org/) (v14 or newer)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rebestx/react-quiz
   ```

2. **Navigate to the project directory**:
   ```bash
   cd react-quiz
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

### Usage

Run the application with:

```bash
npm start
```

Visit `http://localhost:3000` in your browser.

To start the mock API server (for questions):

```bash
npm run server
```

Visit `http://localhost:8000` for API data access.  
*Tip: Run the React app and server in parallel terminals for best results.*

---

## Project Structure

```
react-quiz/
├── /public          # Static files and index.html
├── /src             # React components and logic
│   ├── App.js       # Main app component
│   ├── components/  # Reusable UI components
│   └── styles/      # CSS and styling
├── /data            # JSON file for quiz questions
```

---

## Future Enhancements

- 🔐 User accounts with global leaderboards  
- 🧠 Add more question categories and difficulty levels  
- 📱 Share results via social media  
- 🛠️ Custom quiz creation support

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- [Create React App](https://github.com/facebook/create-react-app) for project scaffolding  
- The React community for documentation, tools, and learning resources  
- All contributors who helped improve this quiz experience
