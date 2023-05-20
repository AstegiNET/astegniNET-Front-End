import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheck, FaSearch, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";

const requests = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
//   {
//     name: "Leslie Alexander",
//     role: "Co-Founder / CEO",
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
//   {
//     name: "Leslie Alexander",
//     role: "Co-Founder / CEO",
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
//   {
//     name: "Leslie Alexander",
//     role: "Co-Founder / CEO",
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
// ];

function RequestsNotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl foFnt-bold tracking-tight text-indigo-300 sm:text-5xl">
          <FaSearch />
        </h1>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
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

export default function Requests() {
  const [requests, setRequests] = useState([]);
  const { tutee } = useSelector((state) => state.tuteeAuth);
  const { tutor } = useSelector((state) => state.tutorAuth);

  useEffect(() => {
    const getRequests = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${tutor?.token}`,
        },
      };
      const response = await axios.get(
        "http://localhost:5000/api/request/fetchRequests",
        config
      );
      setRequests(response.data);
      return response.data;
    };
    getRequests();
  }, [tutor]);

  console.log(requests);
  return (
    <>
      {requests.length > 0 ? (
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Meet our leadership
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                vitae elementum enim vitae ullamcorper suspendisse.
              </p>
            </div>
            <ul className="grid gap-x-4 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {requests.map((request, index) => (
                <li key={index}>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={request.tutee_avatar}
                      alt=""
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {request.tutee}
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
                      <p className="text-sm font-semibold leading-6 text-gray-100">
                        {request.description}
                      </p>
                      <div className="flex">
                        <button className="flex items-center mx-2 px-4 font-small text-indigo-600 bg-transparent border border-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white hover:border-transparent focus:outline-none">
                          <FaCheck className="mr-2" /> <span>Accept</span>
                        </button>
                        <button className="flex items-center mx-2 px-4 font-small text-red-600 bg-transparent border border-red-600 rounded-xl hover:bg-red-600 hover:text-white hover:border-transparent focus:outline-none">
                          <FaTrash className="mr-2" /> <span>Delete</span>
                        </button>
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
    </>
  );
}
