// import React, { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";

// const ConceptQuestions = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [feedback, setFeedback] = useState(null);

//   const correctAnswer = "Prabhat";
//   const options = ["Akash", "Saurabh", "Prabhat", "David"];

//   const handleAnswer = (option) => {
//     setSelectedOption(option);
//     if (option === correctAnswer) {
//       setFeedback("Congratulations! You selected the correct answer.");
//       speakFeedback("Congratulations! You selected the correct answer.");
//     } else {
//       setFeedback("Incorrect answer. Please try again.");
//       speakFeedback("Incorrect answer. Please try again.");
//     }
//   };

//   const speakFeedback = (message) => {
//     const speech = new SpeechSynthesisUtterance(message);
//     window.speechSynthesis.speak(speech);
//   };

//   return (
//     <div className="flex flex-col items-center mt-10 space-y-10">
//       {/* Title */}
//       <h2 className="text-xl font-bold mb-4">Who is sitting to the right of David?</h2>
      
//       {/* User Arrangement */}
//       <div className="flex items-center space-x-10">
//         {/* Akash */}
//         <div className="flex flex-col items-center border-2 border-black px-6 py-3 rounded-xl text-lg font-bold">
//           <FaUserCircle className="text-3xl mb-1" />
//           Akash
//         </div>
//         {/* Saurabh */}
//         <div className="flex flex-col items-center border-2 border-black px-6 py-3 rounded-xl text-lg font-bold">
//           <FaUserCircle className="text-3xl mb-1" />
//           Saurabh
//         </div>
//         {/* David (Highlighted) */}
//         <div className="flex flex-col items-center border-2 border-green-500 bg-green-100 px-6 py-3 rounded-xl text-lg font-bold">
//           <FaUserCircle className="text-3xl mb-1 text-green-500" />
//           David
//         </div>
//         {/* Prabhat */}
//         <div className="flex flex-col items-center border-2 border-black px-6 py-3 rounded-xl text-lg font-bold">
//           <FaUserCircle className="text-3xl mb-1" />
//           Prabhat
//         </div>
//       </div>
      
//       {/* Line Representation */}
//       <div className="w-[600px] h-2 bg-black mt-1"></div>
      
//       {/* Question Options */}
//       <div className="flex flex-row space-x-4">
//         {options.map((option) => (
//           <label key={option} className="flex items-center space-x-2">
//             <input
//               type="radio"
//               name="answer"
//               value={option}
//               onChange={() => handleAnswer(option)}
//             />
//             <span className="text-lg font-bold">{option}</span>
//           </label>
//         ))}
//       </div>
      
//       {/* Feedback */}
//       {feedback && <p className="text-lg font-bold mt-4">{feedback}</p>}
//     </div>
//   );
// };

// export default ConceptQuestions;

// import React, { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import { CheckCircle, Circle } from "lucide-react";

// const ConceptQuestions = () => {
//   const people = ["Akash", "Saurabh", "David", "Prabhat"];

//   const questions = [
//     {
//       id: 1,
//       text: "Who is sitting to the left of David?",
//       answer: "Saurabh",
//       options: people,
//     },
//     {
//       id: 2,
//       text: "Who is sitting to the right of David?",
//       answer: "Prabhat",
//       options: people,
//     },
//     {
//       id: 3,
//       text: "Who is sitting between Akash and David?",
//       answer: "Saurabh",
//       options: people,
//     },
//     {
//       id: 4,
//       text: "How many people are sitting between Akash and Prabhat?",
//       answer: "2",
//       options: ["0", "1", "2", "3"],
//     },
//   ];

//   const [currentQnIndex, setCurrentQnIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [feedback, setFeedback] = useState(null);
//   const [completed, setCompleted] = useState(Array(questions.length).fill(false));

//   const speakFeedback = (message) => {
//     const speech = new SpeechSynthesisUtterance(message);
//     window.speechSynthesis.speak(speech);
//   };

//   const handleAnswer = (option) => {
//     setSelectedOption(option);
//     const correct = questions[currentQnIndex].answer === option;

//     if (correct) {
//       const newCompleted = [...completed];
//       newCompleted[currentQnIndex] = true;
//       setCompleted(newCompleted);
//       setFeedback("✅ Congratulations! You selected the correct answer.");
//       speakFeedback("Congratulations! You selected the correct answer.");

//       setTimeout(() => {
//         if (currentQnIndex < questions.length - 1) {
//           setCurrentQnIndex((prev) => prev + 1);
//           setSelectedOption(null);
//           setFeedback(null);
//         }
//       }, 1500);
//     } else {
//       setFeedback("❌ Incorrect answer. Please try again.");
//       speakFeedback("Incorrect answer. Please try again.");
//     }
//   };

//   const currentQn = questions[currentQnIndex];

//   return (
//     <div className="flex flex-col items-center mt-10 space-y-10 px-4">
//       {/* Question Progress */}
//       <div className="flex space-x-3 mb-4">
//         {questions.map((_, idx) => {
//           const isActive = idx === currentQnIndex;
//           const isDone = completed[idx];
//           return (
//             <div
//               key={idx}
//               className={`flex items-center px-3 py-1 rounded-full border text-sm font-semibold
//                 ${isActive ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white"}
//               `}
//             >
//               {isDone ? <CheckCircle size={16} className="mr-1" /> : <Circle size={16} className="mr-1" />}
//               Q{idx + 1}
//             </div>
//           );
//         })}
//       </div>

//       {/* Question */}
//       <h2 className="text-xl font-bold text-center">{currentQn.text}</h2>

//       {/* Arrangement */}
//       <div className="flex items-center space-x-6">
//         {people.map((person) => (
//           <div
//             key={person}
//             className={`flex flex-col items-center px-4 py-2 rounded-xl text-lg font-bold border-2
//               ${person === "David" ? "border-green-500 bg-green-100 text-green-700" : "border-black"}
//             `}
//           >
//             <FaUserCircle className="text-3xl mb-1" />
//             {person}
//           </div>
//         ))}
//       </div>
//       <div className="w-[600px] h-2 bg-black mt-1"></div>

//       {/* Options */}
//       <div className="flex flex-wrap justify-center gap-4">
//         {currentQn.options.map((option) => (
//           <button
//             key={option}
//             onClick={() => handleAnswer(option)}
//             className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-colors"
//           >
//             {option}
//           </button>
//         ))}
//       </div>

//       {/* Feedback */}
//       {feedback && (
//         <div
//           className={`text-lg font-bold ${
//             feedback.startsWith("✅") ? "text-green-600" : "text-red-500"
//           }`}
//         >
//           {feedback}
//         </div>
//       )}

//       {/* Completion message */}
//       {completed.every(Boolean) && (
//         <p className="text-xl font-bold text-green-700 mt-6">🎉 All questions completed!</p>
//       )}
//     </div>
//   );
// };

// export default ConceptQuestions;


import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { CheckCircle, Circle } from "lucide-react";

// Sample Questions
const questions = [
  {
    id: 1,
    question: "Who is sitting to the left of David?",
    correctAnswer: "Saurabh",
    highlight: ["David"]  
  },
  {
    id: 2,
    question: "Who is sitting to the right of David?",
    correctAnswer: "Prabhat",
    highlight: ["David"]  
  },
  {
    id: 3,
    question: "Who is sitting between Akash and David?",
    correctAnswer: "Saurabh",
    highlight: ["Akash", "David"] // ✅ Only the two people in question
  },
  {
    id: 4,
    question: "How many people are sitting between Akash and Prabhat?",
    correctAnswer: "2",
    options: ["0", "1", "2", "3"],
    highlight: ["Akash", "Prabhat"] // ✅ Only the two people in question
  }
];

const userArrangement = ["Akash", "Saurabh", "David", "Prabhat"];

const ConceptQuestions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [completed, setCompleted] = useState([]);

  const currentQuestion = questions[currentIndex];
  const options =
    currentQuestion.options || userArrangement.filter((p) => p !== "David");

  const handleAnswer = (option) => {
    setSelectedOption(option);
    const isCorrect = option === currentQuestion.correctAnswer;

    if (isCorrect) {
      setFeedback("✅ Correct! Great job.");
      speakFeedback("Correct! Great job.");
      setCompleted((prev) =>
        prev.includes(currentQuestion.id)
          ? prev
          : [...prev, currentQuestion.id]
      );
    } else {
      setFeedback("❌ Incorrect answer. Please try again.");
      speakFeedback("Incorrect answer. Please try again.");
    }
  };

  const speakFeedback = (message) => {
    const speech = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(speech);
  };

  const isCompleted = (id) => completed.includes(id);
  const isHighlighted = (name) => currentQuestion.highlight?.includes(name);

  return (
    <div className="flex flex-col items-center mt-10 space-y-10 px-4">
      {/* Header with Question Progress */}
      <div className="flex justify-between w-full max-w-3xl items-center">
        <h2 className="text-2xl font-bold">
          Question {currentIndex + 1} of {questions.length}
        </h2>
        <div className="flex space-x-2">
          {questions.map((q) => (
            <div key={q.id}>
              {isCompleted(q.id) ? (
                <CheckCircle className="text-green-500" size={20} />
              ) : (
                <Circle className="text-gray-400" size={20} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Question Text */}
      <h3 className="text-xl font-semibold text-center">
        {currentQuestion.question}
      </h3>

      {/* User Arrangement */}
      <div className="flex items-center space-x-6 flex-wrap justify-center">
        {userArrangement.map((person) => {
          const isSpecial = isHighlighted(person);
          return (
            <div
              key={person}
              className={`flex flex-col items-center px-5 py-3 rounded-xl border-2 font-bold text-lg transition-all
                ${
                  isSpecial
                    ? "border-yellow-500 bg-yellow-100 dark:bg-yellow-900"
                    : "border-black"
                }
              `}
            >
              <FaUserCircle
                className={`text-3xl mb-1 ${
                  isSpecial ? "text-yellow-600" : ""
                }`}
              />
              {person}
            </div>
          );
        })}
      </div>

      {/* Line */}
      <div className="w-[90%] max-w-2xl h-1 bg-black"></div>

      {/* Options */}
      <div className="flex flex-col space-y-4 w-full max-w-md">
        {options.map((option) => {
          let borderClass = "border-gray-300";
          let bgClass = "";

          if (selectedOption) {
            if (option === selectedOption) {
              borderClass =
                option === currentQuestion.correctAnswer
                  ? "border-green-500"
                  : "border-red-500";
              bgClass =
                option === currentQuestion.correctAnswer
                  ? "bg-green-100"
                  : "bg-red-100";
            }
          }

          return (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={!!selectedOption && selectedOption === option}
              className={`w-full px-4 py-2 border-2 rounded-lg text-left font-semibold text-lg transition-colors
                ${borderClass} ${bgClass}
              `}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {feedback && (
        <div className="text-lg font-semibold mt-4">{feedback}</div>
      )}

      {/* Next Button */}
      {selectedOption === currentQuestion.correctAnswer &&
        currentIndex < questions.length - 1 && (
          <button
            onClick={() => {
              setCurrentIndex((prev) => prev + 1);
              setSelectedOption(null);
              setFeedback(null);
            }}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Next Question →
          </button>
        )}

      {/* Quiz Completion */}
      {currentIndex === questions.length - 1 &&
        selectedOption === currentQuestion.correctAnswer && (
          <div className="mt-6 text-xl font-bold text-green-600">
            🎉 You’ve completed all questions!
          </div>
        )}
    </div>
  );
};

export default ConceptQuestions;
