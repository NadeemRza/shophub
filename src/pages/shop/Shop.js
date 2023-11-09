import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HeroBackground from "../../components/heroBackground/HeroBackground";
import ProductDetails from "../../components/productDetails/ProductDetails";
import RelatedProducts from "../../components/relatedProducts/RelatedProducts";
import StickyFooter from "../../components/stickyFooter/StickyFooter";
import "./shop.scss";
import Search from "../../components/search/Search";

const Shop = () => {
 
  const [search, setSearch] = useState(false);
  
  return (
    <div className="shop">
      {search && <Search search={search} setSearch={setSearch} />}
      <StickyFooter search={search} setSearch={setSearch} />
      <Header type="shop" />
      <HeroBackground title={"Product Details"} />
      <ProductDetails />
      <RelatedProducts />
      <Footer />
    </div>
  );
};

export default Shop;