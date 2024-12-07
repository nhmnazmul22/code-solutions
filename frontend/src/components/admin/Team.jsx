import React, { useEffect } from "react";
import Loading from "../../skeleton/Loading";
import useTeamStore from "../../store/TeamStore";
import ActionBar from "./common/ActionBar";
import HorizontalCard from "./common/HorizontalCard";

const Team = () => {
  const { teamsInfo, getTeamsInfo } = useTeamStore();

  const handleUserDelete = async (userID) => {
    await deleteUser(userID);
  };

  useEffect(() => {
    (async () => {
      await getTeamsInfo();
    })();
  }, []);
  return (
    <>
      <ActionBar title="Team Members" isDisable={false} />
      <div className="flex flex-col gap-3 p-5">
        {!teamsInfo ? (
          <Loading />
        ) : teamsInfo.length === 0 ? (
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
          teamsInfo.map((team) => (
            <HorizontalCard
              key={team._id}
              object={team}
              // handleDeleteAction={handleUserDelete}
              fieldNames={["name", "bio", "role"]}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Team;
