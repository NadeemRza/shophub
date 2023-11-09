import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LoginElement from "../../components/loginElement/LoginElement";
import StickyFooter from "../../components/stickyFooter/StickyFooter";
import "./login.scss";
import Search from "../../components/search/Search";

const Login = () => {

  const [search, setSearch] = useState(false);

  return (
    <div className="login">
      {search && <Search search={search} setSearch={setSearch} />}
      <StickyFooter search={search} setSearch={setSearch} />
      <Header type="login" />
      <LoginElement />
      <Footer />
    </div>
  );
};

export default Login;
