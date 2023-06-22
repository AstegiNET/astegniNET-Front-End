/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FETCH_ENROLLMENTS } from "../../../api/API";
import Header from "../../components/commonComponent/Header";
// const API_URL = "http://localhost:5000/api/request/fetchEnrollments";

const EnrollmentComponent = ({enrollments}) => {
  console.log(enrollments)
  return (
    
    <div className="w-full">
      <Header title = "Enrollments"/>
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

                        <td className="px-4 py-3 text-xs">
                          <span
                            className={`px-2 py-1 font-semibold leading-tight  ${
                              enrollment.ispaid
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            } rounded-full `}
                          >
                            {enrollment.ispaid ? "Payed" : "not Payed"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          {enrollment.updatedAt}
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
