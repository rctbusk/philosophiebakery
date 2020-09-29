import React from "react";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider, Toolbar, Box } from "@material-ui/core";
import { Header } from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Cookies } from "./components/Cookies/Cookies";
import { Cakes } from "./components/Cakes/Cakes";
import { Weddings } from "./components/Weddings/Weddings";
import { ContactUs } from "./components/ContactUs/ContactUs";

import NeutraTextBook from "./fonts/NeutraText-Book.ttf";

const neutraTextBook = {
  fontFamily: "NeutraTextBook",
  fontStyle: "normal",
  src: `
    local('NeutraTextBook'),
    local('NeutraTextBook'),
    url(${NeutraTextBook}) format('ttf')
  `,
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#B4B4DA",
    },
    secondary: {
      main: "#edeff2",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [neutraTextBook],
        backgroundColor: "#edeff2",
      },
    },
  },
});

export const App = () => {
  return (
    <div>
      <Header />
      <Toolbar />
      <ThemeProvider theme={theme}>
        <Box pt={2} pl={1} pr={1} bgcolor="secondary.main">
          <Switch>
            <Route path="/cookies">
              <Cookies />
            </Route>
            <Route path="/cakes">
              <Cakes />
            </Route>
            <Route path="/weddings">
              <Weddings />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          {/* <Box
          style={{
            display: "flex",
          }}
          bgcolor="primary.main"
        >
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: "250px",
            }}
          />
        </Box> */}
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default App;
