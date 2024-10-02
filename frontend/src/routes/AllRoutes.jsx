import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import VerifyEmail from "../components/VerifyEmail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Error from "../components/Error";

function AllRoutes() {
  const location = useLocation();

  // Define the routes where Navbar and Footer should be visible
  const showHeaderFooter = ["/", "/login", "/verify-email"].includes(
    location.pathname
  );

  return (
    <div>
      {showHeaderFooter && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </div>
  );
}

export default AllRoutes;
