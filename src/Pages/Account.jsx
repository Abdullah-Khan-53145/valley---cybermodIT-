import React from "react";
import UserForm from "../Components/UserForm";
import { useParams } from "react-router-dom";
function Account() {
  const { id } = useParams();
  return (
    <div className="bg-white flex justify-center items-center min-h-screen">
      <UserForm id={id} />
    </div>
  );
}

export default Account;
