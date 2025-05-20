const display = document.getElementById("display");
const buttons = document.querySelectorAll(".num-btn");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "AC") {
      currentInput = "";
      display.value = "";
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch (error) {
        display.value = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Optional: Add keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === "Enter") {
    try {
      currentInput = eval(currentInput).toString();
      display.value = currentInput;
    } catch (error) {
      display.value = "Error";
      currentInput = "";
    }
  } else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (!isNaN(key) || "+-*/".includes(key)) {
    currentInput += key;
    display.value = currentInput;
  }
});



