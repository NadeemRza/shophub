import "./heroBackground.scss";

const HeroBackground = ({ title }) => {
  return (
    <div className="heroBackground">
      <div className="heroBackgroundContainer">
        <div class="ripple-design">
          <div class="ripple-circle very-small shade0"></div>
          <div class="ripple-circle small shade1"></div>
          <div class="ripple-circle medium shade2"></div>
          <div class="ripple-circle large shade3"></div>
        </div>
        <div className="contentContainer">
          <div className="breadcrumb">
            <span className="active_crumb">Home </span>/ {title}
          </div>
          <h3>{title}</h3>
          <div
            className="selectContainer"
            style={{ visibility: title !== "Shop" ? "hidden" : "visible" }}
          >
            <p>Showing 1-12 of 36 results</p>
            <select id="sortigOrder" name="sortigOrder">
              <option value="defaultSorting">Default sorting</option>
              <option value="newest">Latest</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBackground;
