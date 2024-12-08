import React, { useEffect } from "react";
import Loading from "../../skeleton/Loading";
import useTeamStore from "../../store/TeamStore";
import ActionBar from "./common/ActionBar";
import Card from "./common/Card";

const Team = () => {
  const { teamsInfo, getTeamsInfo, deleteTeamMember } = useTeamStore();

  const deleteMember = async (memberID) => {
    await deleteTeamMember(memberID);
  };

  const fields = [
    { label: "Full Name", name: "name" },
    { label: "Bio", name: "bio" },
    { label: "Role", name: "role" },
  ];

  useEffect(() => {
    (async () => {
      await getTeamsInfo();
    })();
  }, []);
  return (
    <>
      <ActionBar
        title="Team Members"
        isDisable={false}
        url="/admin/addTeamMember"
      />
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
            <span>No Team Member Found!!</span>
          </div>
        ) : (
          teamsInfo.map((team) => (
            <Card
              key={team._id}
              object={team}
              isDisable={false}
              handleDeleteAction={deleteMember}
              fieldNames={fields}
              url="/admin/updateTeamMember"
            />
          ))
        )}
      </div>
    </>
  );
};

export default Team;
