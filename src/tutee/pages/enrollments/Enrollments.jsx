import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheck, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import Sidebar from "../../components/commonComponent/sidebar/Sidebar";
import TuteeHeader from "../../components/commonComponent/TuteeHeader";
import { FETCH_ENROLLMENTS } from "../../../api/API";

export default function Enrollment() {
  const [enrollments, setEnrollments] = useState([]);
  const { tutee } = useSelector((state) => state.tuteeAuth);

  const getEnrollments = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${tutee?.token}`,
      },
    };
    const response = await axios.get(FETCH_ENROLLMENTS, config);
    setEnrollments(response.data);
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    getEnrollments();
  }, []);

  return (
    <>
      <div className="flex pt-10">
        <Sidebar />
        <div className="p-4 w-full">
          <div className=" shadow-2xl min-h-screen rounded-lg dark:border-gray-700">
            <TuteeHeader tutee={tutee} />
            {enrollments.length > 0 ? (
              <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 ">
                  <ul className="grid gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
                    {enrollments.map((request, index) => (
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
                                {request.ispaid && "payed"}
                              </span>
                            </p>
                            <p className="text-sm font-semibold leading-6 text-gray-80">
                              {request.description}
                            </p>

                            {request.ispaid && (
                              <button className="flex items-center mx-2 my-5 px-4 font-small rounded-xl bg-indigo-600 focus:outline-none text-white">
                                <FaCheck className="mr-2" />{" "}
                                <span>enrolled</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <EnrollmentsNotFound />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function EnrollmentsNotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          <span>
            <FaSearch />
            No Enrollments Found
          </span>
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, you don't have any enrollments yet.
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
