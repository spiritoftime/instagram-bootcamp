import React from "react";
import { onChildAdded, push, ref, set } from "firebase/database";
import { database } from "./firebase";
import "./App.css";
import Piano from "./Piano";
import keyListener from "./helper-functions/keyListener";
import classes from "./app.module.css";
import PianoControls from "./PianoControls";
// Save the Firebase message folder name as a constant to avoid bugs due to misspelling
const DB_MESSAGES_KEY = "messages";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialise empty messages array in state to keep local state in sync with Firebase
    // When Firebase changes, update local state, which will update local UI
    this.state = {
      messages: [],
      inputVal: "",
    };
    this.tileRef = React.createRef();
  }

  componentDidMount() {
    keyListener();
    const messagesRef = ref(database, DB_MESSAGES_KEY);
    // onChildAdded will return data for every child at the reference and every subsequent new child
    onChildAdded(messagesRef, (data) => {
      // Add the subsequent child to local component state, initialising a new array to trigger re-render
      this.setState((state) => ({
        // Store message key so we can use it as a key in our list items when rendering messages
        messages: [...state.messages, { key: data.key, val: data.val() }],
      }));
    });
  }
  changeHandler = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  // Note use of array fields syntax to avoid having to manually bind this method to the class
  writeData = () => {
    console.log("running");
    const messageListRef = ref(database, DB_MESSAGES_KEY);
    const newMessageRef = push(messageListRef);
    set(newMessageRef, this.state.inputVal);
  };
  clicked = () => {
    console.log(this.tileRef.current.dataset.key);
  };
  render() {
    // Convert messages in state to message JSX elements to render

    let messageListItems = this.state.messages.map((message) => (
      <li key={message.key}>{message.val}</li>
    ));
    return (
      <div className="App">
        <header className="App-header">
          <div className={classes["piano-grid"]}>
            {/* pianocontrols */}
            <PianoControls />
            {/* piano */}
            <Piano />
          </div>
          {/* TODO: Add input field and add text input as messages in Firebase */}
          <input
            value={this.state.inputVal}
            onChange={this.changeHandler}
          ></input>
          <button onClick={this.writeData}>Send</button>
          <ol>{messageListItems}</ol>
        </header>
      </div>
    );
  }
}

export default App;
