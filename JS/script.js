const input = document.querySelector("input"),
  btn = document.querySelectorAll("button"),
  clearBtn = document.querySelector("#clear"),
  equalBtn = document.querySelector("#equal"),
  array = ["0","1","2","3","4","5","6","7","8","9","+","-","*","/"]
;
let text = input.value;


// Code
  document.addEventListener("keydown", (e) => {
  if (array.includes(e.key)) {
    input.blur();
    input.value += e.key;
    text = input.value
    console.log(text);
  } else if (e.key === "Enter") {
    calcul();
  } else if (e.key === "Backspace"){
    input.focus()
  } else input.blur()
});

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.textContent;
    if (value == "CE" || value == "=") {
      value = "";
    } else if (input.value == "error") {
      input.disabled = true;
    } else input.value += value;
  });
});

clearBtn.addEventListener("click", clear);
equalBtn.addEventListener("click", calcul);

// Fonctions
function calcul() {
  try {
    let total = eval(input.value);
    input.value = "";
    input.value = total;
  } catch (e) {
    console.error(e);
    input.value = "error";
  }
}
function clear() {
  input.value = "";
  text = "";
}
