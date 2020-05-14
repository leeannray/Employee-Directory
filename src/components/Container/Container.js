import React from "react";

function Container(props) {
    return (
    <div className="container uk-flex uk-flex-column uk-flex-middle">
        {props.children}
    </div>
    );
}

export default Container;

// export NavbarBrand from "../NavbarBrand/Navbar";
// export AppSwitch from "../Switch/Switch";
// export UserCard from "../UserCard/UserCard";
// export SearchBar from "../SearchBar/SearchForm";
// export UserList from "../UserList/UserList";