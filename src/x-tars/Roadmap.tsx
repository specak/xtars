import React, { useRef, useEffect, useState } from "react";
import {
    TrendingDown,
    XCircle,
    ArrowRightCircle,
    Smile,
    CheckCircle,
} from "lucide-react";

interface Checkpoint {
    icon: React.ReactNode;
    color: string;
    textColor: string;
    label: string;
    description: string;
}

const checkpoints: Checkpoint[] = [
    {
        icon: <TrendingDown className="w-5 h-5" />,
        color: "bg-blue-600",
        textColor: "text-blue-600",
        label: "Planning",
        description: "Define goals and scope.",
    },
    {
        icon: <XCircle className="w-5 h-5" />,
        color: "bg-pink-600",
        textColor: "text-pink-600",
        label: "Design",
        description: "Wireframes and visual strategy.",
    },
    {
        icon: <ArrowRightCircle className="w-5 h-5" />,
        color: "bg-yellow-400",
        textColor: "text-yellow-600",
        label: "Development",
        description: "Code, test, and build.",
    },
    {
        icon: <Smile className="w-5 h-5" />,
        color: "bg-teal-600",
        textColor: "text-teal-600",
        label: "Testing",
        description: "QA and bug fixing.",
    },
    {
        icon: <CheckCircle className="w-5 h-5" />,
        color: "bg-orange-600",
        textColor: "text-orange-600",
        label: "Launch",
        description: "Go live and monitor.",
    },
];

const Roadmap: React.FC = () => {
    const pathRef = useRef<SVGPathElement>(null);
    const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

    useEffect(() => {
        const path = pathRef.current;
        if (!path) return;

        const totalLength = path.getTotalLength();
        const spacing = totalLength / (checkpoints.length + 1);

        const newPositions = checkpoints.map((_, i) => {
            const point = path.getPointAtLength(spacing * (i + 1));
            return { x: point.x, y: point.y };
        });

        setPositions(newPositions);
    }, []);

    return (
        <div className="relative w-full h-[700px] bg-gray-100 dark:bg-gray-900 overflow-hidden text-gray-800 dark:text-gray-100 transition-colors duration-300">
          <h2 className="text-2xl font-bold text-center pt-6 mb-6">
            Roadmap With Multiple Icons Success Achievement
          </h2>
      
          {/* SVG Road */}
          <svg className="absolute top-0 left-0 w-full h-full z-0" preserveAspectRatio="none">
            <path
              ref={pathRef}
              d="M 0 600 C 200 400, 400 800, 600 600 C 800 400, 1000 200, 1300 400"
              stroke="#1f2937"
              strokeWidth="80"
              fill="none"
            />
            <path
              d="M 0 600 C 200 400, 400 800, 600 600 C 800 400, 1000 200, 1300 400"
              stroke="#f3f4f6"
              strokeWidth="50"
              fill="none"
            />
          </svg>
      
          {/* Checkpoints */}
          {positions.map((pos, index) => {
            const cp = checkpoints[index];
            return (
              <div
                key={index}
                className="absolute z-10 flex flex-col items-center group"
                style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}
              >
                {/* Location Icon with hover lift */}
                <div className="cursor-pointer relative transition-transform duration-300 group-hover:-translate-y-2 group-hover:animate-bounce group-hover:shadow-lg">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${cp.color} shadow-md transform transition-transform duration-300 text-white`}
                  >
                    {cp.icon}
                  </div>
                  {/* Triangle tail */}
                  <div className={`${cp.color} w-3 h-3 rotate-45 absolute bottom-[-6px] left-1/2 -translate-x-1/2`} />
                </div>
      
                {/* Always visible label */}
                <div className={`mt-2 text-sm font-bold text-lg text-gray-500 dark:text-gray-40`}>
                  {cp.label}
                </div>
      
                {/* Tooltip on hover */}
                <div className="opacity-0 group-hover:opacity-100 mt-1 px-3 py-1 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded shadow-md dark:shadow-lg text-xs text-gray-700 dark:text-gray-200 transition duration-200 w-40 text-center z-10">
                  {cp.description}
                </div>
              </div>
            );
          })}
        </div>
      );
      
};

export default Roadmap;
