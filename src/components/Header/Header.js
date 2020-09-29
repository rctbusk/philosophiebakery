import React from "react";

import { makeStyles } from "@material-ui/core/styles";
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
  Box,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CakeLogo from "../../images/bakery_cake_logo.png";

const useStyles = makeStyles((theme) => ({
  menu: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px",
    height: "100px",
  },
  logo: {
    backgroundColor: "#e8e9eb",
  },
  logoText: {
    textTransform: "uppercase",
  },
  menuTab: {
    minWidth: "0px",
    marginRight: "10px",
    fontSize: "1.3rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  menuItem: {
    minWidth: "0px",
    marginRight: "10px",
    fontSize: "20px",
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
    <AppBar>
      <Toolbar classes={{ root: classes.menu }}>
        <Box
          display="flex"
          classes={{ root: classes.logo }}
          justifyContent="center"
          alignItems="center"
          height="150px"
          width="150px"
          borderRadius="50%"
          borderColor="primary.dark"
          border={1}
        >
          <img
            src={CakeLogo}
            alt="Philosophie Bakery"
            style={{
              height: "100px",
              objectFit: "scaled-down",
            }}
          />
        </Box>
        <Hidden xsDown={true}>
          <Typography variant="h4" classes={{ root: classes.logoText }}>
            Philosophie Bakery
          </Typography>
        </Hidden>

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
