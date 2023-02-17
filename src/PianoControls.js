import React from "react";
import classes from "./pianocontrols.module.css";
class PianoControls extends React.Component {
  render() {
    return (
      <div className={"flex space_between small-gap align"}>
        <h3 className={classes["piano-title"]}>Playable PIANO</h3>
        <div className={`flex align small-gap`}>
          <span className={"span"}>Volume</span>
          <input type="range" />
        </div>
        <div className={`flex align small-gap`}>
          <span className={"span"}>Show keys</span>
          <input
            onClick={this.clicked}
            type="checkbox"
            className={classes["show-key-input"]}
          ></input>
        </div>
      </div>
    );
  }
}
export default PianoControls;
