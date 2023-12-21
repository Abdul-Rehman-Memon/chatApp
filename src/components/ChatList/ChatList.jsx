import React from "react";
import "./chatList.css";
import myProfile from "../../assets/profile1.png";
import clock from "../../assets/clock.png";
import Navbar from "./Navbar";
import ListItem from "./ListItem";
const ChatList = ({sendUserData}) => {

  const updateList = (id) => {
    sendUserData(
      listItems.find((d)=>{
        return d.id === id
      } )
    )
  }

  let listItems = [
    {
      id: 1,
      img: myProfile,
      name: "Zayn Arisar",
      message: "Hi, how are you?",
      time: "10:00",
    },
    {
      id: 2,
      img: myProfile,
      name: "Hamza",
      message: "Hi, how are you?",
      time: "10:00",
    },
  ]  

  return (
    <>
      <div className="chatListContainer">
        <Navbar />
        <div 
        
        className="ChatListWrapper">
          {
  listItems.map((item) => (
    <ListItem
      key={item.id}
      img={item.img}
      name={item.name}
      message={item.message}
      time={item.time}
      onClick={()=>updateList(item.id)}

    />
  ))
}
          
     
        </div>
      </div>
    </>
  );
};

export default ChatList;
