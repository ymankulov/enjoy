import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, sortProduct } from "../../redux/Slices/ProductSlice";
import axios from "axios";
import ProductCard from "../ProductCard";

const Products = () => {
  const { products } = useSelector((s) => s.productSlice);
  const dispatch = useDispatch();
  const productsFetch = async () => {
    let res = await axios(`https://fakestoreapi.com/products`);
    let { data } = res;
    return dispatch(getProduct(data));
  };

  useEffect(() => {
    productsFetch();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="">
          <select
            onChange={(e) => dispatch(sortProduct(e.target.value))}
            className="text-[30px] bg-transparent text-white p-5 outline-none"
          >
            <option value="" defaultValue>
              Rating:
            </option>
            <option value="5">5 - 1</option>
            <option value="1">1 - 5</option>
          </select>
          <div className="flex items-center flex-wrap gap-[40px]">
            {products.map((el, idx) => (
              <ProductCard el={el} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
