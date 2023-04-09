import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import AcceptRefundPolicy from "./AcceptRefundPolicy";
import ForgetPasswordModal from "./ForgetPasswordModal";
function UserForm({ id }) {
  3;
  const navigate = useNavigate();
  const [password, setPassword] = useState({ current: false, new: false });
  const [toggle, setToggle] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="md:max-w-[26rem]  flex flex-col gap-8 items-center p-8 bg-white"
    >
      <ForgetPasswordModal status={toggle} setStatus={setToggle} />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold">
          {id == "login" && "Hello Again"}
          {id == "register" && "Create New Account"}
          {id == "reset" && "Reset Password"}
        </h1>
        <p className="text-gray-600">
          {id == "login" && "Welcome back. Login to continue tracking"}
          {id == "register" && "Fill your information to continue"}
        </p>
      </div>
      {/* Email */}
      {(id === "login" || id === "register") && (
        <div className="flex  p-5 rounded-md   items-center justify-between w-full bg-gray-100">
          <input
            className="bg-gray-100 text-gray-600"
            type="text"
            placeholder="Enter Email"
          />
        </div>
      )}
      {/* Current Password */}
      <div className=" bg-gray-100 flex p-5 rounded-md  items-center justify-between w-full">
        <input
          type={password.current ? "text" : "password"}
          placeholder="Password"
          className="bg-gray-100 text-gray-600"
        />
        {password.current ? (
          <EyeIcon
            onClick={() =>
              setPassword({ ...password, current: !password.current })
            }
            className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700 transition-colors"
          />
        ) : (
          <EyeSlashIcon
            onClick={() =>
              setPassword({ ...password, current: !password.current })
            }
            className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700 transition-colors"
          />
        )}
      </div>
      {/* New Password */}
      {id !== "login" && (
        <div className="bg-gray-100 flex  p-5 rounded-md   items-center justify-between w-full">
          <input
            type={password.new ? "text" : "password"}
            placeholder="Password Again"
            className="bg-gray-100 text-gray-600"
          />
          {password.new ? (
            <EyeIcon
              onClick={() => setPassword({ ...password, new: !password.new })}
              className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700 transition-colors"
            />
          ) : (
            <EyeSlashIcon
              onClick={() => setPassword({ ...password, new: !password.new })}
              className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700 transition-colors"
            />
          )}
        </div>
      )}
      {id === "login" && (
        <div className="text-sm flex justify-end w-full">
          <button
            onClick={(e) => {
              setToggle(true);
              e.preventDefault();
            }}
            className="font-bold hover:underline cursor-pointer"
          >
            Forget Password?
          </button>
        </div>
      )}
      {id === "register" && (
        <div className="text-sm flex justify-start w-full">
          <AcceptRefundPolicy />
        </div>
      )}
      {(id === "login" || id === "register") && (
        <div className="w-full flex flex-col gap-2">
          <button
            onClick={(e) =>
              navigate(
                id === "register" ? "/accounts/login/" : "/dashboard/search"
              )
            }
            className="btn-primary py-4 w-full flex justify-center"
          >
            Login
          </button>
          <button
            onClick={() =>
              navigate(
                id === "register" ? "/login/success/" : "/accounts/register"
              )
            }
            className="btn-secondary text-sm py-4 w-full flex justify-center"
          >
            Signup
          </button>
        </div>
      )}
      {id === "reset" && (
        <button
          onClick={() => navigate("/accounts/login")}
          className="btn-primary py-4 w-full flex justify-center"
        >
          Reset
        </button>
      )}
    </form>
  );
}

export default UserForm;
