import React from "react";

import { Box, CardMedia, Card, Paper } from "@material-ui/core";
import { Page } from "../Page/Page";
import { makeStyles } from "@material-ui/core/styles";

import OrangeSpread from "../../images/full-spread/full_orange_spread.jpg";

const useStyles = makeStyles((theme) => ({
  formInputs: {
    //flexGrow: 1,
    width: "100%",
  },
  formRows: {
    paddingTop: "30px",
  },
  form: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
}));

export const Order = () => {
  const classes = useStyles();

  return (
    <Page title="Contact Us">
      <Card style={{ position: "relative", height: "100%" }} elevation={0}>
        <CardMedia
          component="img"
          image={OrangeSpread}
          alt="Wedding Cake Tasting Display"
          style={{ height: "97vh" }}
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <Paper
            elevation={20}
            component={Box}
            pl={1.5}
            pr={1.5}
            height="95%"
            classes={{ root: classes.form }}
            overflow="auto"
          >
            <iframe
              title="Order Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLScgtEcp5jC9ZIo9SAVghTJsW6UegD4P92Y28TUuqqEzFhzXiA/viewform?embedded=true"
              width="100%"
              height="100%"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </Paper>
        </Box>
      </Card>
    </Page>
  );
};
