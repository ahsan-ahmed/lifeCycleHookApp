import React from "react";
export default class Teacher extends React.Component {
  sendDataToKid = () => {
    const furtherSteps = ["step3", "step4", "step5"];
    this.props.getNextSteps(furtherSteps);
  };
  render() {
    return (
      <button
        style={{ height: 40, marginTop: 20 }}
        onClick={this.sendDataToKid}
      >
        Get Help From Teacher
      </button>
    );
  }
}
