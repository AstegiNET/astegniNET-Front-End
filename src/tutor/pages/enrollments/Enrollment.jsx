import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FETCH_ENROLLMENTS } from "../../../api/API";
import EnrollmentComponent from "./EnrollmentComponent";
import Sidebar from "../../components/commonComponent/sidebar/Sidebar";
import NotFound from "../../components/notFound/NotFound";
import Header from "../../components/commonComponent/Header";
import { useLocation } from "react-router-dom";

export default function Enrollment() {
  const [enrollments, setEnrollments] = useState([]);
  const { tutor } = useSelector((state) => state.tutorAuth);
  const location = useLocation();
  const url = location.pathname + location.search + location.hash;

  const getEnrollments = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${tutor?.token}`,
      },
    };
    const response = await axios.get(FETCH_ENROLLMENTS, config);
    setEnrollments(response.data);
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    getEnrollments();
    console.log(url);
  }, []);

  return (
    <div className="flex  text-left">
      <Sidebar />
      <div className="w-full">
        <Header title="Enrollments" />
        {enrollments.length ? (
          <EnrollmentComponent enrollments={enrollments} />
        ) : (
          <NotFound
            title={"Enrollments"}
            description={"Sorry, you don't have any enrollments yet."}
          />
        )}
      </div>
    </div>
  );
}
