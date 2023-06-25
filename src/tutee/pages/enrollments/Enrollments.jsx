import axios from "axios";
import { useEffect, useState } from "react";
import { FaComment} from "react-icons/fa";
import { useSelector } from "react-redux";
import Sidebar from "../../components/commonComponent/sidebar/Sidebar";
import TuteeHeader from "../../components/commonComponent/TuteeHeader";
import { FETCH_ENROLLMENTS } from "../../../api/API";
import NotFound from "../../components/notFound/NotFound";
import { useNavigate } from "react-router-dom";

export default function Enrollment() {
  const [enrollments, setEnrollments] = useState([]);
  const { tutee } = useSelector((state) => state.tuteeAuth);
const navigate = useNavigate();
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

const contactTutor=(id)=>{
  navigate("/tutee/chat",{state:id})
}

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <TuteeHeader tutee={"Enrollments"} />
          <div className="p-4 h-3/4">
            {enrollments.length > 0 ? (
              <div className="bg-white py-4 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 ">
                  <ul className="grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-16 xl:col-span-2">
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
                                {request.ispaid && "active"}
                              </span>
                            </p>
                            <p className="text-sm font-semibold leading-6 text-gray-80">
                              {request.description}
                            </p>
                            <button onClick={()=>contactTutor(request.tutor_id)} className="flex items-center mx-2 my-5 py-1 px-4 font-small rounded-full bg-indigo-500 focus:outline-none text-white">
                                <FaComment className="mr-2" />{" "}
                                <span>Contact</span>
                              </button>
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
