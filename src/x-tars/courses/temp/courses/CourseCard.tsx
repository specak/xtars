import React, { useRef } from 'react';
import {
  BookOpen, Users, Trophy, ArrowRight, Star, CheckCircle,
  Clock, Circle, RotateCw, ChevronLeft, ChevronRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <RotateCw className="w-5 h-5 text-blue-500" />;
      case 'pending':
      default:
        return <Circle className="w-5 h-5 text-gray-400 dark:text-gray-500" />;
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-700 dark:bg-green-200/10 dark:text-green-300';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-200/10 dark:text-yellow-300';
      case 'Advanced': return 'bg-red-100 text-red-700 dark:bg-red-200/10 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-200/10 dark:text-gray-300';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-700 dark:bg-green-200/10 dark:text-green-300';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-200/10 dark:text-blue-300';
      case 'pending':
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-200/10 dark:text-gray-300';
    }
  };

  const handleModuleClick = (module) => {
    navigate(module.navigationPath);
  };

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8">
      {/* Course Header Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
        <div className="h-48 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 relative overflow-hidden">
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-full object-cover mix-blend-overlay opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{course.title}</h2>
          
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>Lesson: {course.lessons}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>Student: {course.students}</span>
              </div>
              <div className="flex items-center gap-1">
                <Trophy className="w-4 h-4" />
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                  {course.level}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{course.rating}</span>
            </div>
          </div>
          
          <button className="bg-black text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors">
            Start Course
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Course Modules */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Course Modules</h3>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {course.modules.map((module) => (
            <div 
              key={module.id} 
              className="flex-shrink-0 w-80 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-all transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              onClick={() => handleModuleClick(module)}
            >
              <div className="h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden">
                <img 
                  src={module.image} 
                  alt={module.title}
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-3 right-3">
                  {getStatusIcon(module.status)}
                </div>
              </div>
              
              <div className="p-5">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{module.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{module.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{module.lessons}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium capitalize ${getStatusBadge(module.status)}`}>
                    {module.status === 'in-progress' ? 'In Progress' : module.status}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
