import React, { useEffect } from "react";
import Loading from "../../skeleton/Loading";
import useUserStore from "../../store/UserStore";
import ActionBar from "./common/ActionBar";
import Card from "./common/Card";

const Users = () => {
  const { userInfo, getUsersInfo, deleteUser } = useUserStore();

  const handleUserDelete = async (userID) => {
    await deleteUser(userID);
  };

  const fields = [
    { label: "Full Name", name: "name" },
    { label: "Email", name: "email" },
  ];

  useEffect(() => {
    (async () => {
      await getUsersInfo();
    })();
  }, []);

  return (
    <>
      <ActionBar title="Users" isDisable={true} />
      <div className="flex flex-col gap-3 p-5">
        {!userInfo ? (
          <Loading />
        ) : userInfo.length === 0 ? (
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
          userInfo.map((user) => (
            <Card
              key={user._id}
              object={user}
              isDisable={true}
              handleDeleteAction={handleUserDelete}
              fieldNames={fields}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Users;
