import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import ChatList from "./components/ChatList/ChatList";
import ChatBox from "./components/ChatBox/ChatBox";
import SideNavbar from "./components/sideNavbar/SideNavbar";
import { useState } from "react";
import vector from "../src/assets/ChatBg.png";

function App() {
  const [data, setData] = useState("");
  return (
    <>
      <div className="AppContainer">
        <div className="App p-2">
          <Row style={{ height: "100%" }}>
            <Col className="SideBarCol" md={1}>
              <SideNavbar />
            </Col>
            <Col className="ChatListCol" md={4}>
              <ChatList
                sendUserData={(data) => setData(data)}
                chat={(chat) => {
                  setChat(chat);
                }}
              />
            </Col>

            <Col className="ChatBoxCol" md={7}>
              {!data ? (
                <div className="vectorContainer">
                  <div className="vectorImgWrapper">
                    <img className="vector" src={vector} alt="" />
                  </div>
                </div>
              ) : (
                <ChatBox userInfo={data} chats={chat} />
              )}
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default App;
