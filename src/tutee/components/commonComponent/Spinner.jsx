import CircularProgress from "@mui/material/CircularProgress";

import Grid from "@mui/material/Grid";
const Spinner = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <CircularProgress color="secondary" />
        </Grid>
      </Grid>
    </>
  );
};

export default Spinner;
