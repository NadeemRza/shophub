import { Link } from "react-router-dom";
import "./header.scss";
import Cart from "../../assets/cart.svg";
import { useEffect, useState } from "react";
import HamburgerIcon from "../../assets/hamburger.svg";
import CrossImg from "../../assets/cross.svg";

const Header = ({ type }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 999);
  const [nav, setNav] = useState(false);

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

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
        {!isMobile && (
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
            <Link
              className={type === "account" ? "active" : ""}
              to="/myaccount"
            >
              My Account
            </Link>
          </div>
        )}
        {isMobile && (
          <div className="mobile_nav">
            <div className="hamburgerContainer">
              <span className="hamburger" onClick={() => setNav((nav) => !nav)}>
                <img src={HamburgerIcon} alt="hamburger_icon" />
              </span>
            </div>
            {nav && (
              <div className="mm_links">
                <span className="links_cross">
                  <img
                    src={CrossImg}
                    alt="cross_icon"
                    onClick={() => setNav((nav) => !nav)}
                  />
                </span>
                <div className="links">
                  <Link className={type === "home" ? "active" : ""} to="/">
                    Home
                  </Link>
                  <Link className={type === "shop" ? "active" : ""} to="/shop">
                    Shop
                  </Link>
                  <Link className={type === "blog" ? "active" : ""} to="/blog">
                    Blog
                  </Link>
                  <Link
                    className={type === "contact" ? "active" : ""}
                    to="/contact"
                  >
                    Contact
                  </Link>
                  <Link
                    className={type === "login" ? "active" : ""}
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className={type === "signup" ? "active" : ""}
                    to="/signup"
                  >
                    SignUp
                  </Link>
                  <Link
                    className={type === "account" ? "active" : ""}
                    to="/myaccount"
                  >
                    My Account
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
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
