import React from "react";
import Tombol from "../Elements/Button/Bu";
class JL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <div>
        <Tombol></Tombol>
      </div>
    );
  }
}
