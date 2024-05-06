import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/Slices/LogInSlice";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const { user, password } = useSelector((s) => s.userSlice);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userImg, setUserImg] = useState("");

  const dispatch = useDispatch();
  const nav = useNavigate();
  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setUserImg(reader.result);
    reader.readAsDataURL(file);
  };

  const userLog = () => {
    if (userPassword === password) {
      let newUser = {
        id: 1,
        name: userName,
        email: userEmail,
        mobile: userMobile,
        password: userPassword,
        url: userImg,
      };
      nav(`/`);
      return dispatch(addUser(newUser));
    } else {
      alert(404);
    }
  };

  return (
    <div id="">
      <div className="container">
        <div className="flex items-center justify-center flex-col gap-[30px] w-[40%] mx-auto">
          {user.url ? (
            <img src={user.url} alt="img" width={100} />
          ) : (
            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <a className="text-white text-[120px]">
                    <FaRegUserCircle />
                  </a>

                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  onChange={onChange}
                />
              </label>
            </div>
          )}

          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            type="text"
            placeholder="Name:"
            className="border-2 text-[24px] w-full rounded-xl border-white bg-transparent py-[10px] px-[60px] text-white outline-none"
          />
          <input
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
            type="text"
            placeholder="Email:"
            className="border-2 text-[24px] w-full rounded-xl border-white bg-transparent py-[10px] px-[60px] text-white outline-none"
          />
          <input
            onChange={(e) => setUserMobile(e.target.value)}
            value={userMobile}
            type="text"
            placeholder="Mobile No.:"
            className="border-2 text-[24px] w-full rounded-xl border-white bg-transparent py-[10px] px-[60px] text-white outline-none"
          />
          <input
            onChange={(e) => setUserPassword(e.target.value)}
            value={userPassword}
            type="password"
            placeholder="Password:"
            className="border-2 text-[24px] w-full rounded-xl border-white bg-transparent py-[10px] px-[60px] text-white outline-none"
          />
          <button
            onClick={() => userLog()}
            className="text-[20px] text-pink-600 border-2 rounded-[10px] border-white py-[5px] px-[80px] mt-[30px]"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
