import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tab,
  Tabs,
  Hidden,
  Menu,
  MenuItem,
  ThemeProvider,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import NeutraTextBook from "../../fonts/NeutraText-Book.ttf";

const neutraTextBook = {
  fontFamily: "NeutraTextBook",
  fontStyle: "normal",
  src: `
      local('NeutraTextBook'),
      local('NeutraTextBook'),
      url(${NeutraTextBook}) format('ttf')
    `,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  menuTabRoot: {
    minWidth: "0px",
    marginRight: "10px",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#B4B4DA",
    },
    secondary: {
      main: "#440044",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [neutraTextBook],
      },
    },
  },
});

const options = [
  { path: "/", title: "Home" },
  { path: "/cakes", title: "Cakes" },
  { path: "/cookies", title: "Cookies" },
  { path: "/weddings", title: "Weddings" },
  //{ path: "/events", title: "Events" },
  //{ path: "/story", title: "Story" },
  //{ path: "/order", title: "Order" },
  // { path: "/contact-us", title: "Contact Us" },
];

export const Header = () => {
  let location = useLocation();
  const [selectedTab, setSelectedTab] = React.useState(location.pathname);
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Philosophie Bakery
          </Typography>
          <Hidden smDown={true}>
            <Tabs
              value={selectedTab}
              onChange={(event, value) => {
                setSelectedTab(value);
              }}
            >
              {options.map((option) => {
                return (
                  <Tab
                    to={option.path}
                    value={option.path}
                    component={Link}
                    label={option.title}
                    classes={{ root: classes.menuTabRoot }}
                  />
                );
              })}
            </Tabs>
          </Hidden>
          <Hidden mdUp={true}>
            <IconButton
              color="secondary"
              aria-label="add an alarm"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ style: { padding: 0 } }}
            >
              {options.map((option) => {
                return (
                  <MenuItem
                    component={Link}
                    to={option.path}
                    classes={{ root: classes.MuiMenuItem }}
                    onClick={() => {
                      setSelectedTab(option.path);
                      handleClose();
                    }}
                  >
                    {option.title}
                  </MenuItem>
                );
              })}
            </Menu>
          </Hidden>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
