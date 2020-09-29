import React from "react";
import { ImageGrid } from "../ImageGrid/ImageGrid";
import { imageData } from "./ImageData";
import { Box } from "@material-ui/core";

export const Home = () => {
  return (
    <Box height="100%">
      <ImageGrid items={imageData} />
    </Box>
  );
};
