import React from "react";
export default class Judge extends React.Component {
  constructor() {
    super();
    this.state = { stars: 0, available: false };
  }
  applaud() {
    this.props.applaudStatus();
  }
  provideStars() {
    const { stars } = this.state;
    this.setState({ stars: stars + 1 });
    if (stars === 5) {
      this.props.takeStars(stars);
    }
  }
  shouldComponentUpdate() {
    return this.state.stars < 5;
  }
  render() {
    const { stars, available } = this.state;
    return (
      <div>
        <button
          type="button"
          style={{ height: 40, marginTop: 20 }}
          onClick={this.applaud.bind(this)}
        >
          Appreciate performance
        </button>
        <button
          style={{ height: 40, marginTop: 20 }}
          type="button"
          onClick={this.provideStars.bind(this)}
        >
          Provide stars
        </button>
        Kid is available: {available}
        Stars gained: {stars}
      </div>
    );
  }
}
