import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Sidebar from "../../components/commonComponent/sidebar/Sidebar";
import { GET_MESSAGES } from "../../../api/API"
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { IoIosAdd, IoIosAddCircle } from "react-icons/io";

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      sender: PropTypes.string.isRequired,
      time: PropTypes.string,
    })
  ).isRequired,
};
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

export default function Messages() {

  return (
    <div className="flex">
      <Sidebar/>
      <div className="h-[calc(100vh-80px)] md:w-1/2 lg:w-1/4 px-4 py-2">
        <ul className="max-h-screen overflow-y-auto overflow-x-hidden">
          {messages.map((message, index) => (
            <Link to={"/tutor/chat"}>
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
        
        <div className="flex justify-between items-center">
            <div/>
            {/* <div className="col-span-full ">
          
        </div> */}
            <Link to={"/tutor/enrollments"} className="hover:scale-125 ml-2 text-indigo-700 hover:text-indigo-900">
              <IoIosAddCircle className="h-12 w-12"/>
            </Link>
          </div>
      </div>
    </div>
  );
}
