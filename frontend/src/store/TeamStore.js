import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";
const BASE_URL = "https://code-solutions-one.vercel.app/admin";

const useTeamStore = create((set) => ({
  teamsInfo: null,
  getTeamsInfo: async () => {
    const res = await axios.get(`${BASE_URL}/getTeam`, {
      withCredentials: true,
    });
    if (res.data.status === "Success") {
      set({ teamsInfo: res.data.data });
    } else {
      toast.error("Team info not found");
    }
  },

  // deleteUser: async (userID) => {
  //   const res = await axios.delete(`${BASE_URL}/removeUser/${userID}`, {
  //     withCredentials: true,
  //   });
  //   if (res.data.status === "Success") {
  //     toast.success("User deleted successfully");
  //     set((state) => ({
  //       userInfo: state.userInfo.filter((user) => user._id !== userID),
  //     }));
  //   }
  // },
}));

export default useTeamStore;
