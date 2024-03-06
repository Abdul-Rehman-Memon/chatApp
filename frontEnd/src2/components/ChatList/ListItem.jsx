import React from "react";
import "./chatList.css";
import myProfile from "../../assets/profile1.png";
import clock from "../../assets/clock.png";

const ListItem = (props) => {
  return (
    <div className="listItemContainer" onClick={props.onClick}>
      <div className="profilePicWrapper">
        <img
          className="profilePic"
          src={props.img}
          alt="Description of the image"
        />
      </div>
      <div className="profileDetailWrapper">
        <div className="detailInnerDiv1">
          <p className="contactName">{props.name}</p>
        </div>
        <div className="detailInnerDiv2">
          <p className="message">{props.message}</p>
          <p className="time">
            <img className="clock" src={clock} alt="" /> {props.time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;


// value = {
//   name:'ab'
// }

// const fun = ( value )=>{

//   return value = {
//     ...value,
//     id:1
//   }

// }


// ()=>{

//   beta = fun()

//   sendinfo = (beta) =>{

//     console.log(beta)
//   }

//   console.log(beta)

// }