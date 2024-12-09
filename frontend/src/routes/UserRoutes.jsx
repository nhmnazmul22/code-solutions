import { Route } from "react-router-dom";
import AboutPage from "../pages/user/AboutPage";
import BlogPage from "../pages/user/BlogsPage";
import ContactPage from "../pages/user/ContactPage";
import HomePage from "../pages/user/HomePage";
import LoginPage from "../pages/user/LoginPage";
import ServicesPage from "../pages/user/ServicesPage";
import SignupPage from "../pages/user/SignupPage";

const UserRoutes = [
  <Route key="home" path="/" element={<HomePage />} />,
  <Route key="login" path="/login" element={<LoginPage />} />,
  <Route key="signup" path="/signup" element={<SignupPage />} />,
  <Route key="blogs" path="/blogs" element={<BlogPage />} />,
  <Route key="services" path="/services" element={<ServicesPage />} />,
  <Route key="about" path="/about" element={<AboutPage />} />,
  <Route key="contact" path="/contact" element={<ContactPage />} />,
];

export default UserRoutes;
