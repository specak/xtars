import PageMeta from "../../components/common/PageMeta";
import CourseList from "./Courses";
import Courses from "./temp/Courses";

export default function CoursesHome() {
  return (
    <>
      <PageMeta
        title="Home - Courses"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      {/* <CourseList/> */}
      <Courses/>
    </>
  );
}
