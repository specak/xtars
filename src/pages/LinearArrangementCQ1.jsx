import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const questions = [
  {
    question: "Who is sitting to the right of David?",
    arrangement: ["Akash", "Saurabh", "David", "Prabhat"],
    correctAnswer: "Prabhat",
    explanation: "Prabhat is directly to the right of David in the arrangement."
  },
  {
    question: "Who is between Akash and Prabhat?",
    arrangement: ["Akash", "Saurabh", "Prabhat", "David"],
    correctAnswer: "Saurabh",
    explanation: "Saurabh is between Akash and Prabhat."
  },
  {
    question: "Who is sitting to the left of Saurabh?",
    arrangement: ["Prabhat", "Akash", "Saurabh", "David"],
    correctAnswer: "Akash",
    explanation: "Akash is directly to the left of Saurabh in the arrangement."
  }
];

const LinearArrangementQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(5);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (timer > 0 && !showFeedback) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !showFeedback) {
      handleAnswer(null); // Treat as unanswered
    }
  }, [timer, showFeedback]);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setShowFeedback(true);

    if (option === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
      speak("Correct answer! Well done.");
    } else {
      speak("Incorrect answer. Please try again.");
    }

    // Auto move to next question after delay
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedOption(null);
      setShowExplanation(false);

      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((prev) => prev + 1);
        setTimer(5);
      } else {
        setQuizFinished(true);
      }
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center mt-10 space-y-6 px-4">
      {!quizFinished ? (
        <>
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">
              Question {currentIndex + 1} / {questions.length}
            </h2>
            <p className="text-lg font-semibold text-gray-700 mb-2">
              Time Remaining: {timer}s
            </p>
          </div>

          {/* Arrangement */}
          <div>
            <div className="flex items-center justify-center space-x-6">
              {currentQuestion.arrangement.map((person, index) => {
                const isCorrect =
                  showFeedback && person === currentQuestion.correctAnswer;
                const isIncorrect =
                  showFeedback &&
                  selectedOption &&
                  person === selectedOption &&
                  selectedOption !== currentQuestion.correctAnswer;

                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center px-4 py-2 rounded-xl border-2 font-bold ${
                      isCorrect
                        ? "border-green-500 bg-green-100 text-green-600"
                        : isIncorrect
                        ? "border-red-500 bg-red-100 text-red-600"
                        : "border-black"
                    }`}
                  >
                    <FaUserCircle className="text-3xl mb-1" />
                    {person}
                  </div>
                );
              })}
            </div>
            <div className="w-full h-2 bg-black mt-1 max-w-xl mx-auto"></div>
          </div>

          {/* Question Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-lg font-semibold text-center mt-4"
            >
              {currentQuestion.question}
            </motion.div>
          </AnimatePresence>

          {/* Options */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {currentQuestion.arrangement.map((option) => (
              <label
                key={option}
                className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg border ${
                  selectedOption === option
                    ? "bg-blue-100 border-blue-500"
                    : "border-gray-400"
                }`}
                onClick={() => !showFeedback && handleAnswer(option)}
              >
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => {}}
                  className="form-radio text-blue-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>

          {/* Why Explanation */}
          {showFeedback && selectedOption !== currentQuestion.correctAnswer && (
            <button
              className="mt-4 px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-100 transition"
              onClick={() => setShowExplanation(true)}
            >
              Why?
            </button>
          )}

          {showExplanation && (
            <p className="text-md mt-2 text-center text-gray-700 max-w-md">
              Explanation: {currentQuestion.explanation}
            </p>
          )}
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl font-semibold">
            Your Score: {score} / {questions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default LinearArrangementQuiz;
