import "./search.scss";
import CrossImg from "../../assets/cross.svg";
import { useState } from "react";

const Search = ({search, setSearch}) => {

  return (
    <>
      {search && (
        <div className="search">
          <div className="searchContainer">
            <span
              className="cross_span"
              onClick={() => setSearch((search) => !search)}
            >
              <img src={CrossImg} alt="cross_image" />
            </span>
            <form className="serach_form">
              <input
                type="search"
                placeholder="Search by keyword"
                aria-label="Search"
                value=""
              />
              <button type="submit" onClick={() => setSearch((search) => !search)}>Search</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
