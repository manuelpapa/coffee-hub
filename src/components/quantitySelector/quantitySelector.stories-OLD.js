import { useEffect } from "@storybook/client-api";

import "./quantitySelector.css";
import quantitySelector from "./quantitySelector.html";

export default { title: "Quantity Selector" };

export const coffeeSelector = () => {
  useEffect(() => {
    const minus = document.querySelector(".quantitySelector__minus");
    const plus = document.querySelector(".quantitySelector__plus");
    const amount = document.querySelector(".counter");

    if (Number(amount.innerHTML) <= 1) {
      minus.disabled = true;
    }

    minus.addEventListener("click", () => {
      const oldAmount = Number(amount.innerHTML);
      if (oldAmount === 2) {
        minus.disabled = true;
      }
      if (oldAmount === 10) {
        plus.disabled = false;
      }
      amount.innerHTML = oldAmount - 1;
    });

    plus.addEventListener("click", () => {
      const oldAmount = Number(amount.innerHTML);
      if (oldAmount === 1) {
        minus.disabled = false;
      }
      if (oldAmount === 9) {
        plus.disabled = true;
      }
      amount.innerHTML = oldAmount + 1;
    });
  });
  return quantitySelector;
};

/*
 */
