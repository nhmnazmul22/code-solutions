import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AddService from "./pages/admin/AddService";
import AddTeamMember from "./pages/admin/AddTeamMember";
import AdminProfile from "./pages/admin/AdminProfile";
import BlogPage from "./pages/admin/BlogPage";
import CustomerPage from "./pages/admin/CustomerPage";
import Dashboard from "./pages/admin/Dashboard";
import LoginPage from "./pages/admin/LoginPage";
import ServicesPage from "./pages/admin/ServicesPage";
import TeamPage from "./pages/admin/TeamPage";
import UpdateService from "./pages/admin/UpdateService";
import UpdateTeamMember from "./pages/admin/UpdateTeamMember";
import UsersPage from "./pages/admin/UsersPage";
import ProtectedRoute from "./routes/ProtectRoutes";
function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<LoginPage />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <UsersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/teams"
          element={
            <ProtectedRoute>
              <TeamPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/services"
          element={
            <ProtectedRoute>
              <ServicesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/blogs"
          element={
            <ProtectedRoute>
              <BlogPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/customerMessages"
          element={
            <ProtectedRoute>
              <CustomerPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/profile"
          element={
            <ProtectedRoute>
              <AdminProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/addTeamMember"
          element={
            <ProtectedRoute>
              <AddTeamMember />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/updateTeamMember/:teamID"
          element={
            <ProtectedRoute>
              <UpdateTeamMember />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/addService"
          element={
            <ProtectedRoute>
              <AddService />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/updateService/:serviceID"
          element={
            <ProtectedRoute>
              <UpdateService />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster position="top-center" />
    </>
  );
}

export default App;
