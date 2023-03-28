import { useDispatch } from "react-redux";
import { deleteCourse } from "../../features/courses/courseSlice";
import {
  Avatar,
  Box,
  Button,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

function CourseItem({ course }) {
  const dispatch = useDispatch();

  return (
    <>
      {/* <div className="course">
        <div>{new Date(course.createdAt).toLocaleString("en-US")}</div>
        <h2>{course.text}</h2>
        <button
          onClick={() => dispatch(deleteCourse(course._id))}
          className="close"
        >
          X
        </button>
      </div> */}

      <Box m={1}>
        <Paper elevation={2} minWidth={300}>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" alt="Course logo" src={"logo"} />
            </ListItemAvatar>
            <ListItemText primary={course.text} secondary={course.text} />
          </ListItem>
        </Paper>
        <Button
          variant="contained"
          onClick={() => dispatch(deleteCourse(course._id))}
        >
          delete Course
        </Button>
      </Box>
    </>
  );
}

export default CourseItem;
