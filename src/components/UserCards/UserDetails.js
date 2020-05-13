import React from "react";

function UserDetail(props) {
  return (
    <div className="text-center">
      <img
        alt={props.name}
        className="container-fluid"
        src={props.src}
        style={{ margin: "0 auto" }}
      />
      <h3>User/Employee: {props.director}</h3>
      <h3>Title: {props.title}</h3>
      <h3>Department: {props.department}</h3>
    </div>
  );
}

export default UserDetail;
