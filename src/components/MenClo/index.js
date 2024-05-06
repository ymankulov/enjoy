import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const MenClo = () => {
  const { categoryProduct } = useSelector((s) => s.productSlice);
  console.log(categoryProduct, "categoryProduct");
  return (
    <div className="py-[70px]">
      <div className="container">
        <div className=" flex flex-wrap gap-10">
          {categoryProduct.map((el, idx) => (
            <ProductCard el={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenClo;
