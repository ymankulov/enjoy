import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketCard from "../BasketCard/BasketCard";
import empty from "../../assets/img/empty-cart.png";
import { remAll } from "../../redux/Slices/BasketSlice";
import SubmitTelegram from "../SubmitTelegram";

const Basket = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((s) => s.basketSlice);
  const TotalPrice = basket.reduce((acc, el) => {
    return acc + el.price * el.quantity;
  }, 0);

  return (
    <div className="my-[80px] relative">
      <div className="container">
        <div className="">
          {basket.length ? (
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg flex items-center justify-center flex-col gap-4">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Product IMG
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {basket.map((el, idx) => (
                    <BasketCard el={el} key={idx} />
                  ))}
                </tbody>
              </table>
              <button
                onClick={() => dispatch(remAll())}
                class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75  bg-transparent rounded-md group-hover:bg-opacity-0">
                  Remove All
                </span>
              </button>
              <h1 className="text-[35px] text-white">
                TotalPrice:{Math.round(TotalPrice)}$
              </h1>
            </div>
          ) : (
            <div className="flex items-center justify-center ">
              <img src={empty} alt="" />
            </div>
          )}
        </div>
      </div>
      <SubmitTelegram />
    </div>
  );
};

export default Basket;
