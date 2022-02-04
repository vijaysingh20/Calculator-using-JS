import "./styles.css";

let buttons = document.querySelectorAll("button");
let result = document.getElementById("input");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (this.innerHTML === "=") {
      result.value = eval(result.value);
    } else {
      if (this.innerHTML === "X") {
        result.value += "*";
      } else if (this.innerHTML === "Clear") {
        result.value = "";
      } else {
        result.value += this.innerHTML;
      }
    }
  });
}
