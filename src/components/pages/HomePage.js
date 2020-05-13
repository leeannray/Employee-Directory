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
        const login = (
            <form action="#" onSubmit={this.authorize}>
                <input
                    type="password"
                    placeholder="Password"
                    />
                <input
                    type="submit"
                />
          </form>
        );

    const userInfo = (
      <ul>
        <li>user@example.com</li>
        <li>Title</li>
      </ul>
    );

    return (
      <div id="authorization">
        <h1>{this.state.authorized ? "User" : "Enter the Password"}</h1>
            {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

ReactDOM.render(<User />, document.getElementById("app"));
