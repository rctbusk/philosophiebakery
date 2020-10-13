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
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

import GermanChocolateCake from "../../images/cakes/german_chocolate_pecan_cake.jpg";
import YellowCake from "../../images/cakes/yellow_cake.jpg";
import YellowCakeLarge from "../../images/cakes/yellow_cake_large.jpg";
import SeasonalTreats from "../../images/cakes/pumpkin_pie_placeholders.jpg";
import WhiteBlueWeddingCake from "../../images/weddings/light_blue_to_white_weeding_cake.jpg";
import PrideCookies from "../../images/cookies/pride_cookies.jpg";
import EasterCookies from "../../images/cookies/easter_cookies.jpg";

export const imageData = [
  {
    img: EasterCookies,
    title: "Cakes",
    cols: 1,
    rows: 1,
  },
  {
    img: WhiteBlueWeddingCake,
    title: "Weddings",
    cols: 2,
    rows: 2,
  },
  {
    img: SeasonalTreats,
    title: "Seasonal Treats",
    cols: 1,
    rows: 1,
  },

  {
    img: GermanChocolateCake,
    title: "Cakes",
    cols: 2,
    rows: 2,
  },
  {
    img: PrideCookies,
    title: "Cookies",
    cols: 1,
    rows: 1,
  },

  {
    img: YellowCake,
    largeImg: YellowCakeLarge,
    title: "Custom Desserts",
    cols: 1,
    rows: 1,
    largeRows: 2,
  },
];
