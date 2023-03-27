import * as React from "react";
import Alert from "@mui/material/Alert";

export default function ActionAlerts({ message }) {
  return (
    <>
      <Alert variant="outlined" severity="error">
        {message}
      </Alert>
    </>
  );
}
