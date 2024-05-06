import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosLogOut } from "react-icons/io";
import { changePassword, logOut } from "../../redux/Slices/LogInSlice";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const { user, password } = useSelector((s) => s.userSlice);
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const nav = useNavigate();
  const dispatch = useDispatch();
  const changePas = () => {
    if (password === oldPassword) {
      dispatch(changePassword(newPassword));
    } else {
      alert(404);
    }
    setNewPassword("");
    setOldPassword("");
  };
  return (
    <div id="" className="py-[70px]">
      <div className="container">
        <div className="flex relative items-start justify-between w-[70%] mx-auto bg-[#ffffff38] rounded-[20px] p-[30px]">
          <img src={user.url} alt="user" width={300} />
          <div className="">
            <h1 className="text-white text-[40px]">{user.name}</h1>
            <h1 className="text-white text-[40px]">{user.email}</h1>
            <h1 className="text-white text-[40px]">{user.mobile}</h1>
            <div className="flex items-start justify-center flex-col gap-3">
              <input
                type="text"
                className="w-[200px] text-[20px] text-white bg-transparent border-2 border-white rounded-[10px] py-[5px] px-[10px] outline-none"
                placeholder="Old"
                onChange={(e) => setOldPassword(e.target.value)}
                value={oldPassword}
              />
              <input
                placeholder="New"
                type="text"
                className="w-[200px] text-[20px] text-white bg-transparent border-2 border-white rounded-[10px] py-[5px] px-[10px] outline-none"
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
              />
              <button
                onClick={() => changePas()}
                class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75  bg-transparent rounded-md group-hover:bg-opacity-0">
                  Change
                </span>
              </button>
            </div>
          </div>
          <a
            onClick={() => {
              dispatch(logOut());
              nav("/");
            }}
            className="text-white text-[40px] absolute bottom-[30px] right-[30px] cursor-pointer"
          >
            <IoIosLogOut />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
