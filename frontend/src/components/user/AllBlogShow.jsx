import React, { useEffect } from "react";
import CardSkeleton from "../../skeleton/CardSkeleton";
import useBlogStore from "../../store/BlogStore";
const AllBlogShow = () => {
  const { getBlogsInfo, blogsInfo } = useBlogStore();

  useEffect(() => {
    (async () => {
      await getBlogsInfo();
    })();
  }, []);

  return (
    <div className="py-20 px-[3%] sm:px-[5%]">
      <h2 className="text-center text-[50px] font-bold">Our Blogs</h2>
      <div className="divider w-[300px] m-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 p-4 mt-10">
        {blogsInfo?.length > 0 ? (
          blogsInfo.map((blog) => (
            <div
              key={blog._id}
              className="card bg-base-100 w-full shadow-xl cursor-pointer hover:translate-y-3 duration-200"
            >
              <figure>
                <img src={blog.imgUrl} alt="Electronics" />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-start mb-5">
                  <div className="badge badge-outline">{blog.category}</div>
                </div>
                <h2 className="card-title">{blog.title}</h2>
                <p>{blog.shortDes}</p>
                <div className="divider w-full m-auto"></div>
                <div className="">
                  <p>Author: {blog.adminDetails.name}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <CardSkeleton length={4} />
        )}
      </div>
    </div>
  );
};

export default AllBlogShow;
