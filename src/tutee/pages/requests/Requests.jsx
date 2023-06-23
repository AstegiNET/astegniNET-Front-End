import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch, FaTrash, FaCcAmazonPay } from "react-icons/fa";
import { useSelector } from "react-redux";
import Sidebar from "../../components/commonComponent/sidebar/Sidebar";
import Pay from "../payment/Pay";
import TuteeHeader from "../../components/commonComponent/TuteeHeader";
import { FETCH_REQUESTS, DELETE_REQUEST } from "../../../api/API";

export default function Requests() {
  const [requests, setRequests] = useState([]);
  const { tutee } = useSelector((state) => state.tuteeAuth);

  const getRequests = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${tutee?.token}`,
      },
    };
    const response = await axios.get(FETCH_REQUESTS, config);
    setRequests(response.data);
    return response.data;
  };

  const cancelRequest = async (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${tutee?.token}`,
      },
    };

    const response = await axios.delete(`${DELETE_REQUEST}/${id}`, config);

    setRequests((prevRequests) =>
      prevRequests.filter((prevRequest) => prevRequest.id !== id)
    );
    getRequests();
    console.log(response.data);
  };

  useEffect(() => {
    getRequests();
  }, []);

  console.log(requests);
  return (
    <>
      <div className="flex pt-10">
        <Sidebar />
        <div className="w-full">
          <div className="p-4  shadow-2xl min-h-screen rounded-lg dark:border-gray-700">
            <TuteeHeader tutee={tutee} />
            {requests.length > 0 ? (
              <div className="bg-white  sm:py-10">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 ">
                  <ul className="grid gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
                    {requests.map((request, index) => (
                      <li key={index}>
                        <div className="flex items-center gap-x-6 shadow-lg rounded-xl p-5">
                          <img
                            className="h-16 w-16 rounded-full"
                            src={request.tutor_avatar}
                            alt=""
                          />
                          <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                              {request.tutor_name}
                            </h3>
                            <p>
                              course:{" "}
                              <span className="text-sm font-semibold leading-6 text-indigo-600">
                                {request.course}
                              </span>
                            </p>
                            <p>
                              status:{" "}
                              <span className="text-sm font-semibold leading-6 text-indigo-600">
                                {request.status}
                              </span>
                            </p>
                            <p className="text-sm font-semibold leading-6 text-gray">
                              {request.description}
                            </p>

                            <div className="flex">
                              {request.status === "pending" && (
                                <button
                                  onClick={() => cancelRequest(request._id)}
                                  className="flex items-center mx-2 my-5 px-4 font-small text-red-600 bg-transparent border border-red-600 rounded-xl hover:bg-red-600 hover:text-white hover:border-transparent focus:outline-none"
                                >
                                  <FaTrash className="mr-2" />{" "}
                                  <span>Cancel</span>
                                </button>
                              )}
                              {request.status === "rejected" && (
                                <button className="disabled flex items-center mx-2 my-5 px-4 font-small text-red-600 bg-transparent border border-red-600 rounded-xl focus:outline-none">
                                  <FaTrash className="mr-2" />{" "}
                                  <span>Rejected</span>
                                </button>
                              )}
                              {request.status === "accepted" &&
                                request.paymentStatus === "pending" && (
                                  <Pay
                                    payData={{
                                      name: request.tutee_name,
                                      email: request.tutee_email,
                                      amount: `${request.tutor_salary}`,
                                      phone: request.tutee_phone,

                                      tutee_id: request.tutee_id,
                                      tutor_id: request.tutor_id,
                                      course_id: request.course_id,
                                      request_id: request._id,

                                      token: tutee?.token,
                                    }}
                                  />
                                )}

                              {request.status === "accepted" &&
                                request.paymentStatus === "payed" && (
                                  <button className="flex items-center mx-2 my-5 px-4 font-small  rounded-xl bg-green-600 text-white border-transparent ">
                                    <FaCcAmazonPay className="mr-2" />
                                    <span>payed</span>
                                  </button>
                                )}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <RequestsNotFound />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function RequestsNotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl foFnt-bold tracking-tight text-indigo-300 sm:text-5xl">
          <FaSearch />
        </h1>

        <h1 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          No Requests Found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, you don't have any requests yet.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </a>
          <a href="/" className="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
