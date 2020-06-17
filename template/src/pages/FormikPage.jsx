import React from "react";
import Layout from "../components/layout/Layout";
import FormExample from "../components/FormExample";

const FormikPage = () => {
  const submit = async (values) => {
    alert(JSON.stringify(values, null, 2));
    return true;
  };
  return (
    <Layout>
      <h1>Formik Page</h1>
      <FormExample call={submit} />
    </Layout>
  );
};

export default FormikPage;
