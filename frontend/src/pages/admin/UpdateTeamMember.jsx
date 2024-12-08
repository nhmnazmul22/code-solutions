import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../../components/admin/common/Form";
import Layout from "../../components/admin/layout/Layout";
import useTeamStore from "../../store/TeamStore";
const UpdateTeamMember = () => {
  const { getMemberInfo, memberInfo, updateTeamMember } = useTeamStore();
  const { teamID } = useParams();

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

  useEffect(() => {
    (async () => {
      await getMemberInfo(teamID);
    })();
  }, []);

  return (
    <Layout>
      <Form
        key={memberInfo?._id || "new"}
        fromTitle="Update Team Member"
        fields={fields}
        isSelectDisable={false}
        selectValues={selectValues}
        isEditorDisable={true}
        mainFaction={updateTeamMember}
        initialData={memberInfo}
        url="/admin/teams"
      />
    </Layout>
  );
};

export default UpdateTeamMember;
