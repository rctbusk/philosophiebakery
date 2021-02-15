import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  CardMedia,
  GridList,
  GridListTile,
  GridListTileBar,
  useMediaQuery,
} from "@material-ui/core";
import { useMemo } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    //width: "100%",
    //height: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  img: {
    width: (props) => `${Math.floor(100 / props.numberOfCols)}%`,
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  gridListTile: {
    //height: "100%",
    width: (props) => `${Math.floor(100 / props.numberOfCols)}%`,
    backgroundColor: "transparent",
  },
  imageTitle: {
    fontSize: "1.05rem",
    textTransform: "uppercase",
    color: theme.palette.secondary.light,
  },
}));

export const ImageGrid = (props) => {
  const classes = useStyles({
    largeColumns: 5,
    mediumColumns: 4,
    smallColumns: 2,
    items: [],
    cellHeight: 200,
    showTitle: false,
    allSquare: true,
    spacing: 10,
    ...props,
  });
  const {
    largeColumns = 5,
    mediumColumns = 4,
    smallColumns = 2,
    items: tileData = [],
    cellHeight = 200,
    showTitle = false,
    allSquare = true,
    spacing = 10,
  } = props;

  const theme = useTheme();
  const isLargeWidth = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumWidth = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  const numberOfCols = useMemo(() => {
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
        style={{
          width: `${cellHeight * numberOfCols + spacing * numberOfCols}`,
        }}
        spacing={spacing}
        cols={numberOfCols}
        className={classes.gridList}
      >
        {tileData.map((tile, i) => {
          let col = 1;
          let row = 1;
          if (!allSquare) {
            col =
              isLargeWidth && tile.largeColumns
                ? tile.largeColumns
                : tile.cols || 1;
            row =
              isLargeWidth && tile.largeRows ? tile.largeRows : tile.rows || 1;
          }
          return (
            <GridListTile
              key={tile.title}
              cols={col}
              rows={row}
              classes={{ tile: classes.gridListTile }}
            >
              <CardMedia
                component="img"
                classes={{ root: classes.img }}
                key={i}
                image={isLargeWidth && tile.largeImg ? tile.largeImg : tile.img}
                alt={tile.title}
              />
              {showTitle && (
                <GridListTileBar
                  title={tile.title}
                  titlePosition="top"
                  className={classes.titleBar}
                  classes={{ title: classes.imageTitle }}
                />
              )}
            </GridListTile>
          );
        })}
      </GridList>
    </div>
  );
};
