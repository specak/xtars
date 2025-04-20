// src/pages/What.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HorizontalArrangement = ({ items }) => (
  <div className="flex space-x-4 justify-center items-center my-4">
    <AnimatePresence>
      {items.map((item) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          layout
          className="bg-blue-500 text-white rounded-lg px-4 py-2 shadow"
        >
          {item}
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
);

const VerticalArrangement = ({ items }) => (
  <div className="flex flex-col space-y-4 items-center my-4">
    <AnimatePresence>
      {items.map((item) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          layout
          className="bg-green-500 text-white rounded-lg px-4 py-2 shadow"
        >
          {item}
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
);

const What = () => {
  const [mode, setMode] = useState('horizontal');
  const initialItems = ['A', 'B', 'C', 'D', 'E'];
  const [horizontalItems, setHorizontalItems] = useState(initialItems);
  const [verticalItems, setVerticalItems] = useState(initialItems);

  const shuffle = (items) => [...items].sort(() => Math.random() - 0.5);

  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setMode('horizontal')}
          className={`px-4 py-2 rounded ${
            mode === 'horizontal' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          Horizontal Arrangement
        </button>
        <button
          onClick={() => setMode('vertical')}
          className={`px-4 py-2 rounded ${
            mode === 'vertical' ? 'bg-green-600 text-white' : 'bg-gray-200'
          }`}
        >
          Vertical Arrangement
        </button>
      </div>

      {mode === 'horizontal' && (
        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold text-blue-700">Horizontal Arrangement</h2>
          <p className="text-sm text-gray-600">
            Conditions: A is to the left of B. B is not next to D. C is at one end.
          </p>
          <HorizontalArrangement items={horizontalItems} />
          <button
            onClick={() => setHorizontalItems(shuffle(horizontalItems))}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Shuffle Horizontal
          </button>
        </div>
      )}

      {mode === 'vertical' && (
        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold text-green-700">Vertical Arrangement</h2>
          <p className="text-sm text-gray-600">
            Conditions: A is above B. C is at the top. D is immediately below A.
          </p>
          <VerticalArrangement items={verticalItems} />
          <button
            onClick={() => setVerticalItems(shuffle(verticalItems))}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Shuffle Vertical
          </button>
        </div>
      )}
    </div>
  );
};

export default What;
