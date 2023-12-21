import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Row, Col } from "react-bootstrap";
import ChatList from "./components/ChatList/ChatList";
import ChatBox from "./components/ChatBox/ChatBox";
import SideNavbar from "./components/sideNavbar/SideNavbar";
import { useState } from "react";
// import backgroundImage from "../src/assets/ChatAppBG.png";

function App() {
  const [data, setData] = useState('')
  return (
    <>
      <div className="AppContainer">
        <div className="App p-2">
          <Row style={{height:"100%"}}>
            <Col className="SideBarCol" md={1}>
              <SideNavbar />
            </Col >
            <Col className="ChatListCol" md={4}>
              <ChatList sendUserData={(data) =>setData(data)} />
            </Col>
            { data && <Col className="ChatBoxCol" md={7}>
              <ChatBox userInfo = {data}   />
            </Col>}
          </Row>
        </div>
      </div>
    </>
  );
}

export default App;
