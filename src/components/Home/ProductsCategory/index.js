import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryPro } from "../../../redux/Slices/ProductSlice";
import { Link, useNavigate } from "react-router-dom";

const ProductsCategory = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { categoryProduct } = useSelector((s) => s.productSlice);
  console.log(categoryProduct, "categoryProduct");

  return (
    <div className="my-[40px]">
      <div className="container">
        <div className="flex items-center justify-center flex-col gap-[30px]">
          <h1 className="text-[70px] font-black mb-[50px] text-white text-center uppercase">
            Products
          </h1>
          <div className="cursor-pointer w-[70%] hover:scale-[1.1] duration-[.5s]	border-2 border-white rounded-[20px] h-[80px] flex items-center justify-center">
            <Link to={"/menClo"}>
              {" "}
              <h1
                onClick={() => dispatch(categoryPro("men's clothing"))}
                className="text-[40px] font-bold text-white text-center"
              >
                Men's clothing
              </h1>
            </Link>
          </div>
          <div className="cursor-pointer w-[70%] hover:scale-[1.1] duration-[.5s] border-2 border-white rounded-[20px] h-[80px] flex items-center justify-center">
            <h1
              onClick={() => {
                dispatch(categoryPro("women's clothing"));
                nav("/menClo");
              }}
              className="text-[40px] font-bold text-white text-center"
            >
              Women's clothing
            </h1>
          </div>
          <div className="cursor-pointer w-[70%] hover:scale-[1.1] duration-[.5s] border-2 border-white rounded-[20px] h-[80px] flex items-center justify-center">
            <h1
              onClick={() => {
                dispatch(categoryPro("jewelery"));
                nav("/menClo");
              }}
              className="text-[40px] font-bold text-white text-center"
            >
              Jewelery
            </h1>
          </div>
          <div className="cursor-pointer w-[70%] hover:scale-[1.1] duration-[.5s] border-2 border-white rounded-[20px] h-[80px] flex items-center justify-center">
            <h1
              onClick={() => {
                dispatch(categoryPro("electronics"));
                nav("/menClo");
              }}
              className="text-[40px] font-bold text-white text-center"
            >
              Electronics
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
