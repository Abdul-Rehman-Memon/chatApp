import React from "react";
import "./chatBox.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import myProfile from "../../assets/profile1.png";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CallIcon from "@mui/icons-material/Call";
import EmojiIcon from "../../assets/Emoji.png";
// import EmojiIcon from "../../assets/Emoji.png";
import AttachmentIcon from "../../assets/attachment.png";
import SendIcon from "../../assets/iconamoon_send-fill.png";

const ChatBox = (props) => {

  let chat = [
    
  ]

  return (
    <div className="chatBoxContainer">
      <div className="TopBar container">
        <div className="nameContainer">
          <div className="nameWrapper">
            {/*  */}
            <div className="ProfilePicWrapper">
              <img
                className="ProfilePic mt-9"
                src={myProfile}
                alt="Description of the image"
              />
            </div>
            {/*  */}

            <div className="name container">{props.userInfo.name}</div>
          </div>
          <div className="status">
            <p>
              <FiberManualRecordIcon
                fontSize="smaller"
                color="success"
                style={{ marginTop: "-1px" }}
              />
              Online
            </p>
          </div>
        </div>
        <div className="iconContainer">
          <div className="iconWrapper">
            <VideoCallIcon className="icon" fontSize="medium" color="primary" />
          </div>
          <div className="iconWrapper">
            <CallIcon className="icon" fontSize="medium" color="primary" />
          </div>
        </div>
      </div>
      {/* chatContainer Start */}
      <div className="ChatContainerParent">
        <div className="ChatContainer px-3">
          {props.chats.messages.map((user) => {
            return (
              <div
                key={user.id}
                className={`chatMessageContainer ${
                  user.type === "me" ? "me" : "you"
                }`}
              >
                <p className="chatMessages ">{user.message}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* chatContainer ends */}

      {/* textingportion start */}

      <div className="TextingContainer">
        <div className="textInputFieldWrapper">
          <input
            className="textInputField"
            type="text"
            placeholder="Type a message"
          />
        </div>
        <div className="iconssWrapper">
          <img className="icons" src={AttachmentIcon} alt="" />
          <img className="icons" src={EmojiIcon} alt="" />
          <img className="icons" src={SendIcon} alt="" />
        </div>
      </div>
      {/* textingportion ends */}
    </div>
  );
};

export default ChatBox;
