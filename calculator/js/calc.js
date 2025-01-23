const screen = document.getElementById('screen');

function addValue(val) {
  const operators = ['+', '-', '*', '/'];
  const lastChar = screen.value.slice(-1);

  if (operators.includes(val)) {
    if (screen.value === '') {
      if (val === '-') {
        screen.value += val;
      } else {
        return;
      }
    } else if (operators.includes(lastChar)) {
      return;
    } else {
      screen.value += val;
    }
  } else {
    screen.value += val;
  }
}

function clearScr() {
  screen.value = '';
}

function calculate() {
  const expression = screen.value;
  const zero = /\/0(?!\d)/;
  if (zero.test(expression)) {
    screen.value = 'error';
  } else {
    try {
      screen.value = eval(screen.value);
    } catch (error) {
      screen.value = 'error';
    }
  }
  }



const themeToggle = document.getElementById("theme-toggle");
const calculator = document.querySelector(".calculator");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-theme");
  calculator.classList.toggle("dark-theme");
  screen.classList.toggle("dark-theme")

  if (document.body.classList.contains("dark-theme")) {
      themeToggle.textContent = "Light theme";
  } else {
      themeToggle.textContent = "Dark theme";
  }
});