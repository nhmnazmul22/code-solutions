import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

const BASE_URL = "https://code-solutions-one.vercel.app/admin";

const useServiceStore = create((set) => ({
  servicesInfo: null,
  getServicesInfo: async () => {
    const res = await axios.get(`${BASE_URL}/getServices`, {
      withCredentials: true,
    });
    if (res.data.status === "Success") {
      set({ servicesInfo: res.data.data });
    } else {
      toast.error(res.data.data);
    }
  },

  serviceInfo: null,
  getServiceInfo: async (serviceID) => {
    set({ serviceInfo: null });
    const res = await axios.get(`${BASE_URL}/getServiceById/${serviceID}`, {
      withCredentials: true,
    });
    if (res.data.status === "Success") {
      set({ serviceInfo: res.data.data });
    } else {
      toast.error(res.data.data);
    }
  },

  addNewService: async (serviceInfo) => {
    const res = await axios.post(`${BASE_URL}/setServices`, serviceInfo, {
      withCredentials: true,
    });
    if (res.data.status === "Success") {
      toast.success("New Service Added Successful");
      return res.data.data;
    } else {
      toast.error("New Service Added Failed");
      return res.data.data;
    }
  },

  deleteService: async (serviceID) => {
    const res = await axios.delete(`${BASE_URL}/removeServices/${serviceID}`, {
      withCredentials: true,
    });
    if (res.data.status === "Success") {
      toast.success("Service Deleted Successfully");
      set((state) => ({
        servicesInfo: state.servicesInfo.filter(
          (service) => service._id !== serviceID
        ),
      }));
    } else {
      toast.error("Team Member deletion failed");
    }
  },

  updateService: async (serviceInfo, serviceID) => {
    const res = await axios.post(
      `${BASE_URL}/updateServices/${serviceID}`,
      serviceInfo,
      {
        withCredentials: true,
      }
    );
    if (res.data.status === "Success") {
      toast.success("Service Updated Successfully");
      return res.data.data;
    } else {
      toast.error("Service deletion failed");
      return res.data.data;
    }
  },
}));

export default useServiceStore;
