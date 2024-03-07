// import "bootstrap/dist/css/bootstrap.min.css";
// import { Row, Col } from "react-bootstrap";
// import { useState } from "react";
// import vector from "../src/assets/ChatBg.png";
// import SideNavbarContainer from "../src2/containers/SideBarContainer";
// import ChatListContainer from "../src2/containers/ChatListContainer";
// import ChatBoxContainer from "../src2/containers/ChatBoxContainer"

// function App() {
//   const [data, setData] = useState("");
//   return (
//     <>
//       <div className="AppContainer">
//         <div className="App p-2">
//           <Row style={{ height: "100%" }}>
//             <Col className="SideBarCol" md={1}>
//               <SideNavbarContainer/>
//             </Col>
//             <Col className="ChatListCol" md={4}>
//               <ChatListContainer
//                 sendUserData={(data) => setData(data)}
//                 chat={(chat) => {
//                   setChat(chat);
//                 }}
//               />
//             </Col>

//             <Col className="ChatBoxCol" md={7}>
//               {!data ? (
//                 <div className="vectorContainer">
//                   <div className="vectorImgWrapper">
//                     <img className="vector" src={vector} alt="" />
//                   </div>
//                 </div>
//               ) : (
//                 <ChatBoxContainer userInfo={data} chats={chat} />
//               )}
//             </Col>
//           </Row>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;


import React from 'react'
import "./App.css";
import Container from 'react-bootstrap'
const App = () => {
  return (
    <div>
<Container fluid>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
    </div>
  )
}

export default App
