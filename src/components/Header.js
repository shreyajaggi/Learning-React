import { useState, useContext } from "react";
import { IMG_LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import UserConext from "../Context/UserContext";
import { useSelector } from "react-redux";
const Title = () => {
  return (
    <a href="/">
      <img className="h-28 p-2" alt="logo" src={IMG_LOGO_URL} />
    </a>
  );
};

//SPA - Single Page Application

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserConext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div>
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home </Link>
          </li>
          <li className="px-2">
            <Link to="/about">About </Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact </Link>
          </li>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-2">Cart {cartItems.length}</li>
          </Link>
        </ul>
      </div>
      <span className="p-10 font-bold">{user.name}</span>
      {isLoggedIn ? (
        <button
          className="p-10"
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          LogOut
        </button>
      ) : (
        <button
          className="p-10"
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default Header;
