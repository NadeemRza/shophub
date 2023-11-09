import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import StickyFooter from "../../components/stickyFooter/StickyFooter";
import "./contact.scss";
import Search from "../../components/search/Search";

const Contact = () => {

  const [search, setSearch] = useState(false);

  return (
    <div className="contact">
      {search && <Search search={search} setSearch={setSearch} />}
      <StickyFooter search={search} setSearch={setSearch} />
      <Header type="contact" />
      <Footer />
    </div>
  );
};

export default Contact;
