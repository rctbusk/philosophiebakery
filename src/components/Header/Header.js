import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Tab,
  Tabs,
  Hidden,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import TextLogo from "../../images/logo/white/text_logo.png";

const useStyles = makeStyles((theme) => ({
  menu: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
    //height: "100px",
  },
  tabs: {
    // display: "flex",
    //flexGrow: 1,
    maxWidth: "70%",
  },
  menuTab: {
    //minWidth: "0px",
    flexGrow: 1,
    color: theme.palette.secondary.light,
    marginRight: "10px",
    fontSize: "1.1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  menuItem: {
    minWidth: "0px",
    marginRight: "10px",
    fontSize: "1.3rem",
  },
  tabIndicator: {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const options = [
  { path: "/", title: "Home" },
  { path: "/cakes", title: "Cakes" },
  { path: "/cookies", title: "Cookies" },
  { path: "/weddings", title: "Weddings" },
  //{ path: "/events", title: "Events" },
  //{ path: "/story", title: "Story" },
  //{ path: "/order", title: "Order" },
  { path: "/contact-us", title: "Contact" },
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
    <AppBar elevation={2}>
      <Toolbar classes={{ root: classes.menu }}>
        <Link to="/">
          <img
            src={TextLogo}
            alt="Philosophie Bakery"
            style={{
              objectFit: "scale-down",
              height: "70px",
            }}
          />
        </Link>

        <Hidden smDown={true}>
          <Tabs
            value={selectedTab}
            onChange={(event, value) => {
              setSelectedTab(value);
            }}
            classes={{ root: classes.tabs, indicator: classes.tabIndicator }}
          >
            {options.map((option) => {
              return (
                <Tab
                  key={option.path}
                  to={option.path}
                  value={option.path}
                  component={Link}
                  label={option.title}
                  classes={{ root: classes.menuTab }}
                />
              );
            })}
          </Tabs>
        </Hidden>
        <Hidden mdUp={true}>
          <IconButton color="secondary" onClick={handleClick}>
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
                  key={option.path}
                  component={Link}
                  to={option.path}
                  classes={{ root: classes.menuItem }}
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
  );
};
