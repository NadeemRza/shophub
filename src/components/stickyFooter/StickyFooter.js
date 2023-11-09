import "./stickyFooter.scss";
import Search from "../../assets/search.svg";

const StickyFooter = ({search, setSearch}) => {

  return (
    <div className="stickyFooter">
      <div className="search" onClick={()=> setSearch(search => !search)}>
        <img src={Search} alt="search_icon" />
      </div>
      <label aria-label="themeMode" for="switch" className="themeButton">
        <div className="switch">
          <input id="switch" type="checkbox" />
          <span className="slider round"></span>
        </div>
      </label>
    </div>
  );
};

export default StickyFooter;
