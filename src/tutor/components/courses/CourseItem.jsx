import { useDispatch } from "react-redux";
import { deleteCourse } from "../../features/courses/courseSlice";
import {
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";

function CourseItem({ course }) {
  const dispatch = useDispatch();

  return (
    <>
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
