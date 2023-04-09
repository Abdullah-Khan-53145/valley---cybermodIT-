import React from "react";
import SavedIcon from "../assets/savedIcon.png";
import { useNavigate } from "react-router-dom";

function LoginSuccess() {
  const navigate = useNavigate();
  return (
    <main className="bg-white flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-8 px-8 w-fit justify-center items-center ">
        <img className="w-52" src={SavedIcon} alt="" />
        <h2 className="text-xl font-semibold pb-8">
          Your Account is successfully created
        </h2>
        <button
          onClick={(e) => navigate("/dashboard/search")}
          className="btn-primary"
        >
          Go to Dashboard
        </button>
      </div>
    </main>
  );
}

export default LoginSuccess;
