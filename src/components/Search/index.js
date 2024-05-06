import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const Search = () => {
  const { search } = useSelector((s) => s.productSlice);
  console.log(search, "search");
  return (
    <div className="py-[60px]">
      <div className="container">
        <div className="">
          {search.map((el, idx) => (
            <ProductCard el={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
