// import io from "socket.io-client";

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

import Sidebar from "../../components/commonComponent/sidebar/Sidebar";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import { FETCH_MESSAGES, SEND_MESSAGE } from "../../../api/API";

// const socket = io.connect("http://localhost:3001");

function Chat() {
  const { tutor } = useSelector((state) => state.tutorAuth);
  const [message, setMessage] = useState("");
  // const [username, setUsername] = useState("");
  // const [room, setRoom] = useState("");
  // const [showChat, setShowChat] = useState(false);

  const [messages, setMessages] = useState([]);
  const location = useLocation();

  // tutee ? `${tutee.fname}` : tutor ? tutor.fname : ""

  const tuteeId = useMemo(() => {
    const data = location.state;
    console.log(data);
    return data;
  }, [location.state]);

  const messageId = useMemo(() => {
    const data = `${tutor._id}${tuteeId}`;
    console.log(data);
    return data;
  }, [tuteeId, tutor._id]);

  // setMessageId(`${tutorId}${tutee._id}`);

  // const joinRoom = () => {
  //   if (username !== "" && room !== "") {
  //     socket.emit("join_room", room);
  //     setShowChat(true);
  //   }
  // };
  useEffect(() => {
    getMessages();

    console.log(messages);
  }, [tuteeId]);

  const getMessages = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${tutor?.token}`,
      },
    };
    const response = await axios.get(`${FETCH_MESSAGES}/${messageId}`, config);
    setMessages(response.data);
    console.log(response.data);
    // return response.data;
  };
  const sendMessages = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${tutor?.token}`,
      },
    };
    const messageData = {
      receiver: tuteeId,
      body: message,
      message_id: messageId,
    };
    const response = await axios.post(SEND_MESSAGE, messageData, config);
    // console.log(response.data);
    getMessages();
    setMessage("");

    return response.data;
  };

  const onChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
    console.log(message);
  };
  return (
    <div className="flex">
      <Sidebar />

      <div className="h-[calc(100vh-80px)]   lg:w-1/2 justify-self-center px-2 py-2  mb-5 ">
        <div className="flex justify-between items-center">
          <Link
            to={"/tutor/messages"}
            className="flex items-center py-2  mt-4 ml-4  px-4 leading-tight bg-gray-200 text-gray-600 hover:bg-indigo-500 hover:text-gray-100 rounded-lg"
          >
            <IoIosArrowBack />
            Go Back
          </Link>
          <div></div>
        </div>
        <div className="justify-between flex flex-col my-5  ml-8">
          <ul className="max-h-screen overflow-y-auto overflow-x-hidden">
            {messages?.map((message, index) => (
              <li key={index} className="flex justify-between mt-2 py-2">
                <div className="flex gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={message.sender?.avatar}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {message.sender?.fname} {message.sender?.lname}
                    </p>
                    {message?.body.slice(0, 4) === "http" ? (
                      <a
                        href={`${message?.body}`}
                        className="mt-1 truncate text-xs leading-5 text-blue-700 hover:text-underline"
                      >
                        {message?.body}
                      </a>
                    ) : (
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {message?.body}
                      </p>
                    )}

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      <span>
                        {message?.createdAt.slice(0, 10)}{" "}
                        {message?.createdAt.slice(11, 19)}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex">
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={onChange}
              placeholder="Write here ..."
              className="col-span-full flex-grow mt-2 block w-full rounded-md p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
            {/* <div className="col-span-full ">
          
        </div> */}
            <button
              onClick={sendMessages}
              className="hover:scale-125 ml-2 text-indigo-700 hover:text-indigo-900"
            >
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
