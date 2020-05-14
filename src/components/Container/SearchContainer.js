import API from "../../utils/API";
import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchForm";
// import UserList from "../UserList/UserList";
import UserCard from "../UserCard/UserCard"
import "./SearchContainer.css";

class Container extends Component {
  // Setting the component's initial state
  //search starts as an empty string
  //employess and filteredEmployess are empty arrays
  //By default employees in random order and the first click will trigger then to be in asc order
  state = {
    search: "",
    users: [],
    filteredUsers: [],
    order: "",
  };

  // initialization; what page will display
  componentDidMount() {
    API.getUsers()
      .then((res) =>
        this.setState({
          users: res.data.results,
          filteredUsers: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  //if "name" it's clicked employee are shown by asc/desc order

  sortByName = () => {
    const filterUsers = this.state.filteredUsers;
    if (this.state.order === "asc") {
      const sortUsers = filterUsers.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      console.log(sortUsers);

      this.setState({
        filteredUsers: sortUsers,
        order: "desc",
      });
    } else {
      const sortUsers = filterUsers.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      console.log(sortUsers);

      this.setState({
        filteredUsers: sortUsers,
        order: "asc",
      });
    }
  };
  //when input changes, dynamically displays name
  handleInputChange = (event) => {
    const users = this.state.users;
    const UserInput = event.target.value;
    const filteredUsers = users.filter(
      (user) =>
        user.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
    );
    this.setState({
      //change the state of  filteredUsers n--> employees that match users

      filteredUsers,
    });
  };

  //API call triggered: when page refreshed and application loaded
  userSearch = () => {
    API.getUsers()
      .then((res) =>
        this.setState({
          //change states to hold all the data from the API call = all employess --> props
          //employee will remain the same and filteredUsers will change and passed down during application's life. Employee will always hold all employess.
          filteredUsers: res.data.results,
          users: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  //click event for button
  handleSearch = (event) => {
    event.preventDefault();
    if (!this.state.search) {
      alert("Must enter a user name!");
    }
    const { users, search } = this.state;

    //filters --> value that matches the value entered in the input box by the user = (search.this.state)
    const filteredUsers = users.filter((users) =>
      users.name.toLowerCase().includes(search.toLowerCase())
    );

    this.setState({
      filteredUsers,
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          user={this.state.users}
          handleSearch={this.handleSearch}
          handleInputChange={this.handleInputChange}
        />
        <UserCard
          results={this.state.filteredUsers}
          sortByName={this.sortByName}
        />
      </div>
    );
  }
}

export default Container;
