"use client";

import { useEffect, useState } from "react";

const questions = [
  {
    question: "What programming language should you learn first?",
    options: ["Python", "JavaScript", "C++", "Scratch"],
    correct: 0,
    explanation: "Python is great for beginners due to its simple syntax!",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyper Transfer Method Language",
    ],
    correct: 0,
    explanation: "HTML is the foundation of all web pages!",
  },
  {
    question: "What is the best way to learn coding?",
    options: [
      "Only read books",
      "Build projects",
      "Watch videos all day",
      "Memorize syntax",
    ],
    correct: 1,
    explanation: "Building real projects is the best way to learn!",
  },
];

export function InteractiveSlide() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const isQuizComplete = isLastQuestion && showResult;
  const question = questions[currentQuestion];

  return (
    <div className="slide slide-interactive">
      <div className={`slide-interactive-content ${isVisible ? "visible" : ""}`}>
        <span className="slide-section-tag">Let&apos;s Play</span>

        <h2 className="slide-interactive-title">
          Quick <span className="accent-text">Quiz</span>
        </h2>

        {!isQuizComplete ? (
          <div className="quiz-container">
            <div className="quiz-progress">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <div className="quiz-progress-bar">
                <div
                  className="quiz-progress-fill"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="quiz-question">{question.question}</div>

            <div className="quiz-options">
              {question.options.map((option, index) => {
                let optionClass = "quiz-option";
                if (showResult) {
                  if (index === question.correct) {
                    optionClass += " correct";
                  } else if (index === selectedAnswer) {
                    optionClass += " incorrect";
                  }
                }

                return (
                  <button
                    key={index}
                    className={optionClass}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                  >
                    <span className="option-letter">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="option-text">{option}</span>
                  </button>
                );
              })}
            </div>

            {showResult && (
              <div className="quiz-result">
                <p className="quiz-explanation">{question.explanation}</p>
                {!isLastQuestion && (
                  <button className="quiz-next-btn" onClick={nextQuestion}>
                    Next Question
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="quiz-complete">
            <div className="quiz-score">
              <span className="score-number">{score}</span>
              <span className="score-total">/ {questions.length}</span>
            </div>
            <p className="quiz-message">
              {score === questions.length
                ? "Perfect! You&apos;re a natural!"
                : score >= questions.length / 2
                ? "Great job! Keep learning!"
                : "Good try! Practice makes perfect!"}
            </p>
            <button className="quiz-restart-btn" onClick={resetQuiz}>
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
