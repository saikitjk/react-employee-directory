//import logo from "./logo.svg";
import React from "react";
import Header from "./components/Header/header";
import SearchBar from "./components/SearchBar/searchBar";
import Main from "./components/Main/main";

import "./App.css";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <SearchBar />
        <Main />
      </div>
    </>
  );
}

export default App;
