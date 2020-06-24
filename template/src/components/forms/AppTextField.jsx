import React from "react";
import { TextField } from "formik-material-ui";

const AppTextField = (props) => {
  return (
    <TextField
      style={{ margin: "0.5em 0" }}
      variant="outlined"
      fullWidth
      type="text"
      size="small"
      {...props}
    />
  );
};

export default AppTextField;
