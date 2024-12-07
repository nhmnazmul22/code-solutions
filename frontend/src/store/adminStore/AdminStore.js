import axios from "axios";
import { create } from "zustand";
import { getToken, removeToken, setToken } from "../../utility/utility";

const BASE_URL = "https://code-solutions-one.vercel.app/admin";

const useAdminStore = create((set) => ({
  // Admin Login Manage Start

  isAdminLogin: false,
  adminLogin: async (loginInfo) => {
    const res = await axios.post(`${BASE_URL}/loginAdmin`, loginInfo);
    if (res.data.status === "Success") {
      set({ isAdminLogin: true });
      setToken("adminToken", res.data.token);
    } else {
      set({ isAdminLogin: false });
    }
  },
  verifyAdmin: () => {
    const token = getToken("adminToken");
    set({ isAdminLogin: !!token });
  },
  adminLogout: () => {
    set({ isAdminLogin: false });
    removeToken("adminToken");
  },

  // Admin Login Manage End
  adminInfo: null,
  getAdminInfo: async () => {
    const res = await axios.get(`${BASE_URL}/getAdminProfile`, {
      withCredentials: true,
    });
    console.log(res);
  },
}));

export default useAdminStore;
