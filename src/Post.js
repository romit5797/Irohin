import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                Donald Trump
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @DonaldTrump
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>Donald Trump has contracted the coronavirus. Tap for moreonald Trump has contracted the coronavirus. Tap for moreonald Trump has contracted the coronavirus. Tap for more</p>
            </div>
          </div>
          <img src="https://static.dezeen.com/uploads/2020/05/coronavirus-covid-19-illustation-cdc-medical-illustrator-dan-higgins_dezeen_2364_sq3-300x300.jpg" alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
      
    );
  }
);

export default Post;
