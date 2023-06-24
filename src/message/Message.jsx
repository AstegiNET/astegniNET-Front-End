import "./Message.css";
import io from "socket.io-client";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

function Message({ tutorId, TtuteeId }) {
  const { tutee } = useSelector((state) => state.tuteeAuth);
  const { tutor } = useSelector((state) => state.tutorAuth);
  const [username, setUsername] = useState(
    tutee ? `${tutee.fname}` : tutor ? tutor.fname : ""
  );
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  useEffect(() => {
    const user = tutee ? tutee.fname : tutor ? tutor.fname : "";
    console.log(user);
    setUsername(user);
    setRoom(user);
  }, []);

  return (
    <div className="Message">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            // value={tutee ? `${tutee.fname}` : tutor ? tutor.fname : ""}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Message;
