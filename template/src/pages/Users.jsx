import React from "react";
import Layout from "../components/layout/Layout";
import { Typography } from "@material-ui/core";
import AppForm from "../components/forms/AppForm";
import UserFields from "../components/forms/UserFields";

const UsersPage = () => {
  return (
    <Layout title="Users">
      <Typography variant="h2">Userlist</Typography>

      <AppForm init={{}}>
        <UserFields />
      </AppForm>
    </Layout>
  );
};

export default UsersPage;
