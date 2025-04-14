// import { motion } from 'framer-motion';
// import { CalendarDays } from 'lucide-react';

// // CourseCardVisual component remains the same
// // const CourseCardVisual = ({ imageUrl, courseName, details }) => {
// //     return (
// //       <div className="relative rounded-lg overflow-hidden shadow-md m-4 w-full max-w-sm">
// //         <img
// //           src={imageUrl}
// //           alt={courseName}
// //           className="absolute top-0 left-0 w-full h-full object-cover"
// //         />
// //         <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
// //           <h3 className="text-xl font-semibold mb-1">{courseName}</h3>
// //           <p className="text-sm">{details}</p>
// //         </div>
// //       </div>
// //     );
// // };

// // // Main UserCard component
// // const UserCard = () => {
// //   const imageUrl = "https://images.unsplash.com/photo-1503614472847-86c53090a9c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvdXJzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"; // Replace with your actual image URL
// //   const courseName = "Explore Croatia";
// //   const details = "Summer 2023 - 7 days";
  
// //   const userName = "John Doe";
// //   const userBio = "A passionate traveler and educator who loves exploring new places and cultures.";

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 30 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       exit={{ opacity: 0 }}
// //       transition={{ duration: 0.4 }}
// //       className="backdrop-blur-md bg-white/20 dark:bg-white/10 rounded-2xl shadow-md p-4"
// //     >
// //       {/* User Info */}
// //       <div className="flex items-center space-x-4 mb-6">
// //         <img 
// //           src="https://images.unsplash.com/photo-1503614472847-86c53090a9c8?ixid=MnwzNjg5OXwwfDF8c2VhcmNofDN8fG5hdmlnYXRvciUyMGJlYXJ8ZW58MHx8fHw%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
// //           alt="User"
// //           className="w-16 h-16 rounded-full border-2 border-white"
// //         />
// //         <div>
// //           <h2 className="text-xl font-semibold text-black dark:text-white">{userName}</h2>
// //           <p className="text-sm text-gray-600 dark:text-gray-400">{userBio}</p>
// //         </div>
// //       </div>

// //       {/* Course Info */}
// //       <CourseCardVisual imageUrl={imageUrl} courseName={courseName} details={details} />
// //     </motion.div>
// //   );
// // };

// // export default UserCard;


// const UserCard = ({ imageUrl, courseName, details }) => {
//     return (
//       <div className="relative rounded-lg overflow-hidden shadow-md m-4 w-full max-w-sm bg-white">
//         {/* Image Section */}
//         <img
//           src={imageUrl}
//           alt={courseName}
//           className="w-full h-48 object-cover"
//         />
        
//         {/* Overlay Section */}
//         <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
  
//         {/* Card Content */}
//         <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
//           <h3 className="text-xl font-semibold mb-1">{courseName}</h3>
//           <p className="text-sm">{details}</p>
//         </div>
  
//         {/* Action Button (Save) */}
//         <div className="absolute top-4 right-4">
//           <button className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-red-600 transition">
//             Save
//           </button>
//         </div>
  
//         {/* Bottom Action Buttons */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
//           <button className="bg-white text-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 transition">
//             <span className="material-icons">download</span>
//           </button>
//           <button className="bg-white text-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 transition">
//             <span className="material-icons">more_vert</span>
//           </button>
//         </div>
//       </div>
//     );
//   };
  
//   export default UserCard;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

const UserCard = () => {

    const navigate = useNavigate();
   
    

    const handleRedirect = () => {
        navigate('/concept1'); 
       
      };

    // const handleRedirect = () => {
    //   navigate('../pages/LinearArrangementConcept1.jsx'); // Replace with your route
    // };

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
              <button 
              onClick={handleRedirect}
              className="bg-violet-500 text-white rounded-full p-3 hover:bg-violet-600 transition">
                <ArrowRight 
                size={20} />
              </button>
            </div>
          </div>
        </div>
      );
};

export default UserCard;
