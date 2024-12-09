import React, { useEffect } from "react";
import CardSkeleton from "../../skeleton/CardSkeleton";
import useServiceStore from "../../store/ServiceStore";
const Services = () => {
  const { servicesInfo, getServicesInfo } = useServiceStore();

  useEffect(() => {
    (async () => {
      await getServicesInfo();
    })();
  }, []);

  return (
    <div className="py-20 px-[3%] sm:px-[5%] bg-slate-100">
      <h2 className="text-center text-[50px] font-bold">Our Services</h2>
      <div className="divider w-[300px] m-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4 mt-10">
        {servicesInfo?.length > 0 ? (
          servicesInfo.map((service) => (
            <div
              key={service._id}
              className="card bg-base-100 w-full shadow-xl cursor-pointer hover:translate-y-3 duration-200"
            >
              <figure>
                <img
                  className="w-full h-[225px] object-cover"
                  src={service.imgUrl}
                  alt="Electronics"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn bg-blue-600 text-white hover:bg-blue-500">
                    Learn More
                  </button>
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

export default Services;
