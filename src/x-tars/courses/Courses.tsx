import Badge from "../../components/ui/badge/Badge";
import {
    ArrowUpIcon,
    GroupIcon,
} from "../../icons";
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';

const cardClassName = "rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6";

export default function CourseList() {
    const navigate = useNavigate();

    const handleCourseOpen = (id: string) => {
        console.log(`View clicked, ${id}`);
        navigate(`/courses/${id}`);
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className={cardClassName}>
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                        <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
                    </div>

                    <div className="flex items-end justify-between mt-5">
                        <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Accountancy
                            </span>
                            <div className="flex items-center space-x-2 mt-2 cursor-pointer hover:opacity-80" onClick={() => handleCourseOpen("accountancy")}>
                                <span className="text-lg text-gray-500 dark:text-gray-400">
                                    View
                                </span>
                                <ArrowRightCircleIcon className="size-8 dark:text-white/90" />
                            </div>
                        </div>
                        <Badge color="success">
                            <ArrowUpIcon />
                            99.01%
                        </Badge>
                    </div>
                </div>

                <div className={cardClassName}>
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                        <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
                    </div>

                    <div className="flex items-end justify-between mt-5">
                        <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Maths
                            </span>
                            <div className="flex items-center space-x-2 mt-2 cursor-pointer hover:opacity-80" onClick={() => handleCourseOpen("maths")}>
                                <span className="text-lg text-gray-500 dark:text-gray-400">
                                    View
                                </span>
                                <ArrowRightCircleIcon className="size-8 dark:text-white/90" />
                            </div>
                        </div>
                        <Badge color="success">
                            <ArrowUpIcon />
                            99.01%
                        </Badge>
                    </div>
                </div>

                <div className={cardClassName}>
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                        <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
                    </div>

                    <div className="flex items-end justify-between mt-5">
                        <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Customers
                            </span>
                            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                                3,782
                            </h4>
                        </div>
                        <Badge color="success">
                            <ArrowUpIcon />
                            11.01%
                        </Badge>
                    </div>
                </div>

                <div className={cardClassName}>
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                        <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
                    </div>

                    <div className="flex items-end justify-between mt-5">
                        <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Customers
                            </span>
                            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                                3,782
                            </h4>
                        </div>
                        <Badge color="success">
                            <ArrowUpIcon />
                            11.01%
                        </Badge>
                    </div>
                </div>

                <div className={cardClassName}>
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                        <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
                    </div>

                    <div className="flex items-end justify-between mt-5">
                        <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Customers
                            </span>
                            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                                3,782
                            </h4>
                        </div>
                        <Badge color="success">
                            <ArrowUpIcon />
                            11.01%
                        </Badge>
                    </div>
                </div>

                <div className={cardClassName}>
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                        <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
                    </div>

                    <div className="flex items-end justify-between mt-5">
                        <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Customers
                            </span>
                            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                                3,782
                            </h4>
                        </div>
                        <Badge color="success">
                            <ArrowUpIcon />
                            11.01%
                        </Badge>
                    </div>
                </div>

            </div>
        </>
    );
}
