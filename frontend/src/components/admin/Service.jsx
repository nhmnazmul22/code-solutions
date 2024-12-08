import React, { useEffect } from "react";
import Loading from "../../skeleton/Loading";
import useServiceStore from "../../store/ServiceStore";
import ActionBar from "./common/ActionBar";
import Card from "./common/Card";

const Service = () => {
  const { servicesInfo, getServicesInfo, deleteService } = useServiceStore();

  const serviceDelete = async (serviceID) => {
    await deleteService(serviceID);
  };

  useEffect(() => {
    (async () => {
      await getServicesInfo();
    })();
  }, []);
  return (
    <>
      <ActionBar title="Services" isDisable={false} url="/admin/addService" />
      <div className="flex flex-col gap-3 p-5">
        {!servicesInfo ? (
          <Loading />
        ) : servicesInfo.length === 0 ? (
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
          servicesInfo.map((service) => (
            <Card
              key={service._id}
              object={service}
              isDisable={false}
              handleDeleteAction={serviceDelete}
              fieldNames={["serviceTitle"]}
              url="/admin/updateService"
            />
          ))
        )}
      </div>
    </>
  );
};

export default Service;
