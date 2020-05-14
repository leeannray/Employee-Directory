import React from "react";

function Container(props) {
  return (
    <div className={`container${props.fluid ? "-fluid" : ""}`}>
      {props.children}
    </div>
  );
}

export default Container;

export AppContainer from "./Header";

export AppNavbarBrand from "../NavbarBrand/Navbar";
export AppSwitch from "../Switch/Switch";
export UserCard from "../UserCard/UserCard";
export SearchBar from "../SearchBar/SearchForm";
export UserList from "../UserList/UserList";