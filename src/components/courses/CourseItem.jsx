import { useDispatch } from "react-redux";
import { deleteCourse } from "../../features/courses/courseSlice";

function CourseItem({ course }) {
  const dispatch = useDispatch();

  return (
    <div className="course">
      <div>{new Date(course.createdAt).toLocaleString("en-US")}</div>
      <h2>{course.text}</h2>
      <button
        onClick={() => dispatch(deleteCourse(course._id))}
        className="close"
      >
        X
      </button>
    </div>
  );
}

export default CourseItem;
