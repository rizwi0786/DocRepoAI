import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from '../pages/LandingPage'
import Login from "../pages/authPages/Login";
import Signup from "../pages/authPages/Signup";
import ForgotPassword from "../pages/authPages/ForgotPassword";
import ResetPassword from "../pages/authPages/ResetPassword";



export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />

      {/* Auth Routes */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth" element={<Navigate to="/auth/login" replace />} />

      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      <Route path="/auth/reset-password" element={<ResetPassword />} />

      {/* (later) Protected routes can go here */}
    </Routes>
  );
}