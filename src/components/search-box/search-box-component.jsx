import React from "react";
import "./search-box.css";

const SearchBox = ({ className, placeHolder, onChangeHandler }) => (
  <div>
    <input
      type="search"
      className={` search-box ${className}`}
      placeholder={placeHolder}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;
