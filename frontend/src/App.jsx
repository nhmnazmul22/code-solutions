import { Toaster } from "react-hot-toast";
import { Routes } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";
function App() {
  return (
    <>
      <Routes>
        {AdminRoutes}
        {UserRoutes}
      </Routes>
      <Toaster position="top-center" />
    </>
  );
}

export default App;
