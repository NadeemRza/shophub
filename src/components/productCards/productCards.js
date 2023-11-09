import ProductCard from "../productCard/ProductCard";
import "./productCards.scss";
import useFetch from "../../hooks/useFetch";

const ProductCards = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );

  return (
    <div className="product_cards">
      <div className="container">
        {data?.map((item, index) => (
          <ProductCard item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
