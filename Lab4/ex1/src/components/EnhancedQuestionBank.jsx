import React, { useReducer, useEffect, useState } from "react";
import { Button, Container, Card, ProgressBar, Alert } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  showFeedback: false,
  isCorrect: false,
  correctAnswer: "",
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

    case "SUBMIT_ANSWER":
      const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        isCorrect,
        correctAnswer: state.questions[state.currentQuestion].answer,
        showFeedback: true,
        score: isCorrect ? state.score + 1 : state.score,
      };

    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        showFeedback: false,
        showScore: state.currentQuestion + 1 === state.questions.length,
      };

    case "RESTART_QUIZ":
      return {
        ...initialState,
      };

    default:
      return state;
  }
}

// Component chính
function EnhancedQuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore, showFeedback, isCorrect, correctAnswer } = state;
  const [timeLeft, setTimeLeft] = useState(10);
  const [highScore, setHighScore] = useState(0);

  // Load high score from localStorage
  useEffect(() => {
    const savedHighScore = localStorage.getItem('quizHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);

  // Timer effect
  useEffect(() => {
    if (!showScore && !showFeedback) {
      setTimeLeft(10);
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Time's up - auto submit
            handleSubmitAnswer();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentQuestion, showFeedback]);

  const handleOptionSelect = (option) => {
    if (!showFeedback) {
      dispatch({ type: "SELECT_OPTION", payload: option });
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedOption && !showFeedback) {
      dispatch({ type: "SUBMIT_ANSWER" });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      // Quiz finished - check for high score
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('quizHighScore', score.toString());
      }
    }
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
    setTimeLeft(10);
  };

  const progress = ((currentQuestion + (showFeedback ? 1 : 0)) / questions.length) * 100;

  return (
    <Container className="mt-4">
      <Card className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Quiz Game</h2>
          <div className="text-end">
            <div className="mb-2">
              <strong>High Score: {highScore}</strong>
            </div>
            <div className="d-flex align-items-center">
              <FaClock className="me-2" />
              <span style={{ 
                color: timeLeft <= 5 ? 'red' : 'black',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>
                {timeLeft}s
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="d-flex justify-content-between mb-2">
            <span>Progress</span>
            <span>{currentQuestion + 1} / {questions.length}</span>
          </div>
          <ProgressBar now={progress} variant="success" />
        </div>

        {showScore ? (
          <div className="text-center">
            <h2 className="mb-3">
              Quiz Completed! 🎉
            </h2>
            <h3 className="mb-3">
              Your Score: {score} / {questions.length}
            </h3>
            {score === questions.length && (
              <Alert variant="success" className="mb-3">
                <FaCheckCircle className="me-2" />
                Perfect Score! Congratulations! 🏆
              </Alert>
            )}
            {score > highScore && score < questions.length && (
              <Alert variant="info" className="mb-3">
                New High Score! 🎯
              </Alert>
            )}
            <Button variant="primary" onClick={handleRestartQuiz}>
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div>
            <h4 className="mb-4">
              Question {questions[currentQuestion].id}:<br />
              {questions[currentQuestion].question}
            </h4>

            {/* Feedback Display */}
            {showFeedback && (
              <Alert variant={isCorrect ? "success" : "danger"} className="mb-3">
                {isCorrect ? (
                  <>
                    <FaCheckCircle className="me-2" />
                    Correct! 🎉
                  </>
                ) : (
                  <>
                    <FaTimesCircle className="me-2" />
                    Incorrect! The correct answer is: <strong>{correctAnswer}</strong>
                  </>
                )}
              </Alert>
            )}

            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    showFeedback 
                      ? (option === correctAnswer ? "success" : 
                         (option === selectedOption && !isCorrect ? "danger" : "outline-secondary"))
                      : (selectedOption === option ? "primary" : "outline-secondary")
                  }
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                  disabled={showFeedback}
                >
                  {option}
                </Button>
              ))}
            </div>

            {!showFeedback ? (
              <Button
                variant="primary"
                className="mt-3"
                disabled={!selectedOption}
                onClick={handleSubmitAnswer}
              >
                Submit Answer
              </Button>
            ) : (
              <Button
                variant="primary"
                className="mt-3"
                onClick={handleNextQuestion}
              >
                {currentQuestion === questions.length - 1
                  ? "Finish Quiz"
                  : "Next Question"}
              </Button>
            )}
          </div>
        )}
      </Card>
    </Container>
  );
}

export default EnhancedQuestionBank;
