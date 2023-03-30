import "../../assets/styles/custom.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CourseForm from "../../components/courses/CourseForm";
import Spinner from "../../components/commonComponent/Spinner";
import { getCourses, reset } from "../../features/courses/courseSlice";
import { deleteCourse } from "../../features/courses/courseSlice";

import {
  Avatar,
  Button,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Box,
  Container,
  Typography,
} from "@mui/material";

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "../../components/commonComponent/Header";
import Footer from "../../components/commonComponent/Footer";

const THEME = createTheme({
  typography: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
  },
});

const AddCourse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.tuteeAuth);
  const { courses, isLoading, isError, message } = useSelector(
    (state) => state.course
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getCourses());
    return () => {
      dispatch(reset());
    };
  }, [navigate, dispatch, message, isError]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ThemeProvider theme={THEME}>
      <Header />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100vw",

          mt: 10,
        }}
      >
        <svg
          viewBox="0 0 1097 845"
          aria-hidden="true"
          className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
        >
          <path
            fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
            fillOpacity=".2"
            d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
          />
          <defs>
            <linearGradient
              id="10724532-9d81-43d2-bb94-866e98dd6e42"
              x1="1097.04"
              x2="-141.165"
              y1=".22"
              y2="363.075"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>

        <Container maxWidth="lg">
          <Box py={2}>
            <Button
              sx={{
                width: "100%",
                marginTop: "1rem",
                backgroundColor: "#5247E5",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#5247E5",
                  color: "#fff",
                },
              }}
            >
              <Typography variant="h4">courses</Typography>
            </Button>
          </Box>
        </Container>
        <Container maxWidth="xl">
          <Grid mt={2} direction="row" container spacing={2}>
            <Grid mt={-5} item xs={12} md={6} lg={3}>
              <Box
                sx={{
                  borderRadius: "4%",
                  m: 2,
                  p: 2,
                  boxShadow: "0 0 3px 1px #bcbcbc",
                }}
              >
                <CourseForm />
              </Box>
            </Grid>
            <Grid mb={2} item xs={0} md={6} lg={9}>
              <Typography variant="h5" compontent="h5">
                courses enrolled by {user && user.fname} {user && user.lname}
              </Typography>
              <Box
                display="flex"
                flexWrap="wrap"
                sx={{ boxShadow: 1, p: 3, borderRadius: "4%" }}
              >
                {courses?.length ? (
                  <>
                    {courses.map((course, index) => (
                      <Box m={1} key={course._id}>
                        <Paper elevation={2}>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar
                                variant="rounded"
                                alt="Course logo"
                                src={"logo"}
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={course.text}
                              secondary={course.text}
                            />
                          </ListItem>
                          <Button
                            onClick={() => dispatch(deleteCourse(course._id))}
                          >
                            Delete
                          </Button>
                        </Paper>
                      </Box>
                    ))}
                  </>
                ) : (
                  <h3>You have not set any courses</h3>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default AddCourse;
