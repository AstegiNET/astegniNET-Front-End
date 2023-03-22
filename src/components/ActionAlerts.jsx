import * as React from "react";
import Alert from "@mui/material/Alert";

export default function ActionAlerts({ isSuccess, message }) {
  return (
    <>
      <Alert
        variant={isSuccess ? "filled" : "outlined"}
        severity={isSuccess ? "success" : "error"}
      >
        {message}
      </Alert>
    </>
  );
}
