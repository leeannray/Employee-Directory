import React from "react";
import ReactDOM from "react-dom";

class UserCard extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentWillMount() {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Request failed.");
      })
      .then((data) => {
        this.setState({ users: data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const list = this.state.users.map((u, i) => {
      return (
        <User
          key={u.login.md5}
          name={`${u.name.first} ${u.name.last}`}
          email={u.email}
        />
      );
    });
    return (
      <div>
        <h1>Current Users: </h1>
        {list}
      </div>
    );
  }
}

class User extends React.Component {
  render() {
    return (
      <div style={{ borderStyle: "dotted" }}>
        <h3>{this.props.name}</h3>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

ReactDOM.render(<UserCard />, document.getElementById("root"));

// import axios from "axios";
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// // const baseurl = "https://randomuser.me/api/?results=50&inc=name,registered&nat=us";
// import React, { Component } from "react";
// import { BrowserRouter, Switch } from 'react-router-dom';

// export class App extends Component {
//          constructor(props) {
//            super(props);
//            this.state = {
//              person: [],
//            }
//             componentDidMount() {
//            axios
//              .get(
//                proxyurl + baseurl)
//              .then((json) =>
//                json.data.results.map((result) => ({
//                  name: `${result.name.first} ${result.name.last}`,
//                  id: result.registered,
//                }))
//              )
//              .then((newData) =>
//                this.setState({ users: newData, store: newData })
//              )
//              .catch((error) => alert(error));
//          }

//          filterNames(e) {
//            this.setState({
//              users: this.state.store.filter((item) =>
//                item.name.toLowerCase().includes(e.target.value.toLowerCase())
//              ),
//            });
//          }

//          sortList = (key) => {
//            let arrayCopy = [...this.state.users];
//            arrayCopy.sort((a, b) => a.name[key] > b.name[key]);
//            this.setState({ users: arrayCopy });
//          };
//        };
