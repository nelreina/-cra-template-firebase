import React from "react";
import { Field } from "formik";
import TextField from "./AppTextField";

const UserFields = () => {
  return (
    <>
      <Field component={TextField} name="name" type="text" label="Name" />
      <Field component={TextField} name="age" type="number" label="Age" />
    </>
  );
};

export default UserFields;
