/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/commonComponent/Header";
import { Link, useNavigate } from "react-router-dom";

const EnrollmentComponent = ({ enrollments }) => {
  const { tutor, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tutorAuth
  );
  const navigate = useNavigate();

  const startSession = () => {
    window.open(`/videoCall/${tutor?._id}`, "_blank");
  };
  const contactTutee=(id)=>{
    navigate("/tutor/chat",{state:id})
    console.log(id);
  }
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div></div>
        <button
          onClick={() => startSession()}
          className="py-2 mr-10 mb-2  px-4 font-semibold leading-tight bg-green-600 text-green-100 rounded-md"
        >
          start session
        </button>
      </div>
      <div className="flex flex-col mb-20 flex-1 w-full">
        <main className="h-full overflow-y-auto">
          <div className="container grid px-6 mx-auto">
            <div className="w-full  overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                      <th className="px-4 py-3">tutor</th>
                      <th className="px-4 py-3">tuttee</th>
                      <th className="px-4 py-3">course</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y ">
                    {enrollments?.map((enrollment, index) => (
                      <tr key={index} className="text-gray-700 ">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src={enrollment.tutor_avatar}
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
                                {enrollment.tutor_name}
                              </p>
                              <p className="text-xs text-gray-600 ">
                                {enrollment.description
                                  ? enrollment.description
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
                                src={enrollment.tutee_avatar}
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
                                {enrollment.tutee_name}
                              </p>
                              <p className="text-xs text-gray-600 ">
                                {enrollment.description
                                  ? enrollment.description
                                  : ""}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-3 text-sm">
                          {enrollment.course}
                        </td>

                        <td className="px-4 py-3 text-sm">
                          {enrollment.updatedAt}
                        </td>

                        <td className="px-4 py-3 text-xs">
                          <button onClick={()=>contactTutee(enrollment.tutee_id)} className="rounded-lg px-2 py-1 font-semibold leading-tight bg-indigo-500 text-white">
                            Contact
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EnrollmentComponent;
