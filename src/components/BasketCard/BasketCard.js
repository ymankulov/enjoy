import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  cart,
  decrementQuantity,
  deleteBasket,
} from "../../redux/Slices/BasketSlice";

const BasketCard = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <tr class="bg-white  border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img src={el.image} alt="img" width={100} />
      </th>
      <td class="px-6 py-4 text-[20px]">{el.title.slice(0, 30)}</td>
      <td class="px-6 py-4 text-[20px] flex items-center justify-center">
        <div className="flex items-center justify-center gap-4 mt-[40px]">
          <button
            onClick={() => {
              dispatch(decrementQuantity(el));
              setTimeout(() => {
                dispatch(cart());
              }, 200);
            }}
          >
            -
          </button>
          <h1>{el.quantity}</h1>
          <button
            onClick={() => {
              dispatch(addToBasket(el));
              setTimeout(() => {
                dispatch(cart());
              }, 200);
            }}
          >
            +
          </button>
        </div>
      </td>
      <td class="px-6 py-4 text-[20px]">
        {Math.round(el.price * el.quantity)}$
      </td>
      <td class="px-6 py-4 text-[20px]">
        <a
          onClick={() => dispatch(deleteBasket(el))}
          href="#"
          class="font-medium text-red-600 dark:text-red-500  text-[25px] hover:underline"
        >
          <MdOutlineDelete />
        </a>
      </td>
    </tr>
  );
};

export default BasketCard;
