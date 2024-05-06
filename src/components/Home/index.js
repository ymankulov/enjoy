import React from "react";
import main from "../../assets/img/homeMain.png";
import ProductsCategory from "./ProductsCategory";

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="container">
          <div className="flex items-center justify-center flex-col text-center gap-5">
            <h1 className="text-white text-[30px] font-black text-center">
              Enjoy Every
            </h1>
            <img src={main} alt="" />
            <div className="flex gap-[20px]">
              <button className="text-pink-600 text-[30px] border-2 border-white rounded-[18px] py-[5px] px-[40px]">
                Buy Now
              </button>
              <button className="text-white text-[30px] border-2 border-white rounded-[18px] py-[5px] px-[40px]">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProductsCategory/>
    </>
  );
};

export default Home;
