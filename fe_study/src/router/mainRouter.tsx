import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomeScreen from "../pages/HomeScreen";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashbord from "../pages/dashboard/Dashbord";
import DashBoardScreen from "../pages/dashboard/DashBoardScreen";
import StudyHistoryCard from "../pages/dashboard/StudyHistoryCard";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashbord />,
    children: [
      {
        index: true,
        element: <DashBoardScreen />,
      },
      {
        index: true,
        path: "history",
        element: (
          <div className="flex w-full justify-end ">
            <div className="w-[calc(100%-270px)] h-[100vh] overflow-hidden">
              <StudyHistoryCard />
            </div>
          </div>
        ),
      },
    ],
  },
]);
