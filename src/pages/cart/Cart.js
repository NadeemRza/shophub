import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import StickyFooter from "../../components/stickyFooter/StickyFooter";
import "./cart.scss";
import Search from "../../components/search/Search";

const Cart = () => {
 
  const [search, setSearch] = useState(false);
  
  return (
    <div className="cart">
      {search && <Search search={search} setSearch={setSearch} />}
      <StickyFooter search={search} setSearch={setSearch} />
      <Header type="cart" />
      <div className="cartConatiner">
        <div className="cratWrapper">
            <h3>Shopping Cart New</h3>
            <p className="total_price"><b><span>Total </span></b><span>:Rs.</span>0.00</p>
            <p className="shipping"><b><span>Shipping </span></b>:Free Shipping</p>
            <button>Proceed to Checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;