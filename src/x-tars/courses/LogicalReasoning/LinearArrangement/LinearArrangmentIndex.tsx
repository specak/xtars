// import React, { useState } from 'react';
// import { ChevronRight, ChevronDown, Play, Clock, BarChart3, CheckCircle, Circle, Search, RotateCcw } from 'lucide-react';
// import {sampleCourse} from "./courseData.tsx"
// // Types
// interface ContentItem {
//   id: string;
//   label: string;
//   color: string;
// }

// interface ModuleContentData {
//   title: string;
//   description: string;
//   instructions: string[];
//   availableItems: ContentItem[];
//   correctOrder: string[];
// }

// interface SubModule {
//   id: string;
//   title: string;
//   duration: string;
//   difficulty: 'Easy' | 'Medium' | 'Hard';
//   completed: boolean;
//   content: ModuleContentData;
// }

// interface Module {
//   id: string;
//   title: string;
//   progress: number;
//   totalLessons: number;
//   completedLessons: number;
//   status: 'In Progress' | 'Pending' | 'Completed';
//   subModules: SubModule[];
// }

// interface Course {
//   id: string;
//   title: string;
//   level: string;
//   description: string;
//   overallProgress: number;
//   modules: Module[];
// }

// // CourseHeader Component
// const CourseHeader: React.FC<{
//   title: string;
//   level: string;
//   description: string;
//   overallProgress: number;
// }> = ({ title, level, description, overallProgress }) => {
//   return (
//     <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 rounded-2xl p-4 md:p-6 mb-6 text-white">
//       <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
//         <div className="bg-white bg-opacity-20 p-3 rounded-xl w-fit">
//           <Search className="w-6 h-6 md:w-8 md:h-8 text-white" />
//         </div>
//         <div className="flex-1">
//           <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-2">
//             <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
//             <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold w-fit">
//               {level}
//             </span>
//           </div>
//           <p className="text-purple-100 text-base md:text-lg">{description}</p>
//         </div>
//       </div>

//       <div className="mb-4">
//         <div className="flex justify-between items-center mb-2">
//           <span className="text-sm font-medium">Overall Progress</span>
//           <span className="text-sm font-medium">{overallProgress}% Complete</span>
//         </div>
//         <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
//           <div 
//             className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
//             style={{ width: `${overallProgress}%` }}
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
//         {['Lessons', 'Practice', 'Level', 'Duration'].map((label) => (
//           <div key={label} className="bg-white bg-opacity-10 rounded-xl p-3 md:p-4 text-center">
//             <div className="text-xs md:text-sm text-purple-200 mb-1">{label}</div>
//             <div className="text-lg md:text-2xl font-bold">--</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // ModuleHierarchy Component
// const ModuleHierarchy: React.FC<{
//   modules: Module[];
//   selectedSubModule: string | null;
//   onSubModuleSelect: (moduleId: string, subModuleId: string) => void;
// }> = ({ modules, selectedSubModule, onSubModuleSelect }) => {
//   const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set(['1']));

//   const toggleModule = (moduleId: string) => {
//     const newExpanded = new Set(expandedModules);
//     if (newExpanded.has(moduleId)) {
//       newExpanded.delete(moduleId);
//     } else {
//       newExpanded.add(moduleId);
//     }
//     setExpandedModules(newExpanded);
//   };

//   const getDifficultyColor = (difficulty: string) => {
//     switch (difficulty) {
//       case 'Easy': return 'bg-green-100 text-green-800';
//       case 'Medium': return 'bg-yellow-100 text-yellow-800';
//       case 'Hard': return 'bg-red-100 text-red-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'In Progress': return 'text-blue-600 bg-blue-50';
//       case 'Completed': return 'text-green-600 bg-green-50';
//       case 'Pending': return 'text-gray-600 bg-gray-50';
//       default: return 'text-gray-600 bg-gray-50';
//     }
//   };

//   return (
//     <div className="bg-blue-500 rounded-xl p-4 mb-6">
//       <div className="bg-white rounded-lg p-4">
//         <h2 className="text-xl font-bold text-blue-600 mb-2">Learning Path</h2>
//         <p className="text-gray-600 text-sm mb-4">Track your progress through each module</p>

//         <div className="space-y-3">
//           {modules.map((module, index) => (
//             <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
//               {/* Module Header */}
//               <div 
//                 className={`p-4 cursor-pointer transition-colors ${
//                   expandedModules.has(module.id) ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'
//                 }`}
//                 onClick={() => toggleModule(module.id)}
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
//                       {index + 1}
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-900">{module.title}</h3>
//                       <div className="flex items-center gap-2 mt-1">
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(module.status)}`}>
//                           {module.status}
//                         </span>
//                         <span className="text-xs text-gray-500">
//                           {module.completedLessons}/{module.totalLessons} lessons • {module.progress}% complete
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-20 bg-gray-200 rounded-full h-2 hidden md:block">
//                       <div 
//                         className="bg-blue-500 h-2 rounded-full transition-all duration-300"
//                         style={{ width: `${module.progress}%` }}
//                       />
//                     </div>
//                     {expandedModules.has(module.id) ? 
//                       <ChevronDown className="w-5 h-5 text-gray-400" /> : 
//                       <ChevronRight className="w-5 h-5 text-gray-400" />
//                     }
//                   </div>
//                 </div>
//               </div>

//               {/* Sub-modules */}
//               {expandedModules.has(module.id) && (
//                 <div className="border-t border-gray-200 bg-gray-50">
//                   {module.subModules.map((subModule) => (
//                     <div
//                       key={subModule.id}
//                       className={`p-3 cursor-pointer transition-colors border-l-4 ${
//                         selectedSubModule === subModule.id 
//                           ? 'bg-blue-100 border-blue-500' 
//                           : 'bg-white border-transparent hover:bg-gray-50'
//                       }`}
//                       onClick={() => onSubModuleSelect(module.id, subModule.id)}
//                     >
//                       <div className="flex items-center justify-between ml-4">
//                         <div className="flex items-center gap-3">
//                           {subModule.completed ? 
//                             <CheckCircle className="w-5 h-5 text-green-500" /> : 
//                             <Circle className="w-5 h-5 text-gray-400" />
//                           }
//                           <div>
//                             <h4 className="font-medium text-gray-900">{subModule.title}</h4>
//                             <div className="flex items-center gap-2 mt-1">
//                               <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(subModule.difficulty)}`}>
//                                 {subModule.difficulty}
//                               </span>
//                               <div className="flex items-center gap-1 text-xs text-gray-500">
//                                 <Clock className="w-3 h-3" />
//                                 {subModule.duration}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <Play className="w-4 h-4 text-gray-400" />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ModuleContent Component
// const ModuleContent: React.FC<{
//   content: ModuleContentData | null;
//   onComplete?: () => void;
// }> = ({ content, onComplete }) => {
//   const [userOrder, setUserOrder] = useState<string[]>([]);
//   const [availableItems, setAvailableItems] = useState<ContentItem[]>([]);
//   const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
//   const [showFeedback, setShowFeedback] = useState(false);

//   React.useEffect(() => {
//     if (content) {
//       setAvailableItems([...content.availableItems]);
//       setUserOrder([]);
//       setIsCorrect(null);
//       setShowFeedback(false);
//     }
//   }, [content]);

//   const handleItemClick = (item: ContentItem) => {
//     setAvailableItems(prev => prev.filter(i => i.id !== item.id));
//     setUserOrder(prev => [...prev, item.id]);
//     setIsCorrect(null);
//     setShowFeedback(false);
//   };

//   const handleOrderItemClick = (itemId: string, index: number) => {
//     const item = content?.availableItems.find(i => i.id === itemId);
//     if (item) {
//       setAvailableItems(prev => [...prev, item]);
//       setUserOrder(prev => prev.filter((_, i) => i !== index));
//       setIsCorrect(null);
//       setShowFeedback(false);
//     }
//   };

//   const checkAnswer = () => {
//     if (!content) return;
    
//     const correct = JSON.stringify(userOrder) === JSON.stringify(content.correctOrder);
//     setIsCorrect(correct);
//     setShowFeedback(true);
    
//     if (correct && onComplete) {
//       setTimeout(() => {
//         onComplete();
//       }, 2000);
//     }
//   };

//   const resetOrder = () => {
//     if (content) {
//       setAvailableItems([...content.availableItems]);
//       setUserOrder([]);
//       setIsCorrect(null);
//       setShowFeedback(false);
//     }
//   };

//   if (!content) {
//     return (
//       <div className="bg-white rounded-xl p-8 flex items-center justify-center min-h-96">
//         <div className="text-center text-gray-500">
//           <h3 className="text-xl font-semibold mb-2">Select a Module</h3>
//           <p>Choose a lesson from the learning path to begin</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-xl p-4 md:p-6">
//       <div className="mb-6">
//         <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{content.title}</h2>
//         <p className="text-gray-600 mb-4">{content.description}</p>
        
//         <div className="bg-blue-50 rounded-lg p-4 mb-6">
//           <h3 className="font-semibold text-blue-900 mb-2">Instructions:</h3>
//           <ul className="space-y-1">
//             {content.instructions.map((instruction, index) => (
//               <li key={index} className="flex items-start gap-2 text-blue-800">
//                 <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
//                 <span className="text-sm">{instruction}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Available Items */}
//         <div>
//           <h3 className="font-semibold text-gray-900 mb-3">Available Robots:</h3>
//           <div className="flex flex-wrap gap-3 min-h-20 p-4 bg-gray-50 rounded-lg">
//             {availableItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleItemClick(item)}
//                 className={`w-16 h-16 ${item.color} rounded-lg flex items-center justify-center text-white font-bold text-xl hover:scale-105 transition-transform shadow-md hover:shadow-lg`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* User Order */}
//         <div>
//           <h3 className="font-semibold text-gray-900 mb-3">Your Order:</h3>
//           <div className="min-h-20 p-4 bg-gray-50 rounded-lg">
//             {userOrder.length === 0 ? (
//               <p className="text-gray-500 text-center py-4">Click robots above to arrange them in order</p>
//             ) : (
//               <div className="flex flex-wrap gap-3">
//                 {userOrder.map((itemId, index) => {
//                   const item = content.availableItems.find(i => i.id === itemId);
//                   return item ? (
//                     <button
//                       key={`${itemId}-${index}`}
//                       onClick={() => handleOrderItemClick(itemId, index)}
//                       className={`w-16 h-16 ${item.color} rounded-lg flex items-center justify-center text-white font-bold text-xl hover:scale-105 transition-transform shadow-md relative`}
//                     >
//                       {item.label}
//                       <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                         {index + 1}
//                       </span>
//                     </button>
//                   ) : null;
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Feedback */}
//       {showFeedback && (
//         <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
//           <div className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
//             {isCorrect ? '🎉 Correct! Well done!' : '❌ Not quite right. Try again!'}
//           </div>
//           {isCorrect && (
//             <p className="text-green-700 text-sm mt-1">
//               You've successfully completed this exercise. Moving to the next lesson...
//             </p>
//           )}
//         </div>
//       )}

//       {/* Action Buttons */}
//       <div className="flex flex-col sm:flex-row gap-3 mt-6">
//         <button
//           onClick={checkAnswer}
//           disabled={userOrder.length === 0}
//           className={`px-6 py-2 rounded-lg font-medium transition-colors ${
//             userOrder.length === 0 
//               ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
//               : 'bg-blue-600 text-white hover:bg-blue-700'
//           }`}
//         >
//           Check Answer
//         </button>
        
//         <button
//           onClick={resetOrder}
//           className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
//         >
//           <RotateCcw className="w-4 h-4" />
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// // Main Learning Management System Component
// const LearningManagementSystem: React.FC = () => {
//   const [selectedSubModule, setSelectedSubModule] = useState<string | null>('1-1');
//   const [course, setCourse] = useState<Course>(sampleCourse);

//   const handleSubModuleSelect = (moduleId: string, subModuleId: string) => {
//     setSelectedSubModule(subModuleId);
//   };

//   const getCurrentContent = (): ModuleContentData | null => {
//     if (!selectedSubModule) return null;
    
//     for (const module of course.modules) {
//       const subModule = module.subModules.find(sm => sm.id === selectedSubModule);
//       if (subModule) {
//         return subModule.content;
//       }
//     }
//     return null;
//   };

//   const handleModuleComplete = () => {
//     setCourse(prevCourse => ({
//       ...prevCourse,
//       modules: prevCourse.modules.map(module => ({
//         ...module,
//         subModules: module.subModules.map(subModule => 
//           subModule.id === selectedSubModule 
//             ? { ...subModule, completed: true }
//             : subModule
//         )
//       }))
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 md:p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Course Header */}
//         <CourseHeader
//           title={course.title}
//           level={course.level}
//           description={course.description}
//           overallProgress={course.overallProgress}
//         />

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Module Hierarchy - Takes up 1 column on large screens */}
//           <div className="lg:col-span-1">
//             <ModuleHierarchy
//               modules={course.modules}
//               selectedSubModule={selectedSubModule}
//               onSubModuleSelect={handleSubModuleSelect}
//             />
//           </div>

//           {/* Module Content - Takes up 2 columns on large screens */}
//           <div className="lg:col-span-2">
//             <ModuleContent
//               content={getCurrentContent()}
//               onComplete={handleModuleComplete}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LearningManagementSystem;


// Sample data structure (same as your original)
// const sampleCourse = {
//   id: '1',
//   title: 'Logic',
//   level: 'Intermediate',
//   description: 'Stretch your analytic muscles with codebreaking and logical robots.',
//   overallProgress: 15,
//   modules: [
//     {
//       id: '1',
//       title: 'Order Logic',
//       progress: 25,
//       totalLessons: 8,
//       completedLessons: 2,
//       status: 'In Progress',
//       subModules: [
//         {
//           id: '1-1',
//           title: 'Neighbors',
//           duration: '15 min',
//           difficulty: 'Easy',
//           completed: false,
//           content: {
//             title: 'Neighbors',
//             description: 'The robots line up for evaluation. Let\'s put them in the correct order by knowing who they\'re next to.',
//             instructions: [
//               'Line up the robots in the proper order.',
//               'A and C are neighbors.',
//               'B and C are before A.'
//             ],
//             availableItems: [
//               { id: 'B', label: 'B', color: 'bg-gray-600' },
//               { id: 'C', label: 'C', color: 'bg-blue-500' },
//               { id: 'A', label: 'A', color: 'bg-green-500' }
//             ],
//             correctOrder: ['B', 'C', 'A']
//           }
//         },
//         {
//           id: '1-2',
//           title: 'Heights',
//           duration: '20 min',
//           difficulty: 'Easy',
//           completed: false,
//           content: {
//             title: 'Heights',
//             description: 'Arrange the robots by their relative heights using the given clues.',
//             instructions: [
//               'Arrange robots by height from shortest to tallest.',
//               'Robot X is taller than Robot Y.',
//               'Robot Z is shorter than Robot Y but taller than Robot W.'
//             ],
//             availableItems: [
//               { id: 'X', label: 'X', color: 'bg-purple-500' },
//               { id: 'Y', label: 'Y', color: 'bg-orange-500' },
//               { id: 'Z', label: 'Z', color: 'bg-red-500' },
//               { id: 'W', label: 'W', color: 'bg-yellow-500' }
//             ],
//             correctOrder: ['W', 'Z', 'Y', 'X']
//           }
//         },
//         {
//           id: '1-3',
//           title: 'Comparisons',
//           duration: '25 min',
//           difficulty: 'Medium',
//           completed: false,
//           content: {
//             title: 'Comparisons',
//             description: 'Use logical comparisons to determine the correct sequence.',
//             instructions: [
//               'Order the items based on the comparison rules.',
//               'Item P comes before Q.',
//               'Item R comes after Q but before S.',
//               'Item T comes before P.'
//             ],
//             availableItems: [
//               { id: 'P', label: 'P', color: 'bg-indigo-500' },
//               { id: 'Q', label: 'Q', color: 'bg-pink-500' },
//               { id: 'R', label: 'R', color: 'bg-teal-500' },
//               { id: 'S', label: 'S', color: 'bg-cyan-500' },
//               { id: 'T', label: 'T', color: 'bg-lime-500' }
//             ],
//             correctOrder: ['T', 'P', 'Q', 'R', 'S']
//           }
//         }
//       ]
//     },
//     {
//       id: '2',
//       title: 'Pattern Recognition',
//       progress: 0,
//       totalLessons: 6,
//       completedLessons: 0,
//       status: 'Pending',
//       subModules: [
//         {
//           id: '2-1',
//           title: 'Sequences',
//           duration: '18 min',
//           difficulty: 'Medium',
//           completed: false,
//           content: {
//             title: 'Sequences',
//             description: 'Identify and complete number sequences using logical patterns.',
//             instructions: [
//               'Find the pattern in the sequence.',
//               'Each number follows a specific rule.',
//               'Complete the sequence by placing the correct numbers.'
//             ],
//             availableItems: [
//               { id: '2', label: '2', color: 'bg-blue-600' },
//               { id: '8', label: '8', color: 'bg-green-600' },
//               { id: '12', label: '12', color: 'bg-red-600' },
//               { id: '18', label: '18', color: 'bg-purple-600' }
//             ],
//             correctOrder: ['2', '8', '18', '12']
//           }
//         }
//       ]
//     }
//   ]
// };


import React, { useState } from "react";
import { 
  Search, ChevronDown, ChevronRight, CheckCircle, Circle, Clock, Play,
  RotateCcw, Menu, X, ArrowLeft, ArrowRight, Home, BookOpen, Target,
  Award, ChevronLeft
} from "lucide-react";
import { sampleCourse } from "./courseData.tsx";

// Compact Course Header
const CompactCourseHeader = ({ title, level, overallProgress, onMenuToggle }) => (
  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 shadow-lg">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <Search className="w-6 h-6" />
          <div>
            <h1 className="text-lg font-bold">{title}</h1>
            <div className="flex items-center gap-2 text-sm text-purple-100">
              <span className="bg-yellow-400 text-black px-2 py-0.5 rounded-full text-xs font-semibold">
                {level}
              </span>
              <span>{overallProgress}% Complete</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <div className="w-32 bg-white/20 rounded-full h-2">
          <div
            className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
      </div>
    </div>
  </div>
);

// Collapsible Sidebar
const CollapsibleSidebar = ({ modules, selectedSubModule, onSubModuleSelect, isOpen, onClose }) => {
  const [expandedModules, setExpandedModules] = useState(new Set(['1']));
  const toggleModule = (id) => {
    const s = new Set(expandedModules);
    s.has(id) ? s.delete(id) : s.add(id);
    setExpandedModules(s);
  };
  const getDiffColor = (d) =>
    d === 'Easy' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
    d === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
    d === 'Hard' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' :
    'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200';

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />}
      <div
        className={`
          fixed top-0 left-0 h-full bg-white dark:bg-gray-900 shadow-xl z-50 transition-transform duration-300 w-80
          lg:relative lg:translate-x-0 lg:z-auto lg:shadow-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 lg:hidden">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Learning Path</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <X className="w-5 h-5 text-gray-900 dark:text-white" />
            </button>
          </div>
        </div>

        <div className="p-4 overflow-y-auto h-full">
          <div className="hidden lg:block mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Learning Path</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Track your progress through each module
            </p>
          </div>
          <div className="space-y-2">
            {modules.map((m, idx) => (
              <div key={m.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div
                  className={`p-3 cursor-pointer transition-colors ${
                    expandedModules.has(m.id)
                      ? 'bg-blue-50 dark:bg-blue-900'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => toggleModule(m.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-gray-900 dark:text-white">{m.title}</h3>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {m.completedLessons}/{m.totalLessons} lessons
                        </div>
                      </div>
                    </div>
                    {expandedModules.has(m.id)
                      ? <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-300" />
                      : <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-300" />}
                  </div>
                </div>
                {expandedModules.has(m.id) && (
                  <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                    {m.subModules.map(sm => (
                      <div
                        key={sm.id}
                        className={`p-2 cursor-pointer transition-colors border-l-4 ${
                          selectedSubModule === sm.id
                            ? 'bg-blue-100 dark:bg-blue-800 border-blue-500'
                            : 'bg-white dark:bg-gray-900 border-transparent hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                        onClick={() => { onSubModuleSelect(m.id, sm.id); onClose(); }}
                      >
                        <div className="flex items-center gap-2 ml-2">
                          {sm.completed
                            ? <CheckCircle className="w-4 h-4 text-green-500" />
                            : <Circle className="w-4 h-4 text-gray-400" />}
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-sm text-gray-900 dark:text-white truncate">{sm.title}</h4>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${getDiffColor(sm.difficulty)}`}>
                                {sm.difficulty}
                              </span>
                              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                                <Clock className="w-3 h-3" />
                                {sm.duration}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// Content Navigation Tabs
const ContentNavigation = ({ currentModule, subModules, selectedSubModule, onSubModuleSelect }) => {
  const idx = subModules.findIndex(sm => sm.id === selectedSubModule);
  const goPrev = () => idx > 0 && onSubModuleSelect(currentModule.id, subModules[idx - 1].id);
  const goNext = () => idx < subModules.length - 1 && onSubModuleSelect(currentModule.id, subModules[idx + 1].id);

  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{currentModule.title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Lesson {idx + 1} of {subModules.length}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={goPrev}
            disabled={idx === 0}
            className={`p-2 rounded-lg transition-colors ${
              idx === 0
                ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            disabled={idx === subModules.length - 1}
            className={`p-2 rounded-lg transition-colors ${
              idx === subModules.length - 1
                ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {subModules.map((sm, i) => (
          <button
            key={sm.id}
            onClick={() => onSubModuleSelect(currentModule.id, sm.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedSubModule === sm.id
                ? 'bg-blue-600 text-white'
                : sm.completed
                ? 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-700'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <div className="flex items-center gap-2">
              {sm.completed && <CheckCircle className="w-4 h-4" />}
              <span>{i + 1}. {sm.title}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

// Enhanced Module Content
const EnhancedModuleContent = ({ content, onComplete }) => {
  const [userOrder, setUserOrder] = useState([]);
  const [avail, setAvail] = useState([]);
  const [ok, setOk] = useState(null);
  const [fb, setFb] = useState(false);

  React.useEffect(() => {
    if (content) {
      setAvail([...content.availableItems]);
      setUserOrder([]);
      setOk(null);
      setFb(false);
    }
  }, [content]);

  const pick = (item) => {
    setAvail(a => a.filter(i => i.id !== item.id));
    setUserOrder(u => [...u, item.id]);
    setOk(null);
    setFb(false);
  };
  const remove = (id, ix) => {
    const item = content.availableItems.find(i => i.id === id);
    setAvail(a => [...a, item]);
    setUserOrder(u => u.filter((_, i) => i !== ix));
    setOk(null);
    setFb(false);
  };
  const check = () => {
    const correct = JSON.stringify(userOrder) === JSON.stringify(content.correctOrder);
    setOk(correct);
    setFb(true);
    if (correct && onComplete) setTimeout(onComplete, 2000);
  };
  const reset = () => {
    setAvail([...content.availableItems]);
    setUserOrder([]);
    setOk(null);
    setFb(false);
  };

  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-96 bg-gray-50 dark:bg-gray-800">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-400 dark:text-gray-600" />
          <h3 className="text-xl font-semibold mb-2 dark:text-white">Select a Lesson</h3>
          <p>Choose a lesson from the navigation to begin</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{content.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{content.description}</p>
        <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-xl p-6">
          <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" /> Instructions:
          </h3>
          <ul className="space-y-2">
            {content.instructions.map((inst, i) => (
              <li key={i} className="flex items-start gap-3 text-blue-800 dark:text-blue-200">
                <CheckCircle className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0" />
                <span>{inst}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Interactive */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Available Robots:</h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 min-h-32">
            <div className="flex flex-wrap justify-center gap-4">
              {avail.map(item => (
                <button
                  key={item.id}
                  onClick={() => pick(item)}
                  className={`w-20 h-20 ${item.color} rounded-xl flex items-center justify-center text-white font-bold text-2xl hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            {!avail.length && (
              <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                All robots have been placed!
              </div>
            )}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Order:</h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 min-h-32">
            {!userOrder.length ? (
              <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                <ArrowLeft className="w-8 h-8 mx-auto mb-2 text-gray-400 dark:text-gray-600" />
                Click robots to arrange them in order
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-4">
                {userOrder.map((id, i) => {
                  const item = content.availableItems.find(it => it.id === id);
                  return item ? (
                    <button
                      key={id + i}
                      onClick={() => remove(id, i)}
                      className={`w-20 h-20 ${item.color} rounded-xl flex items-center justify-center text-white font-bold text-2xl hover:scale-105 transition-all duration-200 shadow-lg relative`}
                    >
                      {item.label}
                      <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-sm w-6 h-6 rounded-full flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                    </button>
                  ) : null;
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Feedback */}
      {fb && (
        <div className={`mb-6 p-6 rounded-xl ${
          ok
            ? 'bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700'
            : 'bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700'
        }`}>
          <div className={`font-semibold text-lg mb-2 ${
            ok ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'
          }`}>
            {ok ? '🎉 Excellent! You got it right!' : '❌ Not quite right. Try again!'}
          </div>
          <p className={ok ? 'text-green-700 dark:text-green-200' : 'text-red-700 dark:text-red-200'}>
            {ok
              ? "You've successfully completed this exercise. Great job! Moving to the next lesson..."
              : 'Review the instructions and try rearranging the robots.'}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={check}
          disabled={!userOrder.length}
          className={`px-8 py-3 rounded-xl font-medium transition-all duration-200 ${
            !userOrder.length
              ? 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
          }`}
        >
          Check Answer
        </button>
        <button
          onClick={reset}
          className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 flex items-center gap-2 hover:shadow-lg"
        >
          <RotateCcw className="w-4 h-4" /> Reset
        </button>
      </div>
    </div>
  );
};

// Main LMS Component
const LearningManagementSystem = () => {
  const [selectedSubModule, setSelected] = useState("1-1");
  const [course, setCourse] = useState(sampleCourse);
  const [sidebarOpen, setSidebar] = useState(false);

  const onSelect = (mid, sid) => setSelected(sid);
  const onComplete = () =>
    setCourse(c => ({
      ...c,
      modules: c.modules.map(m => ({
        ...m,
        subModules: m.subModules.map(sm => sm.id === selectedSubModule ? { ...sm, completed: true } : sm)
      }))
    }));

  const current = (() => {
    for (const m of course.modules)
      for (const sm of m.subModules)
        if (sm.id === selectedSubModule)
          return { content: sm.content, module: m };
    return null;
  })();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <CompactCourseHeader
        title={course.title}
        level={course.level}
        overallProgress={course.overallProgress}
        onMenuToggle={() => setSidebar(true)}
      />
      <div className="flex">
        <CollapsibleSidebar
          modules={course.modules}
          selectedSubModule={selectedSubModule}
          onSubModuleSelect={onSelect}
          isOpen={sidebarOpen}
          onClose={() => setSidebar(false)}
        />
        <div className="flex-1 lg:ml-0">
          {current && (
            <ContentNavigation
              currentModule={current.module}
              subModules={current.module.subModules}
              selectedSubModule={selectedSubModule}
              onSubModuleSelect={onSelect}
            />
          )}
          <div className="bg-white dark:bg-gray-900 min-h-screen">
            <EnhancedModuleContent content={current?.content} onComplete={onComplete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningManagementSystem;
