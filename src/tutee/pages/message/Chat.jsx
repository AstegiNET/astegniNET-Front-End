import io from "socket.io-client";

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/commonComponent/sidebar/Sidebar";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import { FETCH_MESSAGES, SEND_MESSAGE } from "../../../api/API";
import TuteeHeader from "../../components/commonComponent/TuteeHeader";

// const socket = io.connect("http://localhost:3001");

function Chat() {
  const { tutee } = useSelector((state) => state.tuteeAuth);
  // const [messageId, setMessageId] = useState("");
  const [message, setMessage] = useState("");
  // const [username, setUsername] = useState("");
  // const [room, setRoom] = useState("");
  // const [showChat, setShowChat] = useState(false);

  const [messages, setMessages] = useState([]);
  const location = useLocation();

  // tutee ? `${tutee.fname}` : tutor ? tutor.fname : ""

  const tutorId = useMemo(() => {
    const data = location.state;
    console.log(data);
    return data;
  }, [location.state]);

  const messageId = useMemo(() => {
    const data = `${tutorId}${tutee._id}`;
    console.log(data);
    return data;
  }, [tutorId, tutee._id]);

  // setMessageId(`${tutorId}${tutee._id}`);

  // const joinRoom = () => {
  //   if (username !== "" && room !== "") {
  //     socket.emit("join_room", room);
  //     setShowChat(true);
  //   }
  // };
  useEffect(() => {
    getMessages();
  }, [tutorId]);

  const getMessages = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${tutee?.token}`,
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
        Authorization: `Bearer ${tutee?.token}`,
      },
    };
    const messageData = {
      receiver: tutorId,
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
      <div className="w-full">
        <TuteeHeader tutee={"Chats"} />
        <div className="h-[calc(100vh-200px)]  lg:w-1/2 px-2 py-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <Link
              to={"/tutee/messages"}
              className="flex items-center py-2  mt-4 ml-4  px-4 leading-tight bg-gray-200 text-gray-600 hover:bg-indigo-500 hover:text-gray-100 rounded-full"
            >
              <IoIosArrowBack />
              Go Back
            </Link>
            <div>{}</div>
          </div>
          <div className="h-full flex justify-between  flex-col ml-8">
            <ul className="max-h-screen overflow-y-auto overflow-x-hidden">
              {messages.map((message, index) => (
                <p >
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
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {message.body}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          <span>
                            {message.createdAt.slice(0, 10)}{" "}
                            {message.createdAt.slice(11, 19)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                </p>
              ))}
            </ul>

            <div className="flex ">
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={onChange}
                placeholder="Write here ..."
                className="col-span-full flex-grow block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-md placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />

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
    </div>
  );
}

export default Chat;
