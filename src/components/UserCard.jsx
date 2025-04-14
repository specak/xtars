'use client';
import { motion } from 'framer-motion';

const UserCard = () => {
    return (
      <div className="w-full h-full p-4 bg-[#1f232b] rounded-2xl">
        <div className="w-full h-full bg-[#f0f0ff] rounded-2xl flex flex-col sm:flex-row items-center sm:items-start justify-between p-6">
          {/* Image */}
          <div className="flex-shrink-0 mb-4 sm:mb-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2721/2721275.png"
              alt="Logical Reasoning"
              className="w-24 sm:w-28"
            />
          </div>
  
          {/* Content */}
          <div className="flex-1 text-center sm:text-left px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Logical Reasoning</h2>
            <p className="text-gray-600 text-sm mb-3">
              Learn the concepts of logical reasoning like seating arrangement, blood relations etc.
            </p>
            <p className="text-sm text-gray-500">
              Created by <span className="font-medium text-gray-800">Legends</span>
            </p>
          </div>
  
          {/* Arrow */}
          <div className="flex-shrink-0">
            <button className="bg-violet-500 text-white rounded-full p-3 hover:bg-violet-600 transition">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  };


export default UserCard;