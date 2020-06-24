import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import AppModal from "../components/layout/AppModal";
import { Button, Typography } from "@material-ui/core";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout title="Dashboard">
      <AppModal open={open} cancel={() => setOpen(false)}>
        <Typography variant="h2">This is a Modal!</Typography>
      </AppModal>
      <h1>Dashboard</h1>
      <Button color="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
    </Layout>
  );
};

export default Dashboard;
