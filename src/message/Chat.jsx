import io from "socket.io-client";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const socket = io.connect("http://localhost:3001");

function Chat({ tutorId, TtuteeId }) {
  const { tutee } = useSelector((state) => state.tuteeAuth);
  const { tutor } = useSelector((state) => state.tutorAuth);
  const [username, setUsername] = useState("" );
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  
    // tutee ? `${tutee.fname}` : tutor ? tutor.fname : ""
 

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  // useEffect(() => {
  //   const user = tutee ? tutee.fname : tutor ? tutor.fname : "";
  //   console.log(user);
  //   setUsername(user);
  //   setRoom(user);
  // }, []);

  const messages = [
  {
    sender: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    message: "Hello there!",
    time: "2022-11-01T12:00:00",
  },
  {
    sender: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    message: "Hi Alice, how are you?",
    time: "2022-11-01T12:05:00",
  },
  {
    sender: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    message: "I am doing well, thanks for asking. How about you?",
    time: "2022-11-01T12:10:00",
  },
  {
    sender: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    time: "2022-11-01T12:15:00",
  },
  {
    sender: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    message: "That is good to hear.",
    time: "2022-11-01T12:20:00",
  },
];

  return (
    <div className="h-[calc(100vh-80px)] md:w-1/2 lg:w-1/4 flex flex-col px-4 py-2 justify-between">
      <ul className="max-h-screen overflow-y-auto overflow-x-hidden">
        {messages.map((message, index) => (
          <Link to={""}>
            <li key={index} className="flex justify-between mt-2 py-2">
              <div className="flex gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={message.imageUrl}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {message.sender}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {message.message}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    <time dateTime={message.time}>{message.time}</time>
                  </p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex">
        <textarea
          id="about"
          name="about"
          placeholder="Write your message here "
          className="col-span-full flex-grow mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-transparent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {/* <div className="col-span-full ">
          
        </div> */}
        <button className="rounded-full ml-2 bg-grey-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Chat;


    // <div className="Message1">
    //   {!showChat ? (
    //     <div className="joinChatContainer">
    //       <h3>Join A Chat</h3>
    //       <input
    //         type="text"
    //         placeholder="John..."
    //         // value={tutee ? `${tutee.fname}` : tutor ? tutor.fname : ""}
    //         onChange={(event) => {
    //           setUsername(event.target.value);
    //         }}
    //       />

    //       <input
    //         type="text"
    //         placeholder="Room ID..."
    //         onChange={(event) => {
    //           setRoom(event.target.value);
    //         }}
    //       />
    //       <button onClick={joinRoom}>Join A Room</button>
    //     </div>
    //   ) : (
    //     <Chat socket={socket} username={username} room={room} />
    //   )}
    // </div>
