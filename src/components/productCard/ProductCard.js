import "./productCard.scss";
import Expand from "../../assets/expand.svg";
import Cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";

const ProductCard = ({ item, index }) => {
  const background = ["#263042", "#e1e1e1", "#bda38a", "#465471"];

  return (
    <div className="product_card">
      <div className="icons">
        <Link className="svg_container">
          <img className="icon_image" src={Expand} alt="expand_image" />
        </Link>
        <Link className="svg_container">
          <img className="icon_image" src={Cart} alt="cart_image" />
        </Link>
      </div>
      <div className="image">
        <div
          className="background-design"
          style={{
            background: background[index]
              ? background[index]
              : "rgb(240, 150, 158)",
          }}
        >
          <div className="circle"></div>
        </div>
        <img className="product_image" src={item.image} alt="product_image" />
      </div>
      <div className="title">{item.title.slice(0, 33)}{item.title.length > 33 ? "..." : ""}</div>
      <div className="price">{item.price}</div>
    </div>
  );
};

export default ProductCard;
