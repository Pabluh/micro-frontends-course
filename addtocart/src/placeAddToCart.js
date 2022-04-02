import { render } from "solid-js/web";
import AddToCart from "./AddToCart";

import "./index.scss";

export default function placeAddToCart(element, id) {
  render(() => <AddToCart id={id} />, element);
}
