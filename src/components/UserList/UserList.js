import React from "react";

function UserList(props) {
  // console.log(props);
  return (
    <div className="personCard card mt-5" key={props.person.id.value}>
      <div>
        <img
          className="personThumb"
          src={props.person.picture.medium}
          alt={props.person.name.first + props.person.name.last}
        />
      </div>
      <div className="col h5">
              {props.person.name.first}
              {props.person.name.last}
      </div>
          <div className="col">
        {" "}
            {props.person.dob.date.split("T")[0]}
      </div>
      <hr />
      <div className="col">
        {" "}
              <i className=""></i>
              {props.person.gender}
      </div>
      <hr />
      <div className="col">
        {" "}
              <i className=""></i>
              {props.person.phone}
      </div>
      <hr />
      <div className="col">
        {" "}
              <i className=""></i>
              {props.person.email}
      </div>
    </div>
  );
}

export default UserList;
