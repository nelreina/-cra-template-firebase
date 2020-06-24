import React from "react";
import ReactDOM from "react-dom";
import { FirebaseAppProvider } from "reactfire";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { config } from "./services/firebase";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FirebaseAppProvider firebaseConfig={config}>
        <App />
      </FirebaseAppProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
