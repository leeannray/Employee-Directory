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
export default UserCard;
