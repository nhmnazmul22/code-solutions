import { Route } from "react-router-dom";
import AddBlog from "../pages/admin/AddBlog";
import AddService from "../pages/admin/AddService";
import AddTeamMember from "../pages/admin/AddTeamMember";
import BlogPage from "../pages/admin/BlogPage";
import DashboardPage from "../pages/admin/DashboardPage";
import LoginPage from "../pages/admin/LoginPage";
import ServicesPage from "../pages/admin/ServicesPage";
import TeamPage from "../pages/admin/TeamPage";
import UpdateBlog from "../pages/admin/UpdateBlog";
import UpdateService from "../pages/admin/UpdateService";
import UpdateTeamMember from "../pages/admin/UpdateTeamMember";
import UsersPage from "../pages/admin/UsersPage";
import ProtectedRoute from "./ProtectRoutes";

const AdminRoutes = [
  <Route key="login" path="/admin" element={<LoginPage />} />,
  <Route
    key="dashboard"
    path="/admin/dashboard"
    element={
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    }
  />,
  <Route
    key="users"
    path="/admin/users"
    element={
      <ProtectedRoute>
        <UsersPage />
      </ProtectedRoute>
    }
  />,
  <Route
    key="teams"
    path="/admin/teams"
    element={
      <ProtectedRoute>
        <TeamPage />
      </ProtectedRoute>
    }
  />,
  <Route
    key="services"
    path="/admin/services"
    element={
      <ProtectedRoute>
        <ServicesPage />
      </ProtectedRoute>
    }
  />,
  <Route
    key="blogs"
    path="/admin/blogs"
    element={
      <ProtectedRoute>
        <BlogPage />
      </ProtectedRoute>
    }
  />,
  <Route
    key="addTeamMember"
    path="admin/addTeamMember"
    element={
      <ProtectedRoute>
        <AddTeamMember />
      </ProtectedRoute>
    }
  />,
  <Route
    key="updateTeamMember"
    path="admin/updateTeamMember/:teamID"
    element={
      <ProtectedRoute>
        <UpdateTeamMember />
      </ProtectedRoute>
    }
  />,
  <Route
    key="addService"
    path="admin/addService"
    element={
      <ProtectedRoute>
        <AddService />
      </ProtectedRoute>
    }
  />,
  <Route
    key="updateService"
    path="admin/updateService/:serviceID"
    element={
      <ProtectedRoute>
        <UpdateService />
      </ProtectedRoute>
    }
  />,
  <Route
    key="addBlog"
    path="admin/addBlog"
    element={
      <ProtectedRoute>
        <AddBlog />
      </ProtectedRoute>
    }
  />,
  <Route
    key="updateBlog"
    path="admin/updateBlog/:blogID"
    element={
      <ProtectedRoute>
        <UpdateBlog />
      </ProtectedRoute>
    }
  />,
];

export default AdminRoutes;
