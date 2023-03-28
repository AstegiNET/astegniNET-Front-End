import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCourse } from "../../features/courses/courseSlice";

function CourseForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createCourse({ text }));
    setText("");
  };

  return (
    <Grid>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="text"
              id="text"
              value={text}
              label="add course"
              multiline
              maxRows={4}
              onChange={(e) => setText(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sx={{ position: "center" }}>
            <Button variant="contained" type="submit">
              Add Course
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}

export default CourseForm;
