import { IMG_LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="logo" src={IMG_LOGO_URL} />
    </a>
  );
};

//SPA - Single Page Application

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/contact">Contact </Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
