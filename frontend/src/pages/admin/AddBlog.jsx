import React from "react";
import Form from "../../components/admin/common/Form";
import Layout from "../../components/admin/layout/Layout";
import useBlogStore from "../../store/BlogStore";
const AddBlog = () => {
  const { addNewBlog } = useBlogStore();

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

  return (
    <Layout>
      <Form
        fromTitle="Add Blog"
        fields={fields}
        isSelectDisable={true}
        selectValues={[]}
        mainFaction={addNewBlog}
        url="/admin/blogs"
      />
    </Layout>
  );
};

export default AddBlog;
