import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
function ForgetPasswordModal({ email, status, setStatus }) {
  const navigate = useNavigate();
  const hideEmail = function (email) {
    return email.replace(/(.{2})(.*)(?=@)/, function (gp1, gp2, gp3) {
      for (let i = 0; i < gp3.length; i++) {
        gp2 += "*";
      }
      return gp2;
    });
  };
  const handleSubmit = () => {
    navigate("/accounts/reset");
    setStatus(false);
  };
  return (
    <>
      <div
        className={` ${
          status ? "flex" : "hidden"
        } fixed z-10 inset-0  bg-modal  items-center justify-center`}
      >
        {/* More Signout Confrimation modal */}
        <div className="bg-white sm:mx-0 mx-8  flex flex-col justify-center items-center gap-6 py-4 rounded-2xl w-full max-w-[25rem]">
          {/* Modal Header */}
          <div className="flex w-full px-8 pb-4  border-b justify-between ">
            <h2 className="text-lg font-extrabold  ">Forgot Password</h2>
            <XMarkIcon
              onClick={() => setStatus(!status)}
              className="w-5 h-5 cursor-pointer"
            />
          </div>
          {/* Asking about the logout surety */}

          <div className="flex flex-col gap-6 px-8 w-full justify-center items-center ">
            <div className="w-full text-center ">
              <p>A password reset link has beed sent on {hideEmail(email)}</p>
            </div>
            {/* Confrimation buttons */}
            <div className="flex gap-2 pb-8">
              <button
                onClick={() => handleSubmit()}
                className="btn-secondary py-3 px-8 text-sm font-semibold"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPasswordModal;
