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
import BabyShowerSpread from "../../images/full-spread/full_orange_spread.jpg";
import GoldWeddingCake from "../../images/weddings/golden_wedding_cake.jpg";
import WeddingTasting from "../../images/weddings/wedding_cake_flavor_cupcakes.jpg";
import PrideCookies from "../../images/cookies/pride_cookies.jpg";

export const imageData = [
  {
    img: GermanChocolateCake,
    title: "Cakes",
    cols: 2,
    rows: 2,
  },
  {
    img: GoldWeddingCake,
    title: "Weddings",
    cols: 2,
    rows: 2,
  },

  {
    img: YellowCake,
    largeImg: YellowCakeLarge,
    title: "Custom Desserts",
    cols: 1,
    rows: 1,
    largeRows: 2,
  },
  {
    img: PrideCookies,
    title: "Cookies",
    cols: 1,
    rows: 1,
  },
  {
    img: WeddingTasting,
    title: "Cake Tastings",
    cols: 1,
    rows: 1,
  },
  {
    img: SeasonalTreats,
    title: "Seasonal Treats",
    cols: 1,
    rows: 1,
  },
  {
    img: BabyShowerSpread,
    title: "Event Catering",
    cols: 2,
    rows: 1,
  },
];
