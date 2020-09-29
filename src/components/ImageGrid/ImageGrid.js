import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  CardMedia,
  GridList,
  GridListTile,
  GridListTileBar,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: "100%",
    height: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  img: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  gridListTile: {
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: "10px",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.4)",
  },
}));

export const ImageGrid = (props) => {
  const classes = useStyles();
  const {
    largeColumns = 5,
    mediumColumns = 4,
    smallColumns = 2,
    items: tileData = [],
    cellHeight = 200,
  } = props;

  const theme = useTheme();
  const isLargeWidth = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumWidth = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  const numberOfCols = React.useMemo(() => {
    if (isLargeWidth) {
      return largeColumns;
    } else if (isMediumWidth) {
      return mediumColumns;
    } else {
      return smallColumns;
    }
  }, [isLargeWidth, isMediumWidth, largeColumns, mediumColumns, smallColumns]);

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={cellHeight}
        spacing={15}
        cols={numberOfCols}
        className={classes.gridList}
      >
        {tileData.map((tile, i) => (
          <GridListTile
            key={tile.title}
            cols={
              isLargeWidth && tile.largeColumns
                ? tile.largeColumns
                : tile.cols || 1
            }
            rows={
              isLargeWidth && tile.largeRows ? tile.largeRows : tile.rows || 1
            }
            classes={{ tile: classes.gridListTile }}
          >
            <CardMedia
              component="img"
              classes={{ root: classes.img }}
              key={i}
              image={isLargeWidth && tile.largeImg ? tile.largeImg : tile.img}
              alt={tile.title}
            />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
