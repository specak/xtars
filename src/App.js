// App.jsx
import React, { useState, useEffect } from 'react';

import { FaUserCircle } from "react-icons/fa";

function App() {
 
  return (
    <LinearArrangementQuestion/>
  );
}

export default App;
// export LinearArrangementQuestion;


const LinearArrangementQuestion = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const correctAnswer = "Prabhat";
  const options = ["Akash", "Saurabh", "Prabhat", "David"];

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === correctAnswer) {
      setFeedback("Congratulations! You selected the correct answer.");
      speakFeedback("Congratulations! You selected the correct answer.");
    } else {
      setFeedback("Incorrect answer. Please try again.");
      speakFeedback("Incorrect answer. Please try again.");
    }
  };

  const speakFeedback = (message) => {
    const speech = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="flex flex-col items-center mt-10 space-y-10">
      {/* Title */}
      <h2 className="text-xl font-bold mb-4">Who is sitting to the right of David?</h2>
      
      {/* User Arrangement */}
      <div className="flex items-center space-x-10">
        {/* Akash */}
        <div className="flex flex-col items-center border-2 border-black px-6 py-3 rounded-xl text-lg font-bold">
          <FaUserCircle className="text-3xl mb-1" />
          Akash
        </div>
        {/* Saurabh */}
        <div className="flex flex-col items-center border-2 border-black px-6 py-3 rounded-xl text-lg font-bold">
          <FaUserCircle className="text-3xl mb-1" />
          Saurabh
        </div>
        {/* David (Highlighted) */}
        <div className="flex flex-col items-center border-2 border-green-500 bg-green-100 px-6 py-3 rounded-xl text-lg font-bold">
          <FaUserCircle className="text-3xl mb-1 text-green-500" />
          David
        </div>
        {/* Prabhat */}
        <div className="flex flex-col items-center border-2 border-black px-6 py-3 rounded-xl text-lg font-bold">
          <FaUserCircle className="text-3xl mb-1" />
          Prabhat
        </div>
      </div>
      
      {/* Line Representation */}
      <div className="w-[600px] h-2 bg-black mt-1"></div>
      
      {/* Question Options */}
      <div className="flex flex-row space-x-4">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="radio"
              name="answer"
              value={option}
              onChange={() => handleAnswer(option)}
            />
            <span className="text-lg font-bold">{option}</span>
          </label>
        ))}
      </div>
      
      {/* Feedback */}
      {feedback && <p className="text-lg font-bold mt-4">{feedback}</p>}
    </div>
  );
};
