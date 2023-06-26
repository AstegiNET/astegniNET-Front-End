import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../components/commonComponent/sidebar/Sidebar";
import { FETCH_ALLMESSAGES } from "../../../api/API";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import {IoIosAddCircle } from "react-icons/io";

export default function Messages() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const { tutee } = useSelector((state) => state.tuteeAuth);

  const getMessages = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${tutee?.token}`,
      },
    };
    const response = await axios.get(FETCH_ALLMESSAGES, config);
    setMessages(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getMessages();
  }, []);
  const contactTutor = (id) => {
    navigate("/tutee/chat", { state: id });
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-[calc(100vh-80px)] md:w-1/2 lg:w-1/4 px-4 py-2">
        <ul className="max-h-screen overflow-y-auto overflow-x-hidden">
          {messages?.map((message, index) => (
            <button
              onClick={() => contactTutor(message.message_id.slice(0, 24))}
            >
              <li
                key={index}
                className="flex text-left justify-between mt-2 py-2"
              >
                <div className="flex gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={message.sender.avatar}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {message.sender.fname} {message.sender.lname}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {message.body}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      <span>{message.sender.createdAt}</span>
                    </p>
                  </div>
                </div>
              </li>
            </button>
          ))}
        </ul>

        <div className="flex justify-between items-center">
          <div />
          {/* <div className="col-span-full ">
          
        </div> */}
          <Link
            to={"/tutee/enrollments"}
            className="hover:scale-125 ml-2 text-indigo-700 hover:text-indigo-900"
          >
            <IoIosAddCircle className="h-12 w-12" />
          </Link>
        </div>
      </div>
    </div>
  );
}
