import React from "react";
// import "./index.css";
// import Header from './Header/Header.js';
// import Navbar from './Navbar/Navbar.js';
// import Table from './Table/Table.js';

function UserCard(props) {
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          <h2>{props.heading}</h2>
        </div>
        <div className='card-body'>{props.children}</div>
        <div className="content"></div>
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
        𝘅
      </span>
    </div>
  );
};

export default UserCard;
