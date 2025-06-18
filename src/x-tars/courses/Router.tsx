import PageMeta from "../../components/common/PageMeta";
import { useParams } from 'react-router';
import { lazy, Suspense } from "react";
import Roadmap from "../Roadmap";
import Game from "./Game";

const LazyAccountancy = lazy(() => import('./accountancy'));
const LazyMath = lazy(() => import('./maths'));
const LinearArrangementIndex = lazy(() => import('./LogicalReasoning/LinearArrangement/LinearArrangmentIndex.tsx'));



const lazyCourseMap: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
    accountancy: LazyAccountancy,
    maths: LazyMath,
    lineararrangement: LinearArrangementIndex,
};


export default function CoursesRouter() {
    // Extract the `id` param from the URL
    const { courseid } = useParams<{ courseid: string }>();
    if (!courseid) return <div>❌ No course ID provided.</div>;

    const CourseComponent = lazyCourseMap[courseid.toLowerCase()];

    return (
        <>
            <PageMeta
                title={`Course - ${courseid}`}
                description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            />

            {/* <Roadmap/> */}
            <Suspense fallback={<div>⏳ Loading course...</div>}>
                {CourseComponent ? (
                    <CourseComponent />
                ) : (
                    <div>❓ Course not found: {courseid}</div>
                )}
            </Suspense>
            {/* <Game/> */}
        </>
    );
}
