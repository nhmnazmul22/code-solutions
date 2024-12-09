import React from "react";
import Blogs from "../../components/user/Blogs";
import Layout from "../../components/user/Layout/Layout";
const BlogsPage = () => {
  return (
    <Layout>
      <Blogs showAllBlog={true} />
    </Layout>
  );
};

export default BlogsPage;
