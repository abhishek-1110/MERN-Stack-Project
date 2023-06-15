import React from "react";
import UserList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Abhishek",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      places: 10,
    },
    {
      id: 2,
      name: "Ayush",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      places: 5,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
