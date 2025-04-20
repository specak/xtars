import React from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const LinearArrangementConcept2 = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      {/* Title */}
      <h2 className="text-xl font-bold mb-4">
       Akash is sitting to the right of Prabhat
      </h2>

      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-10">
          {/* Prabhat */}
          <div className="flex items-center space-x-4">
            <motion.div
              className="flex items-center text-lg space-x-1"
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
              className="flex items-center text-lg space-x-1"
              animate={{ x: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <span>Right</span>
              <FaArrowRight />
            </motion.div>
          </div>

          {/* Akash */}
          <div className="flex flex-col items-center border-2 border-black px-6 py-3 rounded-xl text-lg font-bold">
            <FaUserCircle className="text-3xl mb-1" />
            Akash
          </div>
        </div>

        {/* Line Representation */}
        <div className="w-[500px] h-2 bg-black mt-4"></div>
      </div>
    </div>
  );
};

export default LinearArrangementConcept2;
