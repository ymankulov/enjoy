import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { details } from "../../redux/Slices/ProductSlice";
import { addToBasket, cart } from "../../redux/Slices/BasketSlice";

const ProductCard = ({ el }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const detailsProduct = () => {
    nav(`/productDetails/${el.id}`);
    return dispatch(details(el.id));
  };
  const addBasket = (el) => {
    return dispatch(addToBasket(el));
  };
  console.log(el, "cat");
  return (
    <div className="w-[22%] bg-white  h-[400px] rounded-[20px] flex items-center justify-center flex-col text-center">
      <img
        src={el.image}
        alt="img"
        className="w-[250px] object-contain h-[250px] cursor-pointer"
        onClick={() => detailsProduct()}
      />
      <div className="flex items-start px-[30px] py-[10px] justify-between w-full mt-[30px] border-t-2 border-black">
        <div className="text-left">
          <h1 className="text-[17px] font-bold">{el.title?.slice(0, 10)}</h1>
          <h1>{el.rating.rate}</h1>
        </div>
        <div className="text-right">
          <h1
            onClick={() => {
              addBasket(el);
              setTimeout(() => {
                dispatch(cart());
              }, 200);
            }}
            className="cursor-pointer text-pink-600 font-bold"
          >
            Add to cart
          </h1>
          <h1>{el.price}$</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
