import axios from "axios";
import React, { useEffect, useState } from "react";
import load from "../../assets/img/loading.svg";
import { FcApproval } from "react-icons/fc";

const SubmitTelegram = () => {
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [success, setSuccess] = useState(false);

  const productSubmit = () => {
    const my_id = `-1002130254320`;
    const token = `6360731223:AAH8CJgACGi1ojTMLv40d1NW4JxgLfnWAbk`;
    const url_api = `https://api.telegram.org/bot${token}/sendMessage`;

    const userData = {
      chat_id: my_id,
      parse_model: "html",
      text: `Заказ: \n
        name: ${userName},
        address: ${userAddress},
        phone: ${userPhone},
        `,
    };
    setTimeout(() => {
      axios.post(url_api, userData);
      setLoading(false);
      setSuccess(true);
    }, 2000);
    setUserName("");
    setUserAddress("");
    setUserPhone("");
    setLoading(true);
    setCheck(true);
  };

  const openModal = () => {
    if (
      userName.trim() === "" ||
      userAddress.trim() === "" ||
      userPhone.trim() === ""
    ) {
      alert(404);
    } else {
      setModal(true);
    }
  };

  const resterState = () => {
    setLoading(false);
    setCheck(false);
    setSuccess(false);
  };
  useEffect(() => {
    resterState();
  }, [modal]);
  return (
    <div className="relative">
      <div className="py-[60px]">
        <div className="container">
          <div className="w-[40%] mx-auto flex items-center justify-center flex-col gap-[30px]">
            <div class="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                type="text"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Name
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) => setUserAddress(e.target.value)}
                value={userAddress}
                type="text"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Address
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) => setUserPhone(e.target.value)}
                value={userPhone}
                type="text"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Phone Number
              </label>
            </div>
            <button
              onClick={() => openModal()}
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {modal ? (
        <>
          <div class="w-[550px] h-[350px] p-[20px] flex items-center justify-center flex-col absolute top-[200px] right-[450px] z-50 bg-white rounded-[20px]">
            <button
              onClick={() => setModal(false)}
              type="button"
              class="absolute top-3 end-2.5 text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            {check ? null : (
              <div class="">
                <div class="p-4 md:p-5 text-center">
                  <svg
                    class="mx-auto mb-4 text-black w-12 h-12 dark:text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h3 class="mb-5 text-lg font-normal text-blac">
                    проверьте свои данные?
                  </h3>
                  <div className="">
                    {userName ? (
                      <h1 className="text-xl text-black pb-[20px]">
                        {userName}, {userAddress}, {userPhone}
                      </h1>
                    ) : null}
                  </div>
                  <button
                    onClick={() => productSubmit()}
                    data-modal-hide="popup-modal"
                    type="button"
                    class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  >
                    Подтверждаю
                  </button>
                </div>
              </div>
            )}
            {loading ? <img src={load} alt="img" width={140} /> : null}
            {success ? (
              <div className="text-center">
                <a className="text-[200px]">
                  <FcApproval />
                </a>
                <h1 className="text-[40px] font-bold">Успешно!</h1>
              </div>
            ) : null}
          </div>
          <div className="bg"></div>
        </>
      ) : null}
    </div>
  );
};

export default SubmitTelegram;
