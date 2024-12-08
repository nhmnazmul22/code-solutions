import React from "react";
import Form from "../../components/admin/common/Form";
import Layout from "../../components/admin/layout/Layout";
import useTeamStore from "../../store/TeamStore";
const AddTeamMember = () => {
  const { addNewTeamMember } = useTeamStore();
  const selectValues = [
    "Web Development",
    "Website Designer",
    "App Development",
    "Data Analysis",
    "Marketing",
    "Product Management",
    "UX/UI Design",
  ];

  const fields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Your Full Name",
      required: true,
    },
    {
      name: "bio",
      label: "Profile Bio",
      type: "text",
      placeholder: "Profile Bio",
      required: true,
    },
  ];

  return (
    <Layout>
      <Form
        fromTitle="Add Team Member"
        fields={fields}
        isSelectDisable={false}
        selectValues={selectValues}
        isEditorDisable={true}
        mainFaction={addNewTeamMember}
      />
    </Layout>
  );
};

export default AddTeamMember;
