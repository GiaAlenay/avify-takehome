import { CircularProgress } from "@mui/material";
import React from "react";

function Loader() {
  return (
    <div
      style={{
        minHeight: "300px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        verticalAlign: "middle",
        justifyContent: "center",
      }}
    >
      <CircularProgress />;
    </div>
  );
}

export default Loader;
