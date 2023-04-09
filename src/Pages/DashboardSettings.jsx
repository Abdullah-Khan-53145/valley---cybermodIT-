import React, { useState } from "react";
import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  BookmarkSquareIcon,
} from "@heroicons/react/24/outline";
function DashboardSettings() {
  const [password, setPassword] = useState({ current: false, new: false });
  const handleClick = () => {};

  return (
    <main className="md:mx-16 mx-5 mt-16 flex flex-col gap-8 pb-8">
      {/* Form to manipulate the setting of profile */}
      <form className="md:max-w-[25rem]  flex flex-col gap-8 items-start p-8 bg-white">
        {/* Email */}
        <div className="flex p-4 border-b items-center justify-between w-full">
          <input type="text" placeholder="Email" />
          <EnvelopeIcon className="w-5 h-5 text-gray-950" />
        </div>
        {/* Current Password */}
        <div className="flex p-4 border-b items-center justify-between w-full">
          <input
            type={password.current ? "text" : "password"}
            placeholder="Current Password"
          />
          {password.current ? (
            <EyeIcon
              onClick={() =>
                setPassword({ ...password, current: !password.current })
              }
              className="w-5 h-5 text-gray-950 cursor-pointer hover:text-gray-700 transition-colors"
            />
          ) : (
            <EyeSlashIcon
              onClick={() =>
                setPassword({ ...password, current: !password.current })
              }
              className="w-5 h-5 text-gray-950 cursor-pointer hover:text-gray-700 transition-colors"
            />
          )}
        </div>
        {/* New Password */}
        <div className="flex p-4 border-b items-center justify-between w-full">
          <input
            type={password.new ? "text" : "password"}
            placeholder="New Password"
          />
          {password.new ? (
            <EyeIcon
              onClick={() => setPassword({ ...password, new: !password.new })}
              className="w-5 h-5 text-gray-950 cursor-pointer hover:text-gray-700 transition-colors"
            />
          ) : (
            <EyeSlashIcon
              onClick={() => setPassword({ ...password, new: !password.new })}
              className="w-5 h-5 text-gray-950 cursor-pointer hover:text-gray-700 transition-colors"
            />
          )}
        </div>
        <button className="btn-primary px-10">
          <BookmarkSquareIcon className="w-5 h-5 text-white" />
          <span>Save Setting</span>
        </button>
      </form>
    </main>
  );
}

export default DashboardSettings;
