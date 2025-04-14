import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import Header from '../components/Header';
import Footer from '../components/Footer';

// Dummy topic data
const topics = [
  { title: "Linear Arrangement", rating: 4.5, users: 1203 },
  { title: "Blood Relations", rating: 4.2, users: 980 },
  { title: "Coding-Decoding", rating: 4.7, users: 1450 },
  { title: "Syllogism", rating: 4.3, users: 1100 },
  { title: "Clocks", rating: 4.6, users: 900 },
  { title: "Calendar", rating: 4.8, users: 1300 },
];

const TopicCard = ({ title, rating, users }) => {
  const navigate = useNavigate(); // Use useNavigate to navigate

  // Function to handle click and navigate to the new module
  const handleClick = () => {
    // Create a dynamic path based on the topic title
    // const topicSlug = title.toLowerCase().replace(/\s+/g, "-"); // Format title to slug
    navigate('/learningPage'); 
    // navigate(`/topics/${topicSlug}`); // Navigate to topic page
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={handleClick} // Trigger navigate on click
      className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xs cursor-pointer hover:shadow-lg transition"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

      <div className="flex items-center mb-2 space-x-1 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < Math.floor(rating) ? "" : "opacity-30"}
          />
        ))}
        <span className="text-sm text-gray-600 ml-2">({rating})</span>
      </div>

      <p className="text-sm text-gray-500">
        {users.toLocaleString()} people opted
      </p>
    </motion.div>
  );
};

const TopicGridPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col">
      {/* Header */}
      <Header className="bg-white shadow-md py-4 px-6 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-gray-800">Explore Topics</h1>
      </Header>

      {/* Grid */}
      <main className="flex-1 px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {topics.map((topic, idx) => (
            <TopicCard
              key={idx}
              title={topic.title}
              rating={topic.rating}
              users={topic.users}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TopicGridPage;
