'use client';
import { useEffect, useState } from 'react';

const Onboarding = () => {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow w-full">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Onboarding</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Welcome to the team! Here's what you need to get started...
        </p>
      </div>
    );
  };
  
  export default Onboarding;
  