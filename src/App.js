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

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#B4B4DA",
      light: "#e6e6ff",
      dark: "#8484a8",
    },
    secondary: {
      main: "#d6d6d6",
      light: "#ffffff",
      dark: "#a5a5a5",
    },
    logo: {
      main: "#e8e9eb",
    },
  },
  typography: {
    fontFamily: "NeutraText",
  },
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiTypography: {
      h4: {
        [defaultTheme.breakpoints.down("md")]: {
          fontSize: "1.5rem",
        },
      },
    },
  },
});

export const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <ThemeProvider theme={theme}>
        <Header />
        <Box
          mt={2}
          mb={2}
          pt="115px"
          bgcolor="secondary.main"
          height="100%"
          overflow="visible"
        >
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
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default App;
