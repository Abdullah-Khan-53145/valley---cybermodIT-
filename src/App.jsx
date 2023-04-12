import Header from "./Components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardSearch from "./Pages/DashboardSearch";
import DashboardUsedTracking from "./Pages/DashboardUsedTracking";
import DashboardBuyPlan from "./Pages/DashboardBuyPlan";
import DashboardTutorials from "./Pages/DashboardTutorials";
import DashboardTopGeo from "./Pages/DashboardTopGeo";
import DashboardContactUs from "./Pages/DashboardContactUs";
import DashboardApi from "./Pages/DashboardApi";
import DashboardExtention from "./Pages/DashboardExtention";
import DashboardSettings from "./Pages/DashboardSettings";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import LoginSuccess from "./Pages/LoginSuccess";
import HomeHeader from "./Components/HomeHeader";
import Pricing from "./Pages/Pricing";
import ContactUs from "./Pages/ContactUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeHeader />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Header />,
    children: [
      {
        path: "search",
        element: <DashboardSearch />,
      },
      {
        path: "used-tracking",
        element: <DashboardUsedTracking />,
      },
      {
        path: "buy-a-plan",
        element: <DashboardBuyPlan />,
      },
      {
        path: "tutorials",
        element: <DashboardTutorials />,
      },
      {
        path: "top-geo",
        element: <DashboardTopGeo />,
      },
      {
        path: "contact-us",
        element: <DashboardContactUs />,
      },
      {
        path: "api",
        element: <DashboardApi />,
      },
      {
        path: "extension",
        element: <DashboardExtention />,
      },
      {
        path: "settings",
        element: <DashboardSettings />,
      },
    ],
  },
  {
    path: "/accounts/:id",
    element: <Account />,
  },
  {
    path: "/login/success",
    element: <LoginSuccess />,
  },
]);

function App() {
  return (
    <div className="bg-gray-50 min-h-screen h-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
