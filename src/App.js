import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
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
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
};

export default App;
