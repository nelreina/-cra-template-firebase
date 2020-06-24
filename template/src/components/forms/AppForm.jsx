import React from "react";
import { Formik, Form } from "formik";
import { Button, LinearProgress, Card, CardContent } from "@material-ui/core";
const AppForm = ({
  children,
  call = (values) => {
    alert(JSON.stringify(values, null, 2));
  },
  init,
}) => {
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
        <Formik initialValues={init} onSubmit={submit}>
          {({ submitForm, isSubmitting }) => (
            <Form>
              {children}
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

export default AppForm;
