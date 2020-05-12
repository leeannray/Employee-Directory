import React, { Component } from "react";
import UserCard from "./components/UserCards/index.js";
import Wrapper from "./components/Wrapper/index.js";
import Title from "./components/Title/index.js";
import users from "./users.json";

class App extends Component {
  // Setting this.state.Users to the users json array
  state = {
    users,
  };

  removeUser = (id) => {
    // Filter this.state.users for users with an id not equal to the id being removed
    const users = this.state.users.filter((user) => user.id !== id);
    // Set this.state.users equal to the new users array
    this.setState({ users });
  };

  // Map over this.state.users and render a UserCard component for each user object
  render() {
    return (
      <Wrapper>
        <Title>Users List</Title>
        {this.state.users.map((user) => (
          <UserCard
            removeUser={this.removeUser}
            id={user.id}
            key={user.id}
            name={user.name}
            image={user.image}
            title={user.title}
            department={user.department}
            manager={user.manager}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
