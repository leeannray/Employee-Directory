import React, { Component } from "react";
import UserContainer from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import UserDetail from "./UserDetail";
// import API from "../utils/API";

class SearchContainer extends Component {
  state = {
    result: {},
    search: "",
  };

  // When this component mounts, search for the user ""
  componentDidMount() {
    this.searchUsers("");
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
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchUsers(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Name || "Search for an Employee or User to Begin"}
            >
              {this.state.result.Title ? (
                <MovieDetail
                  title={this.state.result.Name}
                  src={this.state.result.Title}
                  director={this.state.result.Id}
                  genre={this.state.result.Email}
                  released={this.state.result.Manager}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchContainer;
