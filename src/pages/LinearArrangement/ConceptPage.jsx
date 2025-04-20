import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import LinearArrangementConcept1 from './LinearArrangementConcept1';
import LinearArrangementConcept2 from './LinearArrangementConcept2';
import LinearArrangementConcept3 from './LinearArrangementConcept3';
import ConceptQuestions from './ConceptQuestions'

// Constants for Concepts
const concepts = ['Concept 1', 'Concept 2', 'Concept 3', 'Concept 4'];

const Concept1 = () => (
  <div>
    <LinearArrangementConcept1/>
    {/* <h2 className="text-xl font-semibold mb-2">🧠 Concept 1</h2>
    <p>This is the content for Concept 1.</p> */}
  </div>
);

const Concept2 = () => (
  <div>
    <LinearArrangementConcept2/>
    {/* <h2 className="text-xl font-semibold mb-2">📘 Concept 2</h2>
    <p>This is the content for Concept 2.</p> */}
  </div>
);

const Concept3 = () => (
  <div>
    <LinearArrangementConcept3/>
    {/* <h2 className="text-xl font-semibold mb-2">🔬 Concept 3</h2>
    <p>This is the content for Concept 3.</p> */}
  </div>
);

const Concept4 = () => (
  <div>
    <ConceptQuestions/>
    {/* <h2 className="text-xl font-semibold mb-2">💡 Concept 4</h2>
    <p>This is the content for Concept 4.</p> */}
  </div>
);

const ConceptModules = [Concept1, Concept2, Concept3, Concept4];

// Main Concept Page Logic
const ConceptPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  // Track progress in localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('conceptProgress');
    if (savedProgress) {
      setActiveIndex(parseInt(savedProgress, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('conceptProgress', activeIndex);
    if (activeIndex === concepts.length - 1) {
      setShowConfetti(true); // Trigger confetti at 100% progress
    }
  }, [activeIndex]);

  const ProgressBar = ({ progressPercentage }) => (
    <div className="w-full h-3 rounded-full bg-gray-300 dark:bg-gray-700 mb-4">
      <div
        className="h-full rounded-full bg-blue-600 transition-all duration-300"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );

  const ConceptButtons = () => (
    <div className="flex space-x-4 overflow-auto mb-6">
      {concepts.map((label, idx) => {
        const isCompleted = idx < activeIndex;
        const isActive = idx === activeIndex;

        return (
          <button
            key={label}
            onClick={() => setActiveIndex(idx)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors
              ${isActive
                ? 'bg-blue-600 text-white'
                : isCompleted
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white'}
            `}
          >
            {isCompleted ? <CheckCircle size={18} /> : <Circle size={18} />}
            {label}
          </button>
        );
      })}
    </div>
  );


  const ConceptDisplay = ({ activeIndex, ActiveComponent }) => (
    <div className="p-6 rounded-xl border bg-gray-100 dark:bg-gray-800 shadow-md min-h-[150px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex} // Use activeIndex as key to trigger component remounting
          initial={{ opacity: 0, x: 30 }} // Initial position and opacity
          animate={{ opacity: 1, x: 0 }} // Final position and opacity
          exit={{ opacity: 0, x: -30 }} // Exit animation
          transition={{ duration: 0.3 }} // Transition duration
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );

  const progressPercentage = ((activeIndex + 1) / concepts.length) * 100;
  const ActiveComponent = ConceptModules[activeIndex];

  return (
    <div className="min-h-screen px-4 py-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors">
      {/* Show confetti at 100% */}
      {showConfetti && <Confetti />}
      
      {/* Header with progress */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Concept Modules</h1>
      </div>

      {/* Progress Bar */}
      <ProgressBar progressPercentage={progressPercentage} />
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Progress: {activeIndex + 1} of {concepts.length}
      </p>

      {/* Concept Buttons */}
      <ConceptButtons />

      {/* Display Concept */}
      <ConceptDisplay activeIndex={activeIndex} ActiveComponent={ActiveComponent} />
    </div>
  );
};

export default ConceptPage;
