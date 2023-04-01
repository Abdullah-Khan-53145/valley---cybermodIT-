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
const router = createBrowserRouter([
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
]);

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
