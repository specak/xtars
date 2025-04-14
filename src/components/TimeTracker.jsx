'use client';
import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TimeTracker = () => {
  const [time, setTime] = useState(155); // 2:35 in minutes
  const percentage = (time / 480) * 100; // Assuming 8 hours max

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow flex flex-col items-center">
      <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Time Tracker</h3>
      <div className="w-24 h-24">
        <CircularProgressbar
          value={percentage}
          text={`02:35`}
          styles={buildStyles({
            pathColor: '#FACC15',
            textColor: '#111827'
          })}
        />
      </div>
    </div>
  );
};

export default TimeTracker;