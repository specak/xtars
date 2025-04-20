import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  HelpCircle,
  Layers,
  Users,
  BookOpenCheck,
} from 'lucide-react';

// Import section components
import What from './LinearArrangement/WhatPage.jsx';
import Why from './LinearArrangement/WhyPage.jsx';
import ConceptPage from './LinearArrangement/ConceptPage.jsx';
// import Solve from './Solve';
// import Practice from './Practice';

const sectionData = [
  {
    key: 'what',
    title: 'What',
    emoji: '💡',
    icon: <Lightbulb className="w-5 h-5 mr-2" />,
  },
  {
    key: 'why',
    title: 'Why',
    emoji: '❓',
    icon: <HelpCircle className="w-5 h-5 mr-2" />,
  },
  {
    key: 'concepts',
    title: 'Concepts',
    emoji: '📚',
    icon: <Layers className="w-5 h-5 mr-2" />,
  },
  {
    key: 'solve',
    title: 'Solve with Us',
    emoji: '🤝',
    icon: <Users className="w-5 h-5 mr-2" />,
  },
  {
    key: 'practice',
    title: 'Practice',
    emoji: '🧠',
    icon: <BookOpenCheck className="w-5 h-5 mr-2" />,
  },
];

const LearningModule = () => {
  const [activeSection, setActiveSection] = useState('what');

  const renderSection = () => {
    switch (activeSection) {
      case 'what':
        return <What />;
      case 'why':
        return <Why />;
      case 'concepts':
        return <ConceptPage />;
      // case 'solve':
      //   return <Solve />;
      // case 'practice':
      //   return <Practice />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Explore the Module</h1>

      {/* Horizontal Cards with Section State Switch */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 overflow-x-auto mb-8">
        {sectionData.map(({ key, title, emoji }) => (
          <motion.button
            key={key}
            onClick={() => setActiveSection(key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center justify-center min-w-[160px] flex-1 px-6 py-4 rounded-xl text-lg font-semibold shadow-lg transition ${
              activeSection === key
                ? 'bg-white/20 text-yellow-300'
                : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            <span className="mr-2 text-xl">{emoji}</span> {title}
          </motion.button>
        ))}
      </div>

      {/* Section Renderer Below Cards */}
      <div className="bg-white/5 p-6 rounded-xl shadow-inner">
        {renderSection()}
      </div>
    </div>
  );
};

export default LearningModule;
