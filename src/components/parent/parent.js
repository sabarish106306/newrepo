import React, { Component } from "react";
import Child from "../child/child";

class Parent extends Component {
  render() {
    return <div>
      <Child name="Reegan" />
      <Child name="vinothini" />
      <Child name="kavishree" />
      hello
    </div>;
  }
}

export default Parent;
