import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Auth/Login";
import Home from "../pages/Auth/Home";

import EditProfile from "../components/profile/EditProfile";
import ProfilePage from "../components/profile/ProfilePage";

import Settings from "../pages/settings/Settings";

import ProtectedRoute from "./ProtectedRoute";
import Register from "../pages/Auth/Register";

const AppRoutes = () => {
  return (
    <Routes>

      {/* PUBLIC ROUTE */}
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/login"
        element={<Login />}
      />

      {/* PROTECTED ROUTES */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/chat/:id"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit-profile"
        element={
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      {/* FALLBACK */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
};

export default AppRoutes;