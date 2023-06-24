import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheck, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import Sidebar from "../../components/commonComponent/sidebar/Sidebar";
import TuteeHeader from "../../components/commonComponent/TuteeHeader";
import { FETCH_ENROLLMENTS } from "../../../api/API";
import NotFound from "../../components/notFound/NotFound";

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
        <div className="w-full">
          <TuteeHeader tutee={"Enrollments"} />
          <div className="p-4  shadow-2xl min-h-screen rounded-lg dark:border-gray-700">
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
              <NotFound
                title={"Enrollments"}
                description={"Sorry, you don't have any enrollments yet"}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
