import React from "react";
import ReactDOM from "react-dom/client";
import "./routes/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import App from "./routes/App.jsx";
import Attendance from "./components/Attendance.jsx";
import Calender from "./components/Calender.jsx";
import AttandanceOverview from "./components/AttandanceOverview.jsx";
import EmployeeCardsDetails from "./components/EmployeeCardsDetails.jsx";
import Homepage from "./components/Homepage.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "popper.js";
import AddEmployeeForm from "./components/AddEmployeeForm.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/Attendance", element: <Attendance /> },
      { path: "/Calendar", element: <Calender /> },
      {
        path: "AttendancePath",
        element: <EmployeeCardsDetails />,
      },
      {
        path: "viewemployeedetails",
        element: <AttandanceOverview />,
      },
      {
        path: "addemployeeform",
        element: <AddEmployeeForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-kejocjuhfxqkztqe.us.auth0.com"
    clientId="CauoEQrI2iDL4m85IoXy3n32NHUclHVC"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  </Auth0Provider>
);

export default ProtectedRoute;
