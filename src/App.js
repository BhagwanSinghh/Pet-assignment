import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/Routing/PrivateRoute";
// import Dashboard from "./components/Dashboard/Dashboard";
import SignUpPage from "./pages/sign-up.page.js";
import LogInPage from "./pages/log-in.page.js";
import HomePage from "./pages/home.page.js";
import PetManagementPage from "./pages/pet-management.page.js";
import ContactUsPage from "./pages/contact-us.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/manage"
          element={
            <PrivateRoute>
              <PetManagementPage />
            </PrivateRoute>
          }
        />
         <Route
          path="/contact"
          element={
            <PrivateRoute>
              <ContactUsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
