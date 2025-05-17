import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const questions = [
  {
    id: 1,
    question: "Let a, b, c, and d be four numbers... If d − a = 60, what's the value of b − c?",
    options: [15, 20, 25, 30],
    correctAnswer: 20,
    explanation: "Given: a + b = 2c and c + d = 2b. From this, derive b - c = 20 using d - a = 60.",
  },
  {
    id: 2,
    question: "If x + y = 10 and x - y = 2, what is the value of x?",
    options: [4, 5, 6, 7],
    correctAnswer: 6,
    explanation: "Solving the equations: x + y = 10 and x - y = 2 gives x = 6.",
  },
  // Add more questions as needed
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);
  const [showWhy, setShowWhy] = useState(false);

  const question = questions[currentQuestion];
  const isCorrect = selected === question.correctAnswer;
  const isLast = currentQuestion === questions.length - 1;

  const handleNext = () => {
    if (!isLast) {
      setCurrentQuestion((prev) => prev + 1);
      setSelected(null);
      setChecked(false);
      setShowWhy(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 max-w-xl mx-auto">
      
      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div
          className="h-2 bg-green-500 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="mb-6 text-lg font-medium">{question.question}</div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {question.options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className={`border rounded-lg py-3 text-center transition ${
              selected === opt
                ? checked
                  ? opt === question.correctAnswer
                    ? 'bg-green-200 border-green-600'
                    : 'bg-red-200 border-red-600'
                  : 'bg-blue-100 border-blue-400'
                : 'bg-white dark:bg-gray-800 border-gray-300'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Check or Feedback */}
      {!checked ? (
        <button
          disabled={selected === null}
          onClick={() => setChecked(true)}
          className="w-full py-3 bg-black text-white rounded-xl"
        >
          Check
        </button>
      ) : (
        <div className="space-y-4">
          <div className={`text-center font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {isCorrect ? '✅ Correct!' : '❌ Incorrect'}
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setShowWhy(true)}
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md"
            >
              Why?
            </button>

            {!isCorrect && (
              <button
                onClick={() => {
                  setChecked(false);
                  setSelected(null);
                }}
                className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded-md"
              >
                Try Again
              </button>
            )}

            {isCorrect && !isLast && (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Next
              </button>
            )}

            {isCorrect && isLast && (
              <div className="text-blue-500 font-medium">🎉 Quiz Complete!</div>
            )}
          </div>
        </div>
      )}

      {/* Why Modal */}
      <Dialog open={showWhy} onClose={() => setShowWhy(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <Dialog.Panel className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-md w-full">
            <Dialog.Title className="text-lg font-bold mb-2">Explanation</Dialog.Title>
            <p className="text-sm">{question.explanation}</p>
            <button
              onClick={() => setShowWhy(false)}
              className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
