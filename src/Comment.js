import React from "react";
import classes from "./comment.module.css";
import edit from "./images/edit.png";
import like from "./images/like.png";
import { database } from "./firebase";
import del from "./images/delete.png";
import { remove, ref } from "firebase/database";
const DB_MESSAGES_KEY = "messages";
class Comment extends React.Component {
  deleteComment = () => {
    const commentRef = ref(database, DB_MESSAGES_KEY, this.props.id);
    remove(commentRef);
  };
  render() {
    return (
      <div className={classes.comment_modal + " flex flex-col"}>
        <p className={classes.comment}>{this.props.comment}</p>
        <div className={classes.edit_tools + " justify flex mid-gap"}>
          <img src={edit} alt="" className={classes.icon}></img>
          <img src={like} alt="" className={classes.icon}></img>
          <img
            onClick={this.deleteComment}
            src={del}
            alt=""
            className={classes.icon}
          ></img>
        </div>
      </div>
    );
  }
}
export default Comment;
