import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const { productDetails } = useSelector((s) => s.productSlice);
  let { title, image, description, category, price } = productDetails;
  return (
    <div className="py-[60px]">
      <div className="container">
        <div className="flex items-start justify-between">
          <div className="w-[30%] h-[500px] bg-white flex items-center justify-center rounded-[30px]">
            <img src={image} alt="img" className="w-[70%]" />
          </div>
          <div className="w-[60%] p-[70px] h-[500px] bg-[#ffffff56] rounded-[30px]">
            <h1 className="text-white text-[25px]">{title}</h1>
            <p className=" text-gray-400 my-[20px]">
              <i>"{description}"</i>
            </p>
            <div className="flex items-center justify-between">
              <h1 className="text-white text-[20px] font-bold">{category}</h1>
              <h1 className="text-white text-[30px] font-bold">{price}$</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
