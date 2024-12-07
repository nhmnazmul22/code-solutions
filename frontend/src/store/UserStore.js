import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";
const BASE_URL = "https://code-solutions-one.vercel.app/admin";

const useUserStore = create((set) => ({
  userInfo: null,
  getUsersInfo: async () => {
    const res = await axios.get(`${BASE_URL}/getUsers`, {
      withCredentials: true,
    });
    if (res.data.status === "Success") {
      set({ userInfo: res.data.data });
    } else {
      toast.error("User info not found");
    }
  },

  deleteUser: async (userID) => {
    const res = await axios.delete(`${BASE_URL}/removeUser/${userID}`, {
      withCredentials: true,
    });
    if (res.data.status === "Success") {
      toast.success("User deleted successfully");
      set((state) => ({
        userInfo: state.userInfo.filter((user) => user._id !== userID),
      }));
    }
  },
}));

export default useUserStore;
