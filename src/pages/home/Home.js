import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HeroBackground from "../../components/heroBackground/HeroBackground";
import ProductCards from "../../components/productCards/productCards";
import RelatedProducts from "../../components/relatedProducts/RelatedProducts";
import Search from "../../components/search/Search";
import StickyFooter from "../../components/stickyFooter/StickyFooter";
import "./home.scss";

const Home = () => {

  const [search, setSearch] = useState(false);

  return (
    <div className="header">
      {search && <Search search={search} setSearch={setSearch} />}
      <StickyFooter search={search} setSearch={setSearch} />
      <Header type="home" />
      <HeroBackground title={"Shop"} />
      <ProductCards />
      <RelatedProducts />
      <Footer />
    </div>
  );
};

export default Home;
