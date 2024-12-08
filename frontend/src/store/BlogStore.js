import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

const BASE_URL = "https://code-solutions-one.vercel.app/admin";

const useBlogStore = create((set) => ({
  blogsInfo: null,
  getBlogsInfo: async () => {
    const res = await axios.get(`${BASE_URL}/getBlogs`, {
      withCredentials: true,
    });
    if (res.data.status === "Success") {
      set({ blogsInfo: res.data.data });
    } else {
      toast.error(res.data.data);
    }
  },

  blogInfo: null,
  getBlogInfo: async (blogID) => {
    set({ blogInfo: null });
    const res = await axios.get(`${BASE_URL}/getBlogDataById/${blogID}`, {
      withCredentials: true,
    });
    if (res.data.status === "Success") {
      set({ blogInfo: res.data.data });
    } else {
      toast.error(res.data.data);
    }
  },

  addNewBlog: async (blogInfo) => {
    const res = await axios.post(`${BASE_URL}/setBlog`, blogInfo, {
      withCredentials: true,
    });
    if (res.data.status === "Success") {
      toast.success("New Blog Added Successful");
      return res.data.data;
    } else {
      toast.error("New Blog Added Failed");
      return res.data.data;
    }
  },

  deleteBlog: async (blogID) => {
    const res = await axios.delete(`${BASE_URL}/removeBlog/${blogID}`, {
      withCredentials: true,
    });
    if (res.data.status === "Success") {
      toast.success("Blog Deleted Successfully");
      set((state) => ({
        blogsInfo: state.blogsInfo.filter((blog) => blog._id !== blogID),
      }));
    } else {
      toast.error("Blog deletion failed");
    }
  },

  updateBlog: async (blogInfo, blogID) => {
    const res = await axios.post(
      `${BASE_URL}/updateServices/${blogID}`,
      blogInfo,
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

export default useBlogStore;
