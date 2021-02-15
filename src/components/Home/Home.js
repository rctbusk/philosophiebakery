import React from "react";
import { ImageGrid } from "../ImageGrid/ImageGrid";
import { imageData } from "./ImageData";
import { Box, CardMedia, Typography, Card, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import WeddingTasting from "../../images/weddings/wedding_cake_flavor_cupcakes.jpg";
import SecondaryLogo from "../../images/logo/white/secondary_logo.png";

const useStyles = makeStyles((theme) => ({
  logoBox: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.only("md")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingRight: theme.spacing(6),
      paddingLeft: theme.spacing(6),
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: theme.spacing(9),
      paddingLeft: theme.spacing(9),
    },
  },
  logoImage: {
    objectFit: "scale-down",
    width: "250px",
    paddingRight: "50px",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0px",
    },
  },
  button: {
    borderWidth: "3px",
    borderRadius: "0px",
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
    width: "200px",
    fontSize: "1.5rem",
  },
  mainText: {
    paddingBottom: "30px",
    textAlign: "center",
    textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <Box height="100%">
      <Card style={{ position: "relative" }} elevation={0}>
        <CardMedia
          component="img"
          image={WeddingTasting}
          alt="Wedding Cake Tasting Display"
          style={{ height: "500px" }}
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          width="100%"
          display="flex"
          flexDirection="column"
          justifyItems="center"
          alignItems="center"
          style={{ transform: "translate(-50%, -50%)" }}
          spacing={5}
        >
          <Typography
            variant="h2"
            color="secondary"
            classes={{ root: classes.mainText }}
          >
            Welcome to Philosophie Bakery
          </Typography>
          <Button
            component={Link}
            to="order"
            variant="outlined"
            classes={{ root: classes.button }}
          >
            Order
          </Button>
        </Box>
      </Card>

      <Box
        pt={1}
        pb={1}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyItems="center"
        bgcolor="primary.main"
        classes={{ root: classes.logoBox }}
      >
        <CardMedia
          component="img"
          src={SecondaryLogo}
          alt="Philosophie Bakery"
          classes={{ root: classes.logoImage }}
        />
        <Typography variant="h6" style={{ flexGrow: 1 }} color="secondary">
          I bake out of my home in the Greater Detroit area. I have 3 children,
          2 boys and a girl. I have been baking and decorating since I was a
          teenage. I also worked at the Michigan State Bakery in college and
          have continued to love all things desserts/decorating ever since. I
          specialize in decorated sugar cookies, cakes, cake pops, cupcakes, and
          macarons. I also make wedding cakes, including cake flavor tastings,
          and will do on-site decorating classes and event catering.
        </Typography>
      </Box>
      <Box pt={1} pb={1} classes={{ root: classes.logoBox }}>
        <ImageGrid
          largeColumns={3}
          mediumColumns={2}
          cellHeight={300}
          items={imageData}
        />
      </Box>
    </Box>
  );
};
