import { Link } from "react-router-dom";
import "./header.scss";
import Cart from "../../assets/cart.svg";

const Header = ({ type }) => {
  return (
    <div className="header">
      <div className="headerContainer">
        <a className="brand_logo" href="/">
          <div className="logo">
            <div className="dots">
              <div className="first_dot">■</div>
              <div>■</div>
              <div>■</div>
              <div>■</div>
            </div>
          </div>
          <div className="brand_name">
            <p>shophub</p>
          </div>
        </a>
        <div className="header_links">
          <Link className={type === "home" ? "active" : ""} to="/">
            Home
          </Link>
          <Link className={type === "shop" ? "active" : ""} to="/shop">
            Shop
          </Link>
          <Link className={type === "blog" ? "active" : ""} to="/blog">
            Blog
          </Link>
          <Link className={type === "contact" ? "active" : ""} to="/contact">
            Contact
          </Link>
          <Link className={type === "login" ? "active" : ""} to="/login">
            Login
          </Link>
          <Link className={type === "signup" ? "active" : ""} to="/signup">
            SignUp
          </Link>
          <Link className={type === "account" ? "active" : ""} to="/myaccount">
            My Account
          </Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <img src={Cart} alt="cart_icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
