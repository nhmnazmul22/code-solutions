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
      toast.error(res.data.data);
    }
  },

  addNewTeamMember: async (memberInfo) => {
    const res = await axios.post(`${BASE_URL}/setTeam`, memberInfo, {
      withCredentials: true,
    });
    if (res.data.status === "Success") {
      toast.success("Team Added Successful");
      return res.data.data;
    } else {
      toast.error("Team Added Failed");
      return res.data.data;
    }
  },

  deleteTeamMember: async (memberID) => {
    const res = await axios.delete(`${BASE_URL}/removeTeam/${memberID}`, {
      withCredentials: true,
    });
    if (res.data.status === "Success") {
      toast.success("Team Member deleted successfully");
      set((state) => ({
        teamsInfo: state.teamsInfo.filter((member) => member._id !== memberID),
      }));
    } else {
      toast.error("Team Member deletion failed");
    }
  },

  updateTeamMember: async (memberID) => {
    const res = await axios.post(`${BASE_URL}/updateTeam/${memberID}`, {
      withCredentials: true,
    });
    if (res.data.status === "Success") {
      toast.success("Team Member Updated Successfully");
      return res.data.data;
    } else {
      toast.error("Team Member deletion failed");
      return res.data.data;
    }
  },
}));

export default useTeamStore;
