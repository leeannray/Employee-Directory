import React from "react";
import "./index.css";

function Title(props) {
  return <h1 className="title">{props.children}</h1>;
}

export default Title;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
