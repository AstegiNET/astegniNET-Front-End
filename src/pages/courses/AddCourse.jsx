import "../../assets/styles/custom.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CourseForm from "../../components/courses/CourseForm";
import CourseItem from "../../components/courses/CourseItem";
import Spinner from "../../components/commonComponent/Spinner";
import { getCourses, reset } from "../../features/courses/courseSlice";

// function AddCourse() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { user } = useSelector((state) => state.auth);
//   const { courses, isLoading, isError, message } = useSelector(
//     (state) => state.course
//   );

//   useEffect(() => {
//     if (isError) {
//       console.log(message);
//     }

//     if (!user) {
//       navigate("/login");
//     }

//     dispatch(getCourses());
//     return () => {
//       dispatch(reset());
//     };
//   }, [user, navigate, isError, message, dispatch]);

//   if (isLoading) {
//     return <Spinner />;
//   }

//   return (
//     <>
//       <section className="heading item-center justify-center">
//         <h1>
//           Welcome {user && user.fname} {user && user.lname}
//         </h1>
//       </section>

//       <CourseForm />

//       <section className="content">
//         {courses.length ? (
//           <div className="courses">
//             {courses.map((course) => (
//               <CourseItem key={course} course={course} />
//             ))}
//           </div>
//         ) : (
//           <h3>You have not set any courses</h3>
//         )}
//       </section>
//     </>
//   );
// }

// export default AddCourse;

import {
  Avatar,
  Button,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
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

// const courses = [
//   {
//     id: 1,
//     title: "Complete django tutorial",
//     logo: "/images/courses/djangodev.png",
//     rating: 4.5,
//     about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     id: 2,
//     title: "Flutter in action",
//     logo: "/images/courses/flutter.png",
//     rating: 4.5,
//     about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     id: 3,
//     title: "React Js",
//     logo: "/images/courses/reactdev.jpeg",
//     rating: 4.5,
//     about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     id: 4,
//     title: "Node js tutorial",
//     logo: "/images/courses/nodejsdev.png",
//     rating: 4.5,
//     about: "Java Masterclass sit amet consectetur adipisicing elit.",
//   },
//   {
//     id: 5,
//     title: "Java Masterclass",
//     logo: "/images/courses/javaDev.jpeg",
//     rating: 4.5,
//     about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     id: 6,
//     title: "JS for begginers",
//     logo: "/images/courses/js.jpeg",
//     rating: 4.5,
//     about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     id: 7,
//     title: "Laravel zero to hero",
//     logo: "/images/courses/laravel-refresh-share.png",
//     rating: 4.5,
//     about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     id: 8,
//     title: "Neural Networks",
//     logo: "/images/courses/neuralnet.jpeg",
//     rating: 4.5,
//     about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     id: 9,
//     title: "Advanced Photoshop Tutorial",
//     logo: "/images/courses/photoshop.jpeg",
//     rating: 4.5,
//     about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
// ];

const AddCourse = () => {
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

        <svg
          viewBox="0"
          aria-hidden="true"
          className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <path
            fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
            fillOpacity=".2"
            d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
          />
          <defs>
            <linearGradient
              id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
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
                {courses.length ? (
                  <>
                    {courses.map((course, index) => (
                      <Box m={1}>
                        <Paper elevation={2} minWidth={300}>
                          <ListItem key={index}>
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
                        </Paper>
                      </Box>
                    ))}
                  </>
                ) : (
                  <h3>You have not set any courses</h3>
                )}

                {/* {courses.length ? (
                  <>
                    {courses.map((course) => (
                      <CourseItem key={course} course={course} />
                    ))}
                  </>
                ) : (
                  <h3>You have not set any courses</h3>
                )} */}
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
