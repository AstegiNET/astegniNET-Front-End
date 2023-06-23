import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FETCH_ENROLLMENTS } from "../../../api/API";
import EnrollmentComponent from "./EnrollmentComponent";
import Sidebar from "../../components/commonComponent/sidebar/Sidebar";

export default function Enrollment() {
  const [enrollments, setEnrollments] = useState([]);
  const { tutor } = useSelector((state) => state.tutorAuth);

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
  }, []);

  return (
    <>
      <div className="flex pt-50">
        <Sidebar />
        <EnrollmentComponent enrollments={enrollments} />
      </div>
    </>
  );
}
