import React from "react";
import FlexCenter from "../components/layout/FlexCenter";
import { StyledFirebaseAuth } from "react-firebaseui";
import { uiConfig, firebaseAuth } from "../services/firebase";
import { useUser } from "reactfire";
import { Redirect } from "react-router";
import logo from "../assets/logo.png";
import { Typography } from "@material-ui/core";

const Landing = () => {
  const user = useUser();

  if (user) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <FlexCenter height={"100vh"} column>
      <Typography variant="h2">Welcome to</Typography>
      <img src={logo} alt="Logo" />

      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
    </FlexCenter>
  );
};

export default Landing;
