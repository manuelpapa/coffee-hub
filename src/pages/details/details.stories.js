import "./details.css";
import { createElement } from "../../utils/elements";
import { coffeeSelector } from "../../components/quantitySelector/quantitySelector.stories";
import macchiatoSrc from "../../assets/macchiato.svg";

export default {
  title: "Pages/Details",
};

export const basic = () => {
  const main = createElement("main", {
    className: "details",
  });
  //creations
  const header = createElement("div", {
    className: "details__header",
  });

  const coffeeTitle = createElement("h2", {
    className: "details__title",
    innerText: "Macchiato",
  });
  const macchiatoImage = createElement("img", {
    src: macchiatoSrc,
    alt: "picture of a macchiato in venti with sugar",
  });

  const quantitySelector = coffeeSelector();

  //relationship
  main.append(header);
  header.append(coffeeTitle);
  main.append(quantitySelector);
  header.append(macchiatoImage);
  return main;
};
