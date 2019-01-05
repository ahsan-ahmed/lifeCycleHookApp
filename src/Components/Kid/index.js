import React from "react";

export default class Kid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: null,
      emotion: "nervous",
      danceSteps: [],
      currentStepIndex: 0,
      startedPerforming: true
    };
  }
  qualified() {
    this.setState(state => ({ startedPerforming: !state.startedPerforming }));
    console.log("this.state.startedPerforming", this.state.startedPerforming);
    this.props.kidUnmount(true);
  }
  static getDerivedStateFromProps(props, state) {
    console.log("kidProps", props);
    const { pushDanceSteps } = props;
    console.log("props.stopStars", props.stopStars);
    return {
      volume: props.changeVolume,
      danceSteps: [...state.danceSteps.concat(pushDanceSteps)],
      emotion: props.applaudStatus || state.emotion,
      stars: props.stopStars
    };
  }
  componentDidMount() {
    this.setState(() => ({ danceSteps: ["step1", "step2"] }));
    console.log("32");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount------>>>");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps,prevState", prevProps, prevState);
    if (prevProps.stopStars !== this.state.stars) {
      this.qualified();
      this.setState({ stars: 0 }, () => console.log(this.state.stars));
    }
  }
  render() {
    console.log("this.state.stars", this.state.stars);
    const { dressColor } = this.props;
    //const { volume } = this.state;
    const {
      danceSteps,
      emotion,
      startedPerforming,
      currentStepIndex
    } = this.state;
    //  console.log(volume, danceSteps, this.state);
    return (
      <div>
        <div>dressColor: {dressColor}</div>
        <div style={{ backgroundColor: dressColor, width: 50, height: 50 }} />
        <div>Emotion: {emotion}</div>
        {startedPerforming && (
          <div>
            <div>Current Step: {danceSteps[currentStepIndex]}</div>
            <button
              style={{ height: 40, marginTop: 20 }}
              onClick={() =>
                this.setState({ currentStepIndex: currentStepIndex + 1 })
              }
            >
              Perform Next Step
            </button>
          </div>
        )}
      </div>
    );
  }
}
Kid.defaultProps = { dressColor: "red", applaud: false, furtherSteps: [] };
