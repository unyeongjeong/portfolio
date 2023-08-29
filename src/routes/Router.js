import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Dashboard = lazy(() => import("../views/Dashboard.js"));
const Member = lazy(() => import("../views/Member.js"));
const Auth = lazy(() => import("../views/ui/Auth.js"));
const Menu = lazy(() => import("../views/ui/Menu.js"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Code = lazy(() => import("../views/ui/Code.js"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Log = lazy(() => import("../views/ui/Log.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" /> },
      { path: "/dashboard", exact: true, element: <Dashboard /> },
      { path: "/member", exact: true, element: <Member /> },
      { path: "/auth", exact: true, element: <Auth /> },
      { path: "/menu", exact: true, element: <Menu /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/code", exact: true, element: <Code /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/log", exact: true, element: <Log /> },
    ],
  },
];

export default ThemeRoutes;
