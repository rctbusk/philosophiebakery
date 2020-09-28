import React from "react";
import { ImageGrid } from "../ImageGrid/ImageGrid";
import { tileData } from "./TileData";

export const Home = () => {
  return <ImageGrid tileData={tileData} />;
};
