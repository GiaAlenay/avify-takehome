import React from "react";
import { MyErrorProps } from "./interfaces";
import { Alert } from "@mui/material";

const Error: React.FC<MyErrorProps> = ({ errorMSG }) => {
  return (
    <Alert severity="error">
      {errorMSG} <br />
      <span>Please try again later.</span>
    </Alert>
  );
};

export default Error;
