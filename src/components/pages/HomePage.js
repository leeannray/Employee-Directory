import React from "react";
import ReactDOM from "react-dom";
import { userInfo } from "os";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "password",
      authorized: false,
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector('input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth,
    });
  }

  render() {
    return (
      <div id="authorization">
        <h1>User</h1>
        <ul>
          <li>{user.name}</li>
            <li>{user.email}</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<User />, document.getElementById("app"));
