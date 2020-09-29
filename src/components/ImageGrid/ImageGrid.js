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
    overflow: "hidden",
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
  icon: {
    color: "white",
  },
  gridListTile: {
    backgroundColor: "transparent",
    borderRadius: "15px",
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)",
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export const ImageGrid = (props) => {
  const classes = useStyles();
  const tileData = props.items || [];
  const cellHeight = 200;

  const theme = useTheme();
  const isLargeWidth = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumWidth = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  const numberOfCols = React.useMemo(() => {
    if (isLargeWidth) {
      return 5;
    } else if (isMediumWidth) {
      return 3;
    } else {
      return 2;
    }
  }, [isLargeWidth, isMediumWidth]);

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
            cols={tile.cols || 1}
            rows={tile.rows || 1}
            classes={{ tile: classes.gridListTile }}
          >
            <CardMedia
              component="img"
              style={{
                //paddingTop: "3px",
                width: "100%",
                //height: "100%",
                objectFit: "scale-down",
                //
              }}
              key={i}
              image={tile.img}
              alt={tile.title}
            />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              // actionIcon={
              //   <IconButton
              //     aria-label={`star ${tile.title}`}
              //     className={classes.icon}
              //   >
              //     <StarBorderIcon />
              //   </IconButton>
              // }
              // actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
