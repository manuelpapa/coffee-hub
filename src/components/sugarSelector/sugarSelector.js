import "./sugarSelector.css";
import { createElement } from "../../utils/elements";
import sugar0Src from "../../assets/sugar_0.svg";
import sugar1Src from "../../assets/sugar_1.svg";
import sugar2Src from "../../assets/sugar_2.svg";
import sugar3Src from "../../assets/sugar_3.svg";

export const createSugarSelector = () => {
  const sugarSelector = createElement("div", { className: "sugar" });
  const zero = createElement("input", {
    type: "radio",
    name: "sugar",
    value: "0",
  });
  const one = createElement("input", {
    type: "radio",
    name: "sugar",
    value: "1",
  });
  const two = createElement("input", {
    type: "radio",
    name: "sugar",
    value: "2",
  });
  const three = createElement("input", {
    type: "radio",
    name: "sugar",
    value: "3",
  });

  const zeroLabel = createElement("label");
  zeroLabel.append(zero);
  const zeroImg = createElement("img", {
    src: sugar0Src,
    className: "sugar__zero",
  });
  zeroLabel.append(zeroImg);

  const oneLabel = createElement("label");
  oneLabel.append(one);
  const oneImg = createElement("img", {
    src: sugar1Src,
    className: "sugar__one",
  });
  oneLabel.append(oneImg);

  const twoLabel = createElement("label");
  twoLabel.append(two);
  const twoImg = createElement("img", {
    src: sugar2Src,
    className: "sugar__two",
  });
  twoLabel.append(twoImg);

  const threeLabel = createElement("label");
  threeLabel.append(three);
  const threeImg = createElement("img", {
    src: sugar3Src,
    className: "sugar__three",
  });
  threeLabel.append(threeImg);

  sugarSelector.append(zeroLabel);
  sugarSelector.append(oneLabel);
  sugarSelector.append(twoLabel);
  sugarSelector.append(threeLabel);

  return sugarSelector;
};
