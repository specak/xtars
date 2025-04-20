
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { ThemeProvider } from 'next-themes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from '../components/Header';
import UserCard from '../components/TripCard';
import ProgressChart from '../components/ProgressChart';
import TimeTracker from '../components/TimeTracker';
import Onboarding from '../components/Onboarding';
import Footer from '../components/Footer.jsx';
import TopicCard from './TopicCard.jsx';
import LearningPage from './LearningPage.jsx';
import WhatPage from './LinearArrangement/WhatPage.jsx';
import WhyPage from './LinearArrangement/WhyPage.jsx';
import ConceptPage from './LinearArrangement/ConceptPage.jsx';
import CourseDetailPage from '../components/TripCard';


// Dashboard Home Layout (moved into a component for better route handling)
const DashboardHome = ({ theme, setTheme }) => (
  <div className="min-h-screen p-4 bg-gray-100 text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
    <Header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Welcome in, New Edutech World</h1>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 transition"
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        <span className="text-sm">{theme === 'dark' ? 'Light' : 'Dark'}</span>
      </button>
    </Header>

    <main className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <AnimatePresence>
        <motion.div
          key="UserCard"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="backdrop-blur-md bg-white/20 dark:bg-white/10 rounded-2xl shadow-md p-4"
        >
          <UserCard />
        </motion.div>

        <motion.div
          key="ProgressChart"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="backdrop-blur-md bg-white/20 dark:bg-white/10 rounded-2xl shadow-md p-4"
        >
          <ProgressChart />
        </motion.div>

        <motion.div
          key="TimeTracker"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="backdrop-blur-md bg-white/20 dark:bg-white/10 rounded-2xl shadow-md p-4"
        >
          <TimeTracker />
        </motion.div>

        <motion.div
          key="Onboarding"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="col-span-1 md:col-span-3 backdrop-blur-md bg-white/20 dark:bg-white/10 rounded-2xl shadow-md p-4"
        >
          <Onboarding />
        </motion.div>

        <motion.div
          key="Footer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="col-span-1 md:col-span-3 backdrop-blur-md bg-white/20 dark:bg-white/10 rounded-2xl shadow-md p-4"
        >

          <Footer />
        </motion.div>
      </AnimatePresence>
    </main>
  </div>
);

const App = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardHome theme={theme} setTheme={setTheme} />} />
          {/* <Route path="/" element={<CourseCarouselComponent />} /> */}
          {/* <Route path="/course/:id" element={<CourseDetailPage />} />  */}
          <Route path="/concept1" element={<TopicCard />} />
          <Route path="/learningPage" element={<LearningPage />} />
          <Route path="/what" element={<WhatPage />} />
          <Route path="/why" element={<WhyPage />} />
          <Route path="/concepts" element={<ConceptPage />} />

          {/* <Route path="/" element={<Home />} />
 
  <Route path="/why" element={<WhyPage />} />
  <Route path="/concepts" element={<ConceptsPage />} />
  <Route path="/solve" element={<SolveWithUsPage />} />
  <Route path="/practice" element={<PracticePage />} /> */}


        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;


