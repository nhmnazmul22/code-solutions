import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";
const BASE_URL = "https://code-solutions-one.vercel.app/app";

const useMessageStore = create((set) => ({
  setMessage: async (messageInfo) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/setCustomerMessage`,
        messageInfo,
        {
          withCredentials: true,
        }
      );
      if (res.data.status === "Success") {
        toast.success("Message Sent Successful");
        return res.data.data;
      } else {
        toast.success("Message Sent Failed");
        return null;
      }
    } catch (err) {
      toast.error("Please, Login First !!");
      return null;
    }
  },
}));

export default useMessageStore;
