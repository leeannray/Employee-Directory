import React from "react";
// import "./index.css";
// import Header from './Header/Header.js';
// import Navbar from './Navbar/Navbar.js';
// import Table from './Table/Table.js';

function UserCard(props) {
  return (
    <div className="UserCard">
      <div className="card text-center">
        <h1 className="card-header" onClick={props.sortByName}>User Name</h1>
      </div>
      <div className='card-body'>{props.results.map(result => (
        <div className="card" key={result.key}>
          <span className="card-header">{result.name}</span>
          <span className="email" ><a href={result.email}>{result.email}</a></span>
          <span className="title">{result.title}</span>
        </div>
      ))
      }
      </div>
    </div>
  );
}

import React, {Component} from 'react';

class RandomUser extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            isLoading: false,
            error: null
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        this.fetchRandomUser();        
    }

    fetchRandomUser = async() => {
        try {
            await fetch('https://randomuser.me/api/')
            .then(results => {
                return results.json();
            })
            .then(data => {
                let user = data.results.map((user) => {
                    let userElm = '';
                    
                    if (typeof user !== undefined && typeof user.name !== undefined && typeof user.picture != undefined) {
                        userElm = <div key={user}>
                            <h2>{user.name.first} {user.name.last}</h2>
                            <img src={user.picture.large} alt="" />
                            </div>;
                    }
                    
                    return(userElm)
                });

                this.setState({user: user, isLoading: false});
            });
        }
        catch(error) {
            this.setState({ error: error, isLoading: false });
        }
    }

    render() {
        let { user, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
          }
          
        if (isLoading) {
            return <p>Loading...</p>;
          }

        return (
            <div>
                {user}
            </div>
        )
    }
}

export default UserCard;


       /* /* <div className="content"></div>
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Department:</strong> {props.department}
          </li>
          <li>
            <strong>Manager:</strong> {props.manager}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeUser(props.id)} className="remove">
        𝘅*/

