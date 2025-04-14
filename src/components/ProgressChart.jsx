'use client';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ProgressChart = () => {
  const data = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        label: 'Work Hours',
        data: [4, 5, 6, 5, 4, 5.3, 6],
        backgroundColor: '#FACC15'
      }
    ]
  };

  const options = {
    scales: {
      y: { beginAtZero: true }
    },
    plugins: {
      legend: { display: false }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
      <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Progress</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300">6.1h Work Time this week</p>
      <Bar data={data} options={options} />
    </div>
  );
};


export default ProgressChart;