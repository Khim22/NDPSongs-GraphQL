import React from "react";

const FilterButtons = props => {
  const { yearFilter } = props;
  return (
    <div className="filter-buttons-container">
      <button
        className="hollow-button filter-button-gold"
        onClick={() => yearFilter("198")}
      >
        1980's
      </button>
      <button
        className="hollow-button filter-button-orange"
        onClick={() => yearFilter("199")}
      >
        1990's
      </button>
      <button
        className="hollow-button filter-button-green"
        onClick={() => yearFilter("200")}
      >
        2000's
      </button>
      <button
        className="hollow-button filter-button-blue"
        onClick={() => yearFilter("201")}
      >
        2010's
      </button>
      <button
        className="hollow-button filter-button-white"
        onClick={() => yearFilter("")}
      >
        All
      </button>
    </div>
  );
};

export default FilterButtons;
