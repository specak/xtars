// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';

// // import { ArrowRight } from 'lucide-react';

// // const UserCard = () => {

// //     const navigate = useNavigate();
   
    

// //     const handleRedirect = () => {
// //         navigate('/concept1'); 
       
// //       };

// //     // const handleRedirect = () => {
// //     //   navigate('../pages/LinearArrangementConcept1.jsx'); // Replace with your route
// //     // };

// //     return (
// //         <div className="w-full h-full p-4 bg-[#1f232b] rounded-2xl">
// //           <div className="w-full h-full bg-[#f0f0ff] rounded-2xl flex flex-col sm:flex-row items-center sm:items-start justify-between p-6">
// //             {/* Image */}
// //             <div className="flex-shrink-0 mb-4 sm:mb-0">
// //               <img
// //                 src="https://cdn-icons-png.flaticon.com/512/2721/2721275.png"
// //                 alt="Logical Reasoning"
// //                 className="w-24 sm:w-28"
// //               />
// //             </div>
    
// //             {/* Content */}
// //             <div className="flex-1 text-center sm:text-left px-4">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-2">Logical Reasoning</h2>
// //               <p className="text-gray-600 text-sm mb-3">
// //                 Learn the concepts of logical reasoning like seating arrangement, blood relations etc.
// //               </p>
// //               <p className="text-sm text-gray-500">
// //                 Created by <span className="font-medium text-gray-800">Legends</span>
// //               </p>
// //             </div>
    
// //             {/* Arrow */}
// //             <div className="flex-shrink-0">
// //               <button 
// //               onClick={handleRedirect}
// //               className="bg-violet-500 text-white rounded-full p-3 hover:bg-violet-600 transition">
// //                 <ArrowRight 
// //                 size={20} />
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       );
// // };

// // export default UserCard;


// import React, { useState } from 'react';
// import { ArrowRight, ArrowLeft } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const cardsData = [
//   {
//     title: 'Logical Reasoning',
//     description: 'Learn the concepts of logical reasoning like seating arrangement, blood relations etc.',
//     creator: 'Legends',
//     img: 'https://cdn-icons-png.flaticon.com/512/2721/2721275.png',
//     route: '/concept1',
//   },
//   {
//     title: 'Physics',
//     description: 'Explore concepts like motion, force, energy, and thermodynamics in an engaging way.',
//     creator: 'Einstein Lab',
//     img: 'https://cdn-icons-png.flaticon.com/512/4320/4320337.png',
//     route: '/concept1',
//   },
//   {
//     title: 'Mathematics',
//     description: 'Master algebra, geometry, calculus and more with visual examples and problems.',
//     creator: 'MathGenius',
//     img: 'https://cdn-icons-png.flaticon.com/512/564/564429.png',
//     route: '/concept1',
//   },
// ];

// const UserCard = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const navigate = useNavigate();

//   const nextCard = () => {
//     setCurrentIndex((prev) => (prev + 1) % cardsData.length);
//   };

//   const prevCard = () => {
//     setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
//   };

//   const currentCard = cardsData[currentIndex];

//   return (
//     <div className="w-full max-w-3xl mx-auto p-4 flex flex-col items-center bg-[#1f232b] rounded-2xl">
//       {/* Card */}
//       <div className="w-full bg-[#f0f0ff] rounded-2xl flex flex-col sm:flex-row items-center justify-between p-6 relative">
//         {/* Image */}
//         <div className="flex-shrink-0 mb-4 sm:mb-0">
//           <img src={currentCard.img} alt={currentCard.title} className="w-24 sm:w-28" />
//         </div>

//         {/* Content */}
//         <div className="flex-1 text-center sm:text-left px-4">
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentCard.title}</h2>
//           <p className="text-gray-600 text-sm mb-3">{currentCard.description}</p>
//           <p className="text-sm text-gray-500">
//             Created by <span className="font-medium text-gray-800">{currentCard.creator}</span>
//           </p>
//         </div>

//         {/* Inner arrow button */}
//         <div className="flex-shrink-0">
//           <button
//             onClick={() => navigate(currentCard.route)}
//             className="bg-violet-500 text-white rounded-full p-3 hover:bg-violet-600 transition"
//           >
//             <ArrowRight size={20} />
//           </button>
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <div className="flex justify-between w-full mt-4 px-8">
//         <button onClick={prevCard} className="text-white hover:text-violet-400 transition">
//           <ArrowLeft size={28} />
//         </button>
//         <button onClick={nextCard} className="text-white hover:text-violet-400 transition">
//           <ArrowRight size={28} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserCard;


// import React, { useState, useEffect, useRef } from 'react';
// import { useSwipeable } from 'react-swipeable';
// import { useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight, ArrowLeft } from 'lucide-react';

// const cardsData = [
//   {
//     title: 'Logical Reasoning',
//     description: 'Learn the concepts of logical reasoning like seating arrangement, blood relations etc.',
//     creator: 'Legends',
//     img: 'https://cdn-icons-png.flaticon.com/512/2721/2721275.png',
//     route: '/concept1',
//   },
//   {
//     title: 'Physics',
//     description: 'Explore concepts like motion, force, energy, and thermodynamics in an engaging way.',
//     creator: 'Einstein Lab',
//     img: 'https://cdn-icons-png.flaticon.com/512/4320/4320337.png',
//     route: '/physics',
//   },
//   {
//     title: 'Mathematics',
//     description: 'Master algebra, geometry, calculus and more with visual examples and problems.',
//     creator: 'MathGenius',
//     img: 'https://cdn-icons-png.flaticon.com/512/564/564429.png',
//     route: '/maths',
//   },
//   {
//     title: 'Biology',
//     description: 'Dive into cell structure, genetics, evolution, and more in a fun way.',
//     creator: 'BioBeats',
//     img: 'https://cdn-icons-png.flaticon.com/512/2991/2991112.png',
//     route: '/biology',
//   },
//   {
//     title: 'Chemistry',
//     description: 'Understand atoms, molecules, and chemical reactions through experiments.',
//     creator: 'ChemCraze',
//     img: 'https://cdn-icons-png.flaticon.com/512/3135/3135783.png',
//     route: '/chemistry',
//   },
// ];

// const UserCard = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();
//   const timeoutRef = useRef(null);

//   // Auto-scroll
//   useEffect(() => {
//     if (!isHovered) {
//       timeoutRef.current = setInterval(() => {
//         nextCard();
//       }, 5000);
//     }
//     return () => clearInterval(timeoutRef.current);
//   }, [currentIndex, isHovered]);

//   // Responsive: Cards per screen size
//   const getCardsToShow = () => {
//     if (window.innerWidth >= 1024) return 3;
//     if (window.innerWidth >= 768) return 2;
//     return 1;
//   };

//   const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

//   useEffect(() => {
//     const handleResize = () => setCardsToShow(getCardsToShow());
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const totalSlides = Math.ceil(cardsData.length / cardsToShow);

//   const nextCard = () => {
//     setCurrentIndex((prev) => (prev + 1) % totalSlides);
//   };

//   const prevCard = () => {
//     setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   const handlers = useSwipeable({
//     onSwipedLeft: nextCard,
//     onSwipedRight: prevCard,
//     preventScrollOnSwipe: true,
//     trackMouse: true,
//   });

//   const visibleCards = cardsData.slice(
//     currentIndex * cardsToShow,
//     currentIndex * cardsToShow + cardsToShow
//   );

//   return (
//     <div
//       {...handlers}
//       className="w-full max-w-6xl mx-auto p-4 flex flex-col items-center bg-[#1f232b] rounded-2xl"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Slide Container */}
//       <div className="relative w-full overflow-hidden">
//         <AnimatePresence mode="wait">

//           <motion.div
//             key={currentIndex}
//             className="grid gap-4 transition-transform duration-500 ease-in-out"
//             style={{
//               gridTemplateColumns: `repeat(${cardsToShow}, minmax(0, 1fr))`,
//             }}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//           >
//             {visibleCards.map((card, idx) => (
//               <div
//                 key={idx}
//                 className="bg-[#f0f0ff] rounded-2xl flex flex-col sm:flex-row items-center justify-between p-6"
//               >
//                 {/* Image */}
//                 <div className="flex-shrink-0 mb-4 sm:mb-0">
//                   <img src={card.img} alt={card.title} className="w-20 sm:w-24" />
//                 </div>

//                 {/* Content */}
//                 <div className="flex-1 text-center sm:text-left px-4">
//                   <h2 className="text-xl font-bold text-gray-900 mb-1">{card.title}</h2>
//                   <p className="text-gray-600 text-sm mb-2">{card.description}</p>
//                   <p className="text-sm text-gray-500">
//                     Created by <span className="font-medium text-gray-800">{card.creator}</span>
//                   </p>
//                 </div>

//                 {/* Button */}
//                 <div className="flex-shrink-0">
//                   <button
//                     onClick={() => navigate(card.route)}
//                     className="bg-violet-500 text-white rounded-full p-3 hover:bg-violet-600 transition"
//                   >
//                     <ArrowRight size={20} />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Arrows */}
//       <div className="flex justify-between w-full mt-6 px-8">
//         <button onClick={prevCard} className="text-white hover:text-violet-400 transition">
//           <ArrowLeft size={28} />
//         </button>
//         <button onClick={nextCard} className="text-white hover:text-violet-400 transition">
//           <ArrowRight size={28} />
//         </button>
//       </div>

//       {/* Dots */}
//       <div className="flex mt-4 gap-2">
//         {Array.from({ length: totalSlides }).map((_, idx) => (
//           <span
//             key={idx}
//             className={`w-3 h-3 rounded-full ${
//               idx === currentIndex ? 'bg-violet-400' : 'bg-gray-400'
//             } transition`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserCard;

import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const cardsData = [
  {
    title: 'Logical Reasoning',
    description: 'Learn the concepts of logical reasoning like seating arrangement, blood relations etc.',
    creator: 'Legends',
    img: 'https://cdn-icons-png.flaticon.com/512/2721/2721275.png',
    route: '/concept1',
  },
  {
    title: 'Physics',
    description: 'Explore concepts like motion, force, energy, and thermodynamics in an engaging way.',
    creator: 'Einstein Lab',
    img: 'https://cdn-icons-png.flaticon.com/512/4320/4320337.png',
    route: '/physics',
  },
  {
    title: 'Mathematics',
    description: 'Master algebra, geometry, calculus and more with visual examples and problems.',
    creator: 'MathGenius',
    img: 'https://cdn-icons-png.flaticon.com/512/564/564429.png',
    route: '/maths',
  },
  {
    title: 'Biology',
    description: 'Dive into cell structure, genetics, evolution, and more in a fun way.',
    creator: 'BioBeats',
    img: 'https://cdn-icons-png.flaticon.com/512/2991/2991112.png',
    route: '/biology',
  },
  {
    title: 'Chemistry',
    description: 'Understand atoms, molecules, and chemical reactions through experiments.',
    creator: 'ChemCraze',
    img: 'https://cdn-icons-png.flaticon.com/512/3135/3135783.png',
    route: '/chemistry',
  },
  {
    title: 'Accountancy',
    description: 'Understand important aspects of accountancy like Assets, equities and Liabilites and alongside the important statements like balance sheet, Profit and loss etc..',
    creator: 'Skj',
    img: 'https://cdn-icons-png.flaticon.com/512/3135/3135783.png',
    route: '/chemistry',
  },
];

const UserCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setInterval(() => {
        nextCard();
      }, 5000);
    }
    return () => clearInterval(timeoutRef.current);
  }, [currentIndex, isHovered]);

  const totalSlides = cardsData.length; // Since only one card is shown at a time

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextCard,
    onSwipedRight: prevCard,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // Only show one card at a time
  const visibleCards = cardsData.slice(currentIndex, currentIndex + 1);

  return (
    <div
      {...handlers}
      className="w-full max-w-6xl mx-auto p-4 flex flex-col items-center bg-[#1f232b] rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slide Container */}
      <div className="relative w-full overflow-hidden">
        <AnimatePresence mode="wait">

          <motion.div
            key={currentIndex}
            className="grid gap-4 transition-transform duration-500 ease-in-out"
            style={{
              gridTemplateColumns: '1fr', // Only one card at a time
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            {visibleCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#f0f0ff] rounded-2xl flex flex-col sm:flex-row items-center justify-between p-6"
              >
                {/* Image */}
                <div className="flex-shrink-0 mb-4 sm:mb-0">
                  <img src={card.img} alt={card.title} className="w-20 sm:w-24" />
                </div>

                {/* Content */}
                <div className="flex-1 text-center sm:text-left px-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{card.title}</h2>
                  <p className="text-gray-600 text-sm mb-2">{card.description}</p>
                  <p className="text-sm text-gray-500">
                    Created by <span className="font-medium text-gray-800">{card.creator}</span>
                  </p>
                </div>

                {/* Button */}
                <div className="flex-shrink-0">
                  <button
                    onClick={() => navigate(card.route)}
                    className="bg-violet-500 text-white rounded-full p-3 hover:bg-violet-600 transition"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <div className="flex justify-between w-full mt-6 px-8">
        <button onClick={prevCard} className="text-white hover:text-violet-400 transition">
          <ArrowLeft size={28} />
        </button>
        <button onClick={nextCard} className="text-white hover:text-violet-400 transition">
          <ArrowRight size={28} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex mt-4 gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? 'bg-violet-400' : 'bg-gray-400'
            } transition`}
          />
        ))}
      </div>
    </div>
  );
};

export default UserCard;
