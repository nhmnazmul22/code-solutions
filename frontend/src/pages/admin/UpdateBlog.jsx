import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../../components/admin/common/Form";
import Layout from "../../components/admin/layout/Layout";
import useBlogStore from "../../store/BlogStore";
const UpdateBlog = () => {
  const { getBlogInfo, blogInfo, updateBlog } = useBlogStore();

  const { blogID } = useParams();

  const fields = [
    {
      name: "title",
      label: "Blog Title",
      type: "text",
      placeholder: "Blog Title",
      required: true,
    },
    {
      name: "shortDes",
      label: "Short Description",
      type: "text",
      placeholder: "Short Description",
      required: true,
    },
    {
      name: "tags",
      label: "Tags",
      type: "text",
      placeholder: "Tags, Tags",
      required: true,
    },
    {
      name: "category",
      label: "Category",
      type: "text",
      placeholder: "Enter Category",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      placeholder: "Enter Description",
      required: true,
    },
  ];

  useEffect(() => {
    (async () => {
      await getBlogInfo(blogID);
    })();
  }, []);
  return (
    <Layout>
      <Form
        key={blogInfo?._id || "new"}
        fromTitle="Update Blog"
        fields={fields}
        isSelectDisable={true}
        selectValues={[]}
        mainFaction={updateBlog}
        initialData={blogInfo}
        url="/admin/blogs"
      />
    </Layout>
  );
};

export default UpdateBlog;
