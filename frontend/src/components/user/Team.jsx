import React, { useEffect } from "react";
import { IconContext } from "react-icons";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import CardSkeleton from "../../skeleton/CardSkeleton";
import useTeamStore from "../../store/TeamStore";

const Team = () => {
  const { teamsInfo, getTeamsInfo } = useTeamStore();

  useEffect(() => {
    (async () => {
      await getTeamsInfo();
    })();
  }, []);

  return (
    <div className="py-20 px-[3%] sm:px-[5%] bg-slate-100">
      <h2 className="text-center text-[34px] lg:text-[50px] font-bold">
        Our Team Members
      </h2>
      <div className="divider w-[300px] m-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4 mt-10">
        {teamsInfo?.length > 0 ? (
          teamsInfo.map((team, index) => {
            if (index > 5) {
              return null;
            } else {
              return (
                <div
                  key={team._id}
                  className="card bg-base-100 w-full shadow-xl cursor-pointer hover:translate-y-3 duration-200 py-5"
                >
                  <figure className="w-full h-[300px] px-5">
                    <img
                      className="w-full h-full object-cover object-top rounded-lg"
                      src={team.imgUrl}
                      alt="Profile_img"
                    />
                  </figure>
                  <div className="card-body gap-0 py-3 text-center">
                    <h2 className="font-bold text-lg">{team.name}</h2>
                    <p className="text-blue-400">{team.role}</p>
                  </div>
                  <div className="flex gap-4 justify-center items-center">
                    <IconContext.Provider
                      value={{
                        className: "text-dark hover:text-blue-600 duration-300",
                      }}
                    >
                      <FaFacebookSquare size={40} />
                      <AiFillLinkedin size={40} />
                      <FaSquareInstagram size={40} />
                    </IconContext.Provider>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <CardSkeleton length={4} />
        )}
      </div>
    </div>
  );
};

export default Team;
