/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaCheck, FaSearch, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FETCH_REQUESTS,
  ACCEPT_REQUEST,
  REJECT_REQUEST,
} from "../../../api/API";
import Sidebar from "../../components/commonComponent/sidebar/Sidebar";
import Header from "../../components/commonComponent/Header";
import NotFound from "../../components/notFound/NotFound";

const RequestComponent = () => {
  const { tutor } = useSelector((state) => state.tutorAuth);
  const [requests, setRequests] = useState([]);

  const config = useMemo(() => {
    const userAuth = {
      headers: {
        Authorization: `Bearer ${tutor?.token}`,
      },
    };
    return userAuth;
  }, [tutor?.token]);

  const getRequests = async () => {
    const response = await axios.get(FETCH_REQUESTS, config);
    setRequests(response.data);
    return response.data;
  };

  const acceptRequest = async (id) => {
    const response = await axios.put(`${ACCEPT_REQUEST}/${id}`, config);
    //setRequests is updated here
    console.log(response.data);
    getRequests();
  };

  const rejectRequest = async (id) => {
    const response = await axios.put(`${REJECT_REQUEST}/${id}`, config);
    console.log(response.data);
  };

  useEffect(() => {
    const getRequests = async () => {
      const response = await axios.get(FETCH_REQUESTS, config);
      setRequests(response.data);
      return response.data;
    };
    getRequests();
  }, [config]);

  useEffect(() => {
    console.log(requests);
  }, [requests]);

  return (
    <div className=" text-left flex">
      <Sidebar />
      <div className="w-full">
        <Header title={"Requests"} />

        {requests.length ? (
          <div className="flex flex-col flex-1 w-full">
            <main className=" overflow-y-auto">
              <div className="container grid px-6 mx-auto">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                  <div className="w-full overflow-x-auto">
                    <table className="w-full whitespace-no-wrap">
                      <thead>
                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b  bg-gray-50 ">
                          <th className="px-4 py-3">tutor</th>
                          <th className="px-4 py-3">tuttee</th>
                          <th className="px-4 py-3">course</th>
                          <th className="px-4 py-3">Status</th>
                          <th className="px-4 py-3">Date</th>
                          <th className="px-4 py-3">actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y ">
                        {requests?.map((request, index) => (
                          <tr key={index} className="text-gray-700 ">
                            <td className="px-4 py-3">
                              <div className="flex items-center text-sm">
                                <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                  <img
                                    className="object-cover w-full h-full rounded-full"
                                    src={request.tutor_avatar}
                                    alt=""
                                    loading="lazy"
                                  />
                                  <div
                                    className="absolute inset-0 rounded-full shadow-inner"
                                    aria-hidden="true"
                                  ></div>
                                </div>
                                <div>
                                  <p className="font-semibold">
                                    {request.tutor_name}
                                  </p>
                                  <p className="text-xs text-gray-600 ">
                                    {request.description
                                      ? request.description
                                      : ""}
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td className="px-4 py-3">
                              <div className="flex items-center text-sm">
                                <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                  <img
                                    className="object-cover w-full h-full rounded-full"
                                    src={request.tutee_avatar}
                                    alt=""
                                    loading="lazy"
                                  />
                                  <div
                                    className="absolute inset-0 rounded-full shadow-inner"
                                    aria-hidden="true"
                                  ></div>
                                </div>
                                <div>
                                  <p className=" font-semibold">
                                    {request.tutee_name}
                                  </p>
                                  <p className="text-xs text-gray-600 ">
                                    {request.description
                                      ? request.description
                                      : ""}
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td className="px-4 py-3 text-sm">
                              {request.course}
                            </td>

                            <td className="px-4 py-3 text-xs">
                              <span
                                className={`px-2 py-1 font-semibold leading-tight  ${
                                  request.status === "accepted"
                                    ? "bg-green-100 text-green-700"
                                    : request.status === "pending"
                                    ? "bg-red-100 text-red-500"
                                    : request.status === "rejected"
                                    ? "bg-red-200 text-red-700"
                                    : ""
                                } rounded-full `}
                              >
                                {request.status === "accepted"
                                  ? "accepted"
                                  : request.status === "pending"
                                  ? "pending"
                                  : request.status === "rejected"
                                  ? "rejected"
                                  : ""}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {request.updatedAt}
                            </td>

                            {request.status === "pending" && (
                              <td className="px-4 py-3">
                                <div className="flex items-center space-x-4 text-sm">
                                  <button
                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-500 focus:outline-none focus:shadow-outline-gray"
                                    aria-label="Delete"
                                    onClick={() => rejectRequest(request._id)}
                                  >
                                    <FaTrash />
                                  </button>
                                  <button
                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-green-700 focus:outline-none focus:shadow-outline-gray"
                                    aria-label="Accept"
                                    onClick={() => acceptRequest(request._id)}
                                  >
                                    <FaCheck />
                                  </button>
                                </div>
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </main>
          </div>
        ) : (
          <NotFound
            title={"Requests"}
            description={"Sorry, you don't have any requests yet."}
          />
        )}
      </div>
    </div>
  );
};

export default RequestComponent;
