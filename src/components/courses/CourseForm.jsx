import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
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
    <section className="form">
      {/* <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Course</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Add Course</button>
        </div>
      </form> */}
      <form onSubmit={onSubmit}>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
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
        </Grid>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Add Course
            </Button>
          </Grid>
        </Grid>
      </form>
    </section>
  );
}

export default CourseForm;
