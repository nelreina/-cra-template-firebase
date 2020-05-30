import React from 'react'
import FlexCenter from '../components/layout/FlexCenter'
import { StyledFirebaseAuth } from "react-firebaseui";
import { uiConfig, firebaseAuth } from '../services/firebase';
import { useUser } from 'reactfire';
import { Redirect } from 'react-router';

const Landing = () => {
  const user = useUser();

  if (user) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <FlexCenter height={"100vh"}>
      <h1>Welcome to the app </h1>

      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebaseAuth}

      />
    </FlexCenter>
  )
}

export default Landing
