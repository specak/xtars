interface Course {
    id: string;
    title: string;
    level: string;
    description: string;
    overallProgress: number;
    modules: Module[];
  }
  
  interface Module {
    id: string;
    title: string;
    progress: number;
    totalLessons: number;
    completedLessons: number;
    status: string;
    subModules: SubModule[];
  }
  
  interface SubModule {
    id: string;
    title: string;
    duration: string;
    difficulty: string;
    completed: boolean;
    content: Content;
  }
  
  interface Content {
    title: string;
    description: string;
    instructions: string[];
    availableItems: Item[];
    correctOrder: string[];
  }
  
  interface Item {
    id: string;
    label: string;
    color: string;
  }
  
  const sampleCourse: Course = {
    id: '1',
    title: 'Logic',
    level: 'Intermediate',
    description: 'Stretch your analytic muscles with codebreaking and logical robots.',
    overallProgress: 15,
    modules: [
      {
        id: '1',
        title: 'Order Logic',
        progress: 25,
        totalLessons: 8,
        completedLessons: 2,
        status: 'In Progress',
        subModules: [
          {
            id: '1-1',
            title: 'Neighbors',
            duration: '15 min',
            difficulty: 'Easy',
            completed: false,
            content: {
              title: 'Neighbors',
              description: 'The robots line up for evaluation. Let\'s put them in the correct order by knowing who they\'re next to.',
              instructions: [
                'Line up the robots in the proper order.',
                'A and C are neighbors.',
                'B and C are before A.'
              ],
              availableItems: [
                { id: 'B', label: 'B', color: 'bg-gray-600' },
                { id: 'C', label: 'C', color: 'bg-blue-500' },
                { id: 'A', label: 'A', color: 'bg-green-500' }
              ],
              correctOrder: ['B', 'C', 'A']
            }
          },
          {
            id: '1-2',
            title: 'Heights',
            duration: '20 min',
            difficulty: 'Easy',
            completed: false,
            content: {
              title: 'Heights',
              description: 'Arrange the robots by their relative heights using the given clues.',
              instructions: [
                'Arrange robots by height from shortest to tallest.',
                'Robot X is taller than Robot Y.',
                'Robot Z is shorter than Robot Y but taller than Robot W.'
              ],
              availableItems: [
                { id: 'X', label: 'X', color: 'bg-purple-500' },
                { id: 'Y', label: 'Y', color: 'bg-orange-500' },
                { id: 'Z', label: 'Z', color: 'bg-red-500' },
                { id: 'W', label: 'W', color: 'bg-yellow-500' }
              ],
              correctOrder: ['W', 'Z', 'Y', 'X']
            }
          },
          {
            id: '1-3',
            title: 'Comparisons',
            duration: '25 min',
            difficulty: 'Medium',
            completed: false,
            content: {
              title: 'Comparisons',
              description: 'Use logical comparisons to determine the correct sequence.',
              instructions: [
                'Order the items based on the comparison rules.',
                'Item P comes before Q.',
                'Item R comes after Q but before S.',
                'Item T comes before P.'
              ],
              availableItems: [
                { id: 'P', label: 'P', color: 'bg-indigo-500' },
                { id: 'Q', label: 'Q', color: 'bg-pink-500' },
                { id: 'R', label: 'R', color: 'bg-teal-500' },
                { id: 'S', label: 'S', color: 'bg-cyan-500' },
                { id: 'T', label: 'T', color: 'bg-lime-500' }
              ],
              correctOrder: ['T', 'P', 'Q', 'R', 'S']
            }
          }
        ]
      },
      {
        id: '2',
        title: 'Pattern Recognition',
        progress: 0,
        totalLessons: 6,
        completedLessons: 0,
        status: 'Pending',
        subModules: [
          {
            id: '2-1',
            title: 'Sequences',
            duration: '18 min',
            difficulty: 'Medium',
            completed: false,
            content: {
              title: 'Sequences',
              description: 'Identify and complete number sequences using logical patterns.',
              instructions: [
                'Find the pattern in the sequence.',
                'Each number follows a specific rule.',
                'Complete the sequence by placing the correct numbers.'
              ],
              availableItems: [
                { id: '2', label: '2', color: 'bg-blue-600' },
                { id: '8', label: '8', color: 'bg-green-600' },
                { id: '12', label: '12', color: 'bg-red-600' },
                { id: '18', label: '18', color: 'bg-purple-600' }
              ],
              correctOrder: ['2', '8', '18', '12']
            }
          },
          {
            id: '2-2',
            title: 'Patterns',
            duration: '22 min',
            difficulty: 'Hard',
            completed: false,
            content: {
              title: 'Patterns',
              description: 'Discover complex patterns in arrangements and sequences.',
              instructions: [
                'Analyze the given pattern.',
                'Identify the underlying rule.',
                'Apply the rule to solve the puzzle.'
              ],
              availableItems: [
                { id: 'α', label: 'α', color: 'bg-emerald-600' },
                { id: 'β', label: 'β', color: 'bg-violet-600' },
                { id: 'γ', label: 'γ', color: 'bg-rose-600' },
                { id: 'δ', label: 'δ', color: 'bg-amber-600' }
              ],
              correctOrder: ['α', 'γ', 'β', 'δ']
            }
          }
        ]
      },
      {
        id: '3',
        title: 'Advanced Logic',
        progress: 0,
        totalLessons: 10,
        completedLessons: 0,
        status: 'Pending',
        subModules: [
          {
            id: '3-1',
            title: 'Complex Relationships',
            duration: '30 min',
            difficulty: 'Hard',
            completed: false,
            content: {
              title: 'Complex Relationships',
              description: 'Solve puzzles involving multiple logical relationships and constraints.',
              instructions: [
                'Consider all given relationships.',
                'Some constraints may conflict - find the valid solution.',
                'Order elements based on multiple criteria.'
              ],
              availableItems: [
                { id: '1', label: '1', color: 'bg-slate-600' },
                { id: '2', label: '2', color: 'bg-zinc-600' },
                { id: '3', label: '3', color: 'bg-stone-600' },
                { id: '4', label: '4', color: 'bg-neutral-600' },
                { id: '5', label: '5', color: 'bg-gray-600' }
              ],
              correctOrder: ['3', '1', '4', '2', '5']
            }
          }
        ]
      }
    ]
  };
  
  export { sampleCourse };
  export type { Course, Module, SubModule, Content, Item };