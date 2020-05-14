import React from "react";

class API extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      dataObj: props.dataObject,
    };
    console.log(this.state.dataObject);
  }

  render() {
    return <p>""</p>;
  }
}

export default API;
