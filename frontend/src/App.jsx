import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AddBlog from "./pages/admin/AddBlog";
import AddService from "./pages/admin/AddService";
import AddTeamMember from "./pages/admin/AddTeamMember";
import BlogPage from "./pages/admin/BlogPage";
import DashboardPage from "./pages/admin/DashboardPage";
import LoginPage from "./pages/admin/LoginPage";
import ServicesPage from "./pages/admin/ServicesPage";
import TeamPage from "./pages/admin/TeamPage";
import UpdateBlog from "./pages/admin/UpdateBlog";
import UpdateService from "./pages/admin/UpdateService";
import UpdateTeamMember from "./pages/admin/UpdateTeamMember";
import UsersPage from "./pages/admin/UsersPage";
import HomePage from "./pages/user/HomePage";
import ProtectedRoute from "./routes/ProtectRoutes";
function App() {
  return (
    <>
      {/* Admin Panel Routes Start */}
      <Routes>
        <Route path="/admin" element={<LoginPage />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
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
        <Route
          path="admin/addBlog"
          element={
            <ProtectedRoute>
              <AddBlog />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/updateBlog/:blogID"
          element={
            <ProtectedRoute>
              <UpdateBlog />
            </ProtectedRoute>
          }
        />
      </Routes>
      {/* Admin Panel Routes End */}
      {/* User Routes Start */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/signup" element={<HomePage />} />
        <Route path="/blogs" element={<HomePage />} />
        <Route path="/services" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
      </Routes>
      {/* User Routes End */}
      <Toaster position="top-center" />
    </>
  );
}

export default App;
