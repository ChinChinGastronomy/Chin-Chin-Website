import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import IntroPage from "./pages/introPage";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  Typography: {
    fontFamily: ["Poppins", "200"].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Switch>
          <Route exact path="/" component={IntroPage} />

          <Route exact path="/home" component={HomePage} />
        </Switch>
      </Fragment>
    </ThemeProvider>
  );
};

export default App;
