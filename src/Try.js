import React from "react";
import SearchBox from "./components/search-box/search-box-component";
import { useState } from "react";

const Try = () => {
  const [searchField, setSearchField] = useState("");
  console.log(searchField);

  const filterEvent = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <SearchBox
        className={"monsters-search-box"}
        placeHolder={"search for monsters"}
        onChangeHandler={filterEvent}
      />
    </div>
  );
};

export default Try;
