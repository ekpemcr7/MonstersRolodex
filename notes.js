import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box-component";

class App extends Component {
  constructor() {
    //1.runs before anything whether it is react or js(class component)
    //
    super();
    this.state = {
      //2.initialize the state {only use of constructor}
      //
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    //4.after the component has rendered or mounted
    //
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) =>
        this.setState(() => {
          return { monsters: users }; //new re-rendered object
        })
      )
    );
  }

  //a method to make sure it only initilizes once
  //
  filterEvent = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    //3.what the UI is gonna be
    //5.after the state updates it will re-render again
    //
    const { monsters, searchField } = this.state;
    const { filterEvent } = this;
    //
    const filterMonsters = monsters.filter((monster) => {
      //filter expects a boolean value & if it is true it keeps it in the new array
      //
      return monster.name.toLowerCase().includes(searchField);
    }); //if you wanna modify an array generate it to a new one.
    //
    return (
      <div className="App">
        <h1 style={{ fontSize: "80px", fontFamily: "Bigelow Rules" }}>
          Monsters Rolodex
        </h1>
        <input
          type="search"
          className="search-box"
          placeholder="search monsters"
          onChange={filterEvent}
        />
        <SearchBox
          onChangeHandler={filterEvent}
          placeHolder="Search Monsters"
          className="monsters-search-box"
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}
export default App;
