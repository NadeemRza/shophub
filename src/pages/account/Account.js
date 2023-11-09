import { useState } from "react";
import AccountElement from "../../components/accountElement/AccountElement";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import StickyFooter from "../../components/stickyFooter/StickyFooter";
import "./account.scss";
import Search from "../../components/search/Search";

const Account = () => {

  const [search, setSearch] = useState(false);

  return (
    <div className="account">
      {search && <Search search={search} setSearch={setSearch} />}
      <StickyFooter search={search} setSearch={setSearch} />
      <Header type="account" />
      <AccountElement />
      <Footer />
    </div>
  );
};

export default Account;
