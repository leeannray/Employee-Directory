import React, { Component } from "react";
import UserCard from "./UserCard";
import Row from "./Row";
import Col from "./Col";
import UserCard from "./UserCard";
import SearchForm from "./SearchForm";
import UserDetail from "./UserDetails";
import API from "../components/utils/API";

class UserContainer extends Component {
  state = {
    result: {},
    search: "",
  };

  // When this component mounts, search for the user ""
  componentDidMount() {
    this.searchUsers("");
    //add name to above
  }

  searchUsers = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, search the employee "database" for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchUsers(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <UserCard
              heading={
                this.state.result.Name ||
                "Search for an Employee or User to Begin"
              }
            >
              {this.state.result.Title ? (
                <Userdetail
                  name={this.state.result.Name}
                  title={this.state.result.Title}
                  Id={this.state.result.Id}
                  email={this.state.result.Email}
                  manager={this.state.result.Manager}
                  manager={this.state.result.Department}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </UserCard>
          </Col>
          <Col size="md-4">
            <UserCard heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </UserCard>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchContainer;
