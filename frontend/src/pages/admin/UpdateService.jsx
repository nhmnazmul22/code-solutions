import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../../components/admin/common/Form";
import Layout from "../../components/admin/layout/Layout";
import useServiceStore from "../../store/ServiceStore";

const UpdateService = () => {
  const { getServiceInfo, serviceInfo, updateService } = useServiceStore();
  const { serviceID } = useParams();

  const fields = [
    {
      name: "title",
      label: "Service Title",
      type: "text",
      placeholder: "Service Title",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      placeholder: "Service Description",
      required: true,
    },
  ];

  useEffect(() => {
    (async () => {
      await getServiceInfo(serviceID);
    })();
  }, []);

  return (
    <Layout>
      <Form
        key={serviceInfo?._id || "new"}
        fromTitle="Update Services"
        fields={fields}
        isSelectDisable={true}
        selectValues={[]}
        mainFaction={updateService}
        initialData={serviceInfo}
        url="/admin/services"
      />
    </Layout>
  );
};

export default UpdateService;
