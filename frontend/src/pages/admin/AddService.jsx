import React from "react";
import Form from "../../components/admin/common/Form";
import Layout from "../../components/admin/layout/Layout";
import useServiceStore from "../../store/ServiceStore";

const AddService = () => {
  const { addNewService } = useServiceStore();

  const fields = [
    {
      name: "serviceTitle",
      label: "Service Title",
      type: "text",
      placeholder: "Service Title",
      required: true,
    },
  ];

  return (
    <Layout>
      <Form
        fromTitle="Add Team Member"
        fields={fields}
        isSelectDisable={true}
        selectValues={[]}
        isEditorDisable={false}
        mainFaction={addNewService}
        url="/admin/services"
      />
    </Layout>
  );
};

export default AddService;
