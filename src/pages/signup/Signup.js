import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SignupElement from "../../components/signupElement/SignupElement";
import StickyFooter from "../../components/stickyFooter/StickyFooter";
import "./signup.scss";
import Search from "../../components/search/Search";

const Signup = () => {

  const [search, setSearch] = useState(false);

  return (
    <div className="signup">
      {search && <Search search={search} setSearch={setSearch} />}
      <StickyFooter search={search} setSearch={setSearch} />
      <Header type="signup" />
      <SignupElement />
      <Footer />
    </div>
  );
};

export default Signup;
