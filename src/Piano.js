import React from "react";
import classes from "./piano.module.css";
class Piano extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`flex  small-gap`}>
        <div
          className={`${classes["white-piano-tile"]} ${classes.tile}    
      `}
          data-key="a"
        >
          <span className={"span" + " " + classes["tile-key"]}>A</span>
        </div>
        <div
          data-key="w"
          className={`${classes["black-piano-tile"]} ${classes["tile"]}`}
        >
          <span className={"span" + " " + classes["tile-key"]}>W</span>
        </div>
        <div
          data-key="s"
          className={`${classes["white-piano-tile"]} ${classes.tile}`}
        >
          <span className={"span" + " " + classes["tile-key"]}>S</span>
        </div>
        <div
          data-key="e"
          className={`${classes["black-piano-tile"]} ${classes["tile"]}`}
        >
          <span className={"span" + " " + classes["tile-key"]}>E</span>
        </div>
        <div
          data-key="d"
          className={
            `${classes["white-piano-tile"]} ${classes.tile}` +
            " " +
            classes["unpaired-tile"]
          }
        >
          <span className={"span" + " " + classes["tile-key"]}>D</span>
        </div>

        <div
          data-key="f"
          className={`${classes["white-piano-tile"]} ${classes.tile}`}
        >
          <span className={"span" + " " + classes["tile-key"]}>F</span>
        </div>
        <div
          data-key="t"
          className={`${classes["black-piano-tile"]} ${classes["tile"]}`}
        >
          <span className={"span" + " " + classes["tile-key"]}>T</span>
        </div>
        <div
          data-key="g"
          className={`${classes["white-piano-tile"]} ${classes.tile}`}
        >
          <span className={"span" + " " + classes["tile-key"]}>G</span>
        </div>
        <div
          data-key="y"
          className={`${classes["black-piano-tile"]} ${classes["tile"]}`}
        >
          <span className={"span" + " " + classes["tile-key"]}>Y</span>
        </div>
        <div
          data-key="h"
          className={`${classes["white-piano-tile"]} ${classes.tile}`}
        >
          <span className={"span" + " " + classes["tile-key"]}>H</span>
        </div>
        <div
          data-key="u"
          className={`${classes["black-piano-tile"]} ${classes["tile"]}`}
        >
          <span className={"span" + " " + classes["tile-key"]}>U</span>
        </div>
        <div
          data-key="j"
          className={
            `${classes["white-piano-tile"]} ${classes.tile}` +
            " " +
            classes["unpaired-tile"]
          }
        >
          <span className={"span" + " " + classes["tile-key"]}>J</span>
        </div>

        <div
          data-key="k"
          className={`${classes["white-piano-tile"]} ${classes.tile}`}
        >
          <span className={"span" + " " + classes["tile-key"]}>K</span>
        </div>
        <div
          data-key="o"
          className={`${classes["black-piano-tile"]} ${classes["tile"]}`}
        >
          <span className={"span" + " " + classes["tile-key"]}>O</span>
        </div>
        <div className={`${classes["white-piano-tile"]} ${classes.tile}`}>
          <span className={"span" + " " + classes["tile-key"]}>L</span>
        </div>
        <div
          data-key="p"
          className={`${classes["black-piano-tile"]} ${classes["tile"]}`}
        >
          <span className={"span" + " " + classes["tile-key"]}>P</span>
        </div>
        <div
          data-key=";"
          className={`${classes["white-piano-tile"]} ${classes.tile}`}
        >
          <span className={"span" + " " + classes["tile-key"]}>;</span>
        </div>
      </div>
    );
  }
}
export default Piano;
