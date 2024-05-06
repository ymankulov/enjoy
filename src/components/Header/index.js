import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { productSearch } from "../../redux/Slices/ProductSlice";

const Header = () => {
  const { user } = useSelector((state) => state.userSlice);
  const { cartIcon, basket } = useSelector((s) => s.basketSlice);
  const dispatch = useDispatch();
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <div id="header" className="py-[30px] sticky top-0 head">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className=""></div>
          <div className="flex items-center ml-[150px] justify-between border-2 rounded-[20px] border-white w-[650px] py-[10px] px-[25px]">
            <div className="flex items-center gap-7">
              <Link to={"/"} className="text-2xl text-white font-medium">
                Home
              </Link>
              <Link
                to={Object.keys(user).length ? "/products" : "/"}
                className="text-2xl text-white font-medium"
              >
                Products
              </Link>
              <Link to={"/"} className="text-2xl text-white font-medium">
                Help Centre
              </Link>
            </div>
            <h1 className="ml-[50px] text-2xl text-white font-medium">
              {user.name}
            </h1>
            {user.url ? (
              <Link to={"/logOut"}>
                <img src={user.url} alt="img" width={25} />
              </Link>
            ) : (
              <Link to={"/login"} className="text-2xl text-white">
                <FaRegUserCircle />
              </Link>
            )}
          </div>
          <div className="flex items-center gap-[40px]">
            <input
              type="text"
              placeholder="search"
              className="w-[200px] text-[20px] text-white bg-transparent border-2 border-white rounded-[10px] py-[5px] px-[10px]"
              onChange={(e) => setSearchProduct(e.target.value)}
              value={searchProduct}
            />
            <Link
              onClick={() => {
                dispatch(productSearch(searchProduct));
                setSearchProduct("");
              }}
              to={"/search"}
              className="text-[60px] text-white "
            >
              <CiSearch />
            </Link>
            <Link
              to={"/basket"}
              className="text-[60px] text-white duration-[100ms] relative"
              style={{
                color: cartIcon ? "red" : "white",
                transform: cartIcon ? "translateY(-40px)" : "translateX(0)",
              }}
            >
              {basket.length ? (
                <p className="text-[23px] absolute top-[7px] left-[23px]">
                  {basket.length}
                </p>
              ) : null}
              <AiOutlineShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
