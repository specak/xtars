'use client';
import { useEffect, useState } from 'react';

const Onboarding = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/api/tasks')
      .then((res) => res.json())
      .then(setTasks);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
      <h3 className="font-semibold text-gray-900 dark:text-white">Onboarding</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between py-2 text-sm text-gray-700 dark:text-gray-200">
            {task.title} – {task.time} {task.done ? '✅' : '⬜️'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Onboarding;
