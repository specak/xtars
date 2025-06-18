// Import all course data
import { logicalReasoningCourse } from './LogicalReasoningCourse';
import { physicsCourse } from './PhysicsCourse';

// Export array of all courses
export const allCourses = [
  logicalReasoningCourse,
  physicsCourse
];

// Export individual courses for direct import if needed
export { logicalReasoningCourse, physicsCourse };