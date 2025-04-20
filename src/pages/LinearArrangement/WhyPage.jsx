import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Play, Pause } from 'lucide-react';

const tagsData = [
  {
    title: 'Design and Architecture',
    description:
      'Linear arrangement is crucial in design and architecture for creating layouts and planning spaces effectively.',
    animationText: '🏛️ Think of planning a building layout — rooms arranged in an optimal order!',
  },
  {
    title: 'Scheduling and Project Arrangement',
    description:
      'Linear arrangements help in creating timelines for tasks, appointments, and events, ensuring that projects are completed in the correct order and within the allotted time.',
    animationText: '📅 Imagine a timeline of tasks — each step placed correctly to finish on time!',
  },
  {
    title: 'Exam Preps',
    description:
      'It is very important from exam preparation as many of the questions of CAT, PO, SSC and other important exam will have question on this.',
    animationText: '📝 Think of a CAT or SSC paper — you’ll definitely see a linear arrangement problem!',
  },
  {
    title: 'Problem Solving',
    description:
      'Linear arrangements improve logical thinking by allowing users to systematically eliminate possibilities and find solutions efficiently.',
  },
  {
    title: 'Decision Making',
    description:
      'When options must be considered in a specific sequence, linear arrangements support better decision-making strategies.',
  },
];

const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.cancel(); // Stop previous
  speechSynthesis.speak(utterance);
};

const Why = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => setDarkMode(!darkMode);

  const handleSpeak = (text, index) => {
    if (playingIndex === index) {
      speechSynthesis.cancel();
      setPlayingIndex(null);
    } else {
      speak(text);
      setPlayingIndex(index);
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen p-4 transition-all`}>
      {/* Dark Mode Toggle */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleDark}
          className="p-2 rounded-full shadow hover:scale-105 transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <h1 className="text-2xl font-bold mb-6 text-center">Why Learn Linear Arrangement?</h1>

      <div className="space-y-4">
        {tagsData.map((tag, index) => (
          <div
            key={tag.title}
            className={`border rounded-2xl shadow p-0 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} overflow-hidden`}
          >
            {/* Sticky Header */}
            <div
              className={`sticky top-0 z-10 px-4 py-3 flex justify-between items-center font-semibold text-lg ${
                darkMode ? 'bg-gray-800 text-white' : 'bg-white'
              }`}
              onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
            >
              <span>{tag.title}</span>
              <span className="text-xl">{index === activeIndex ? '▲' : '▼'}</span>
            </div>

            <AnimatePresence initial={false}>
              {index === activeIndex && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 space-y-3">
                    <p>{tag.description}</p>

                    {tag.animationText && (
                      <motion.div
                        className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-blue-100'}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <p>{tag.animationText}</p>
                      </motion.div>
                    )}

                    <button
                      onClick={() => handleSpeak(tag.description, index)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium ${
                        darkMode ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'
                      } hover:scale-105 transition`}
                    >
                      {playingIndex === index ? <Pause size={16} /> : <Play size={16} />}
                      {playingIndex === index ? 'Pause Voice' : 'Play Voice'}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
