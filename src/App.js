import React, { Component } from "react";
//import "./App.css";
import Kid from "./Components/Kid/";
import Teacher from "./Components/Teacher/";
import Judge from "./Components/Judge/";

class App extends Component {
  state = {
    volume: 5,
    kidMounted: true
  };
  nextSteps = arr => {
    console.log("mill rha he ", arr);
    this.setState({ danceStep: arr });
  };
  applaudFunc = () => {
    this.setState({ emotion: "happy" });
  };
  takeStarFunc = val => {
    this.setState({ star: val }, () => {
      //console.log(this.state.star);
    });
  };
  kidUnmountFunc = val => {
    this.setState({ kidUnmountBool: val }, () => console.log(val));
  };
  onChangeKidMounted = () => {
    this.setState(state => ({ kidMounted: !state.kidMounted }));
  };
  render() {
    const { volume, danceStep, emotion, kidUnmountBool } = this.state;
    let kidCmp = "";
    if (this.state.kidMounted) {
      kidCmp = (
        <div>
          <Kid
            dressColor="yellow"
            changeVolume={volume}
            pushDanceSteps={danceStep}
            applaudStatus={emotion}
            stopStars={this.state.star}
            kidUnmount={this.kidUnmountFunc}
          />
          <Judge
            applaudStatus={this.applaudFunc}
            takeStars={this.takeStarFunc}
          />
        </div>
      );
    }
    // const result= athleteData.filter(val=>val.income.toString().length>7).map(newObj =>`${newObj.athlete} is ${newObj.team} is ${newObj.income}`)
    //console.log(result);
    return (
      <div className="App">
        <h1>helloworld</h1>
        <Teacher getNextSteps={this.nextSteps} />
        {kidCmp}
        {<br />}
        {kidUnmountBool && (
          <button
            style={{ height: 40, marginTop: 20 }}
            onClick={this.onChangeKidMounted}
          >
            Ask the Kid to Leave the Show !!!
          </button>
        )}
      </div>
    );
  }
}

export default App;
