import { IMG_LOGO_URL } from "../config";
const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="logo" src={IMG_LOGO_URL} />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
