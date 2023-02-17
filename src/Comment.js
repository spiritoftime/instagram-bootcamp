import React from "react";
import classes from "./comment.module.css";
import edit from "./images/edit.png";
import like from "./images/like.png";
import { database } from "./firebase";
import del from "./images/delete.png";
import { remove, ref } from "firebase/database";
import { getStorage, ref as sRef, deleteObject } from "firebase/storage";
const DB_MESSAGES_KEY = "messages/";
const DB_IMAGE_URL_KEY = "imageUrl/";
const storage = getStorage();
class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numLikes: 0 };
  }
  deleteComment = () => {
    const commentRef = ref(database, DB_MESSAGES_KEY + this.props.id);
    const imageRef = ref(database, DB_IMAGE_URL_KEY + this.props.id);
    // delete image from storage too!
    // const desertRef = sRef(storage, "images/desert.jpg");
    remove(commentRef);
    remove(imageRef);
  };
  likePost = () => {
    // create another db - {posts:{numLikes:0,likedBy:{xyz,abc}}}
    this.setState((state) => ({
      // Store message key so we can use it as a key in our list items when rendering messages
      numLikes: state.numLikes + 1,
    }));
  };
  render() {
    return (
      <div className={classes.comment_modal + " align flex flex-col"}>
        <p className={classes.comment}>{this.props.comment}</p>
        <img
          src={this.props.commentImage[0].val && this.props.commentImage[0].val}
          alt=""
          className={classes.comment_img}
        />
        <p>{this.state.numLikes} likes</p>
        <div className={classes.edit_tools + " justify flex mid-gap"}>
          <img src={edit} alt="" className={classes.icon}></img>
          <img
            src={like}
            onClick={this.likePost}
            alt=""
            className={classes.icon}
          ></img>
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
