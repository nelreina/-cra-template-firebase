import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress, Card, CardContent } from "@material-ui/core";
import { TextField } from "formik-material-ui";

const FormExample = ({ call, initialValues }) => {
  const submit = (values, { setSubmitting }) => {
    setTimeout(async () => {
      await call(values);
      setSubmitting(false);
    }, 500);
  };
  return (
    <Card>
      <CardContent>
        <h4>Form Example</h4>
        <Formik
          initialValues={{
            name: "",
            job: "",
          }}
          onSubmit={submit}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <Field
                component={TextField}
                name="name"
                type="text"
                label="Name"
              />
              <br />
              <Field component={TextField} type="text" label="Job" name="job" />
              {isSubmitting && <LinearProgress />}
              <br />
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default FormExample;
