import React, { useState } from "react";
import "./App.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import ProtectedRoute from "../main";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Switch from "@mui/material/Switch";

function App() {
  const [notification, setNotification] = useState(0);
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });

  const handleNotification = () => {
    console.log("clicke btton");
    setNotification((prevNotification) => prevNotification + 1);
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <ProtectedRoute>
          <Navbar
            notification={notification}
            handleNotification={handleNotification}
          />

          <SideBar />
          <Switch
            checked={toggleDarkMode}
            onChange={toggleDarkTheme}
            style={{ float: "right" }}
          />
          <Outlet />

          <Footer />
        </ProtectedRoute>
      </ThemeProvider>
    </>
  );
}

export default App;
