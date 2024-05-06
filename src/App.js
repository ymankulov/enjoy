import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Footer from "./components/Footer";
import LogOut from "./components/LogOut";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Basket from "./components/Basket/Basket";
import Search from "./components/Search";
import MenClo from "./components/MenClo";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/search" element={<Search />} />
        <Route path="/menClo" element={<MenClo/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
