import React from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const LinearArrangementConcept3 = () => {
  return (
    <div className="flex flex-col items-center mt-10 space-y-20">
      {/* Scenario 1: Saurabh between Akash and Prabhat */}
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">
          Concept 1: Saurabh is sitting between Akash and Prabhat
        </h2>
        <div className="flex items-center space-x-10">
          {/* Prabhat */}
          <div className="flex items-center space-x-2">
            <motion.div
              className="flex items-center space-x-1 text-lg"
              animate={{ x: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <FaArrowLeft />
              <span>Left</span>
            </motion.div>
            <div className="flex flex-col items-center border-2 border-black px-6 py-3 rounded-xl text-lg font-bold">
              <FaUserCircle className="text-3xl mb-1" />
              Prabhat
            </div>
            <motion.div
              className="flex items-center space-x-1 text-lg"
              animate={{ x: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <span>Right</span>
              <FaArrowRight />
            </motion.div>
          </div>

          {/* Saurabh (Highlighted) */}
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center border-2 border-blue-500 bg-blue-100 px-6 py-3 rounded-xl text-lg font-bold">
              <FaUserCircle className="text-3xl mb-1 text-blue-500" />
              Saurabh
            </div>
          </div>

          {/* Akash */}
          <div className="flex items-center space-x-2">
            <motion.div
              className="flex items-center space-x-1 text-lg"
              animate={{ x: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <FaArrowLeft />
              <span>Left</span>
            </motion.div>
            <div className="flex flex-col items-center border-2 border-black px-6 py-3 rounded-xl text-lg font-bold">
              <FaUserCircle className="text-3xl mb-1" />
              Akash
            </div>
            <motion.div
              className="flex items-center space-x-1 text-lg"
              animate={{ x: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <span>Right</span>
              <FaArrowRight />
            </motion.div>
          </div>
        </div>
        <div className="w-[500px] h-2 bg-black mt-4"></div>
      </div>

      {/* Scenario 2: Akash, then Saurabh, then Prabhat */}
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">
          Concept 2: Akash is sitting first, then Saurabh, then Prabhat
        </h2>
        <div className="flex items-center space-x-10">
          {/* Akash */}
          <div className="flex items-center space-x-2">
            <motion.div
              className="flex items-center space-x-1 text-lg"
              animate={{ x: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <FaArrowLeft />
              <span>Left</span>
            </motion.div>
            <div className="flex flex-col items-center border-2 border-black px-6 py-3 rounded-xl text-lg font-bold">
              <FaUserCircle className="text-3xl mb-1" />
              Akash
            </div>
            <motion.div
              className="flex items-center space-x-1 text-lg"
              animate={{ x: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <span>Right</span>
              <FaArrowRight />
            </motion.div>
          </div>

          {/* Saurabh (Highlighted) */}
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center border-2 border-blue-500 bg-blue-100 px-6 py-3 rounded-xl text-lg font-bold">
              <FaUserCircle className="text-3xl mb-1 text-blue-500" />
              Saurabh
            </div>
          </div>

          {/* Prabhat */}
          <div className="flex items-center space-x-2">
            <motion.div
              className="flex items-center space-x-1 text-lg"
              animate={{ x: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <FaArrowLeft />
              <span>Left</span>
            </motion.div>
            <div className="flex flex-col items-center border-2 border-black px-6 py-3 rounded-xl text-lg font-bold">
              <FaUserCircle className="text-3xl mb-1" />
              Prabhat
            </div>
            <motion.div
              className="flex items-center space-x-1 text-lg"
              animate={{ x: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <span>Right</span>
              <FaArrowRight />
            </motion.div>
          </div>
        </div>
        <div className="w-[500px] h-2 bg-black mt-4"></div>
      </div>
    </div>
  );
};

export default LinearArrangementConcept3;
