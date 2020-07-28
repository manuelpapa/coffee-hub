import { useEffect } from "@storybook/client-api";

export default {
  title: "Pages/Details",
};

export const basic = () => {
  useEffect(() => {
    const button = document.querySelector(".btn");

    button.addEventListener("click", () => {
      alert(button.innerHTML);
      button.innerHTML = "after I clicked";
    });
  });

  return '<button class="btn">change your mind</button>';
};

//internal alert function

/*let message = "Hello fishy";
message = "yo fishy 🐟";


/*const numberOfStudents = 15;
const message = `Hello ${numberOfStudents} fishes`;
alert(message);*/
