import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";

import useBreadcrumbs from "use-react-router-breadcrumbs";
import Match from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";


import { Params } from "react-router-dom";
import CoursesRouter from "../x-tars/courses/Router";
import CoursesHome from "../x-tars/courses/Home";
import Home from "../x-tars/courses/Home";

interface MatchParams extends Params {
  [key: string]: string | undefined;
}

interface Match {
  params: MatchParams;
  pathname: string;
  // add other properties if needed
}

export const routesConfig = [
  { path: "/", element: <Home />, breadcrumb: "Home" },
  { path: "/courses", element: <CoursesHome />, breadcrumb: "Courses" },
  {
    path: "/courses/:courseid",
    element: <CoursesRouter />,
    breadcrumb: ({ match }: { match: Match }) =>
      decodeURIComponent(match.params.courseid ?? ""),
  },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routesConfig);

  return (
    <nav className="text-sm text-gray-600 mb-4 dark:text-white/90">
      <ol className="flex items-center space-x-2 dark:text-white/90">
        {breadcrumbs.map(({ match, breadcrumb }, idx) => {
          const isLast = idx === breadcrumbs.length - 1;

          return (
            <li key={match.pathname} className="flex items-center space-x-1 dark:text-white/90">
              {idx > 0 && <span className="text-gray-400">/</span>}
              {isLast ? (
                <span className="text-gray-800 capitalize dark:text-white/90">{breadcrumb}</span>
              ) : (
                <Link to={match.pathname} className="text-blue-600 hover:underline capitalize ">
                  {breadcrumb}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};


const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
        <Backdrop />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          <Breadcrumbs/>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;
