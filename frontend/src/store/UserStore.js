import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";
import { getToken, removeToken, setToken } from "../utility/utility";
const ADMIN_BASE_URL = "https://code-solutions-one.vercel.app/admin";
const APP_BASE_URL = "https://code-solutions-one.vercel.app/app";

const useUserStore = create((set) => ({
  userInfo: null,
  getUsersInfo: async () => {
    const res = await axios.get(`${ADMIN_BASE_URL}/getUsers`, {
      withCredentials: true,
    });
    if (res.data.status === "Success") {
      set({ userInfo: res.data.data });
    } else {
      toast.error("User info not found");
    }
  },

  deleteUser: async (userID) => {
    const res = await axios.delete(`${ADMIN_BASE_URL}/removeUser/${userID}`, {
      withCredentials: true,
    });
    if (res.data.status === "Success") {
      toast.success("User deleted successfully");
      set((state) => ({
        userInfo: state.userInfo.filter((user) => user._id !== userID),
      }));
    }
  },

  isUserLogin: false,
  loginUser: async (loginInfo) => {
    const res = await axios.post(`${APP_BASE_URL}/loginUser`, loginInfo, {
      withCredentials: true,
    });
    if (res.data.status === "Success") {
      toast.success("User login successful");
      setToken("appToken", res.data.token);
      set({ isUserLogin: true });
    } else {
      toast.error("User login failed");
      set({ isUserLogin: false });
    }
  },

  verifyUser: () => {
    const token = getToken("appToken");
    set({ isUserLogin: !!token });
  },

  userLogout: async () => {
    const res = await axios.post(
      `${APP_BASE_URL}/logoutUser`,
      {},
      { withCredentials: true }
    );
    if (res.data.status === "Success") {
      set({ isUserLogin: false });
      removeToken("appToken");
      toast.success("Logout Successful");
    } else {
      toast.error("Logout failed");
    }
  },

  signupUser: async (signupInfo) => {
    const res = await axios.post(`${APP_BASE_URL}/signupUser`, signupInfo);
    if (res.data.status === "Success") {
      toast.success("User signup successful");
    } else {
      toast.error("User signup failed");
    }
  },

  userProfileInfo: null,
  getUsersProfileInfo: async () => {
    try {
      const res = await axios.get(`${APP_BASE_URL}/getUserProfile`, {
        withCredentials: true,
      });
      if (res.data.status === "Success") {
        set({ userProfileInfo: res.data.data[0] });
        return res.data.data;
      } else {
        toast.error("User info not found");
        return null;
      }
    } catch (err) {
      return null;
    }
  },
}));

export default useUserStore;
