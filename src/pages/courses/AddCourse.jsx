import "../../assets/styles/custom.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CourseForm from "../../components/courses/CourseForm";
import CourseItem from "../../components/courses/CourseItem";
import Spinner from "../../components/commonComponent/Spinner";
import { getCourses, reset } from "../../features/courses/courseSlice";

function AddCourse() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { courses, isLoading, isError, message } = useSelector(
    (state) => state.course
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getCourses());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>
          Welcome to astegniNET {user && user.fname} {user && user.lname}
        </h1>
        <p>add course Dashboard</p>
      </section>

      <CourseForm />

      <section className="content">
        {courses.length > 0 ? (
          <div className="courses">
            {courses.map((course) => (
              <CourseItem key={course._id} course={course} />
            ))}
          </div>
        ) : (
          <h3>You have not set any courses</h3>
        )}
      </section>
    </>
  );
}

export default AddCourse;
