import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductCards from "../../components/productCards/productCards";
import StickyFooter from "../../components/stickyFooter/StickyFooter";
import "./blog.scss";
import Search from "../../components/search/Search";

const Blog = () => {
 
  const [search, setSearch] = useState(false);
  
  return (
    <div className="blog">
      {search && <Search search={search} setSearch={setSearch} />}
      <StickyFooter search={search} setSearch={setSearch} />
      <Header type="blog" />
      <ProductCards />
      <Footer />
    </div>
  );
};

export default Blog;
