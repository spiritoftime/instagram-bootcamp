import React from "react";
import {
  onChildChanged,
  onChildAdded,
  onChildRemoved,
  push,
  ref,
  set,
} from "firebase/database";
import {
  getStorage,
  ref as sRef,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { database } from "./firebase";
import "./App.css";
import Piano from "./Piano";
import keyListener from "./helper-functions/keyListener";
import classes from "./app.module.css";
import PianoControls from "./PianoControls";
import Comment from "./Comment";
// Save the Firebase message folder name as a constant to avoid bugs due to misspelling
const DB_MESSAGES_KEY = "messages";
const DB_IMAGE_URL_KEY = "imageUrl";
const storage = getStorage();

class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialise empty messages array in state to keep local state in sync with Firebase
    // When Firebase changes, update local state, which will update local UI
    this.state = {
      messages: [],
      inputVal: "",
      inputFile: "",
    };
  }

  componentDidMount() {
    keyListener();
    const messagesRef = ref(database, DB_MESSAGES_KEY);
    // onChildAdded will return data for every child at the reference and every subsequent new child
    // onChildAdded triggers at the start
    onChildAdded(messagesRef, (data) => {
      // Add the subsequent child to local component state, initialising a new array to trigger re-render
      this.setState((state) => ({
        // Store message key so we can use it as a key in our list items when rendering messages
        messages: [...state.messages, { key: data.key, val: data.val() }],
      }));
    });
    onChildChanged(messagesRef, (data) => {
      // Add the subsequent child to local component state, initialising a new array to trigger re-render
      this.setState((state) => ({
        // Store message key so we can use it as a key in our list items when rendering messages
        messages: [...state.messages, { key: data.key, val: data.val() }],
      }));
    });
    onChildRemoved(messagesRef, (data) => {
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
  fileHandler = (e) => {
    this.setState({ inputFile: e.target.files[0] });
  };

  // Note use of array fields syntax to avoid having to manually bind this method to the class
  writeData = (e) => {
    e.preventDefault();
    const messageListRef = ref(database, DB_MESSAGES_KEY);

    const imageStorageRef = sRef(
      storage,
      this.state.inputFile.name.split(".")[0]
    );
    const newMessageRef = push(messageListRef);
    set(newMessageRef, this.state.inputVal);
    uploadBytes(imageStorageRef, this.state.inputFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        set(ref(database, DB_IMAGE_URL_KEY, newMessageRef.key), url);
      });
    });
  };
  // clicked = () => {
  //   console.log(this.tileRef.current.dataset.key);
  // };
  render() {
    // Convert messages in state to message JSX elements to render
    console.log("hi.png".split("."));
    let messageListItems = this.state.messages.map((message) => (
      <Comment
        id={message.key}
        key={message.key}
        comment={message.val}
      ></Comment>
    ));
    return (
      <div className="App">
        <header className="App-header">
          <div className={`${classes["piano-grid"]} center`}>
            <PianoControls />

            <Piano />
          </div>
          {/* TODO: Add input field and add text input as messages in Firebase */}
          <div className={`${classes.comment_section} flex mid-gap`}>
            <form
              className={`${classes.comment_input} flex flex-col small-gap `}
            >
              <div className="flex align small-gap">
                <label htmlFor="comment">Write a comment ➡</label>
                <input
                  id="comment"
                  value={this.state.inputVal}
                  onChange={this.changeHandler}
                ></input>
              </div>
              <div className="flex align small-gap">
                <label htmlFor="image">Upload a image ➡</label>
                <input
                  id="image"
                  type="file"
                  onChange={this.fileHandler}
                ></input>
              </div>
              <button className={`${classes.btn}`} onClick={this.writeData}>
                Send
              </button>
            </form>
            <ol className={"flex flex-col mid-gap justify align"}>
              {messageListItems}
            </ol>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
