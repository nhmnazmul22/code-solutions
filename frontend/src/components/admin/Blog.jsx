import React, { useEffect } from "react";
import Loading from "../../skeleton/Loading";
import useBlogStore from "../../store/BlogStore";
import ActionBar from "./common/ActionBar";
import Card from "./common/Card";

const Blog = () => {
  const { blogsInfo, getBlogsInfo, deleteBlog } = useBlogStore();

  const blogDelete = async (serviceID) => {
    await deleteBlog(serviceID);
  };

  const fields = [
    { label: "Blog Title", name: "title" },
    { label: "Short Description", name: "shortDes" },
    { label: "Category", name: "category" },
    { label: "Tags", name: "tags" },
    { label: "Description", name: "description" },
  ];

  useEffect(() => {
    (async () => {
      await getBlogsInfo();
    })();
  }, []);

  return (
    <>
      <ActionBar title="Blogs" isDisable={false} url="/admin/addBlog" />
      <div className="flex flex-col gap-3 p-5">
        {!blogsInfo ? (
          <Loading />
        ) : blogsInfo.length === 0 ? (
          <div role="alert" className="alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info h-6 w-6 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>No user Found!!</span>
          </div>
        ) : (
          blogsInfo.map((blog) => (
            <Card
              key={blog._id}
              object={blog}
              isDisable={false}
              handleDeleteAction={blogDelete}
              fieldNames={fields}
              url="/admin/updateBlog"
            />
          ))
        )}
      </div>
    </>
  );
};

export default Blog;
