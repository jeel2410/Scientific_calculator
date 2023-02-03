const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");
const log10 = document.getElementById("log10");
const ln = document.getElementById("ln");
const base10 = document.getElementById("base10");
const power = document.getElementById("power");
const sqrt = document.getElementById("sqrt");
const two_rest = document.getElementById("two_rest");
const fact = document.getElementById("fact");
const one_divide = document.getElementById("one_divide");
const trigonometry = document.getElementById("trigonometry");
const block = trigonometry.getElementsByClassName("block");
const trichange = document.getElementById("trichange");
const sin = document.getElementById("sin");
const cos = document.getElementById("cos");
const tan = document.getElementById("tan");
const csc = document.getElementById("csc");
const sec = document.getElementById("sec");
const cot = document.getElementById("cot");

let blockevent = false;
let b_ten = false;
let log = false;
let lne = false;
let trichange_event = false;
let trigonometry_event=false;

trichange.addEventListener("click", () => {
  if (!trichange_event) {
    sin.innerHTML = "<p>sin <sup>-1</sup></p>";
    cos.innerHTML = "<p>cos <sup>-1</sup></p>";
    tan.innerHTML = "<p>tan <sup>-1</sup></p>";
    csc.innerHTML = "<p>csc <sup>-1</sup></p>";
    sec.innerHTML = "<p>sec <sup>-1</sup></p>";
    cot.innerHTML = "<p>cot <sup>-1</sup></p>";
  } else {
    sin.innerHTML = "<p>sin</p>";
    cos.innerHTML = "<p>cos</p>";
    tan.innerHTML = "<p>tan</p>";
    csc.innerHTML = "<p>csc</p>";
    sec.innerHTML = "<p>sec</p>";
    cot.innerHTML = "<p>cot</p>";
  }
  trichange_event=!trichange_event
});

sin.addEventListener('click',(e)=>{
  lastOperation=e.target.innerText;
  console.log(lastOperation);
  mathOperation();
  clearVar(lastOperation)
})
trigonometry.addEventListener("click", (e) => {
  
    trigonometry.getElementsByClassName("block")[0].style.display = "block";

});

one_divide.addEventListener("click", (e) => {
  // console.log(e.target.innerText);
  if (!dis2Num) return;
  lastOperation = e.target.innerText;
  mathOperation();
  tempResultEl.innerText = "";
  display2El.innerText = result;
  // console.log(display2El.innerText);
  display1El.innerText = "1 / " + dis2Num;
});

fact.addEventListener("click", (e) => {
  // console.log(e.target.innerText);
  if (!dis2Num) return;
  lastOperation = e.target.innerText;
  mathOperation();
  tempResultEl.innerText = "";
  display2El.innerText = result;
  // console.log(display2El.innerText);
  display1El.innerText = dis2Num + " !";
});

two_rest.addEventListener("click", (e) => {
  console.log(e.target.innerText);
  if (!dis2Num) return;
  lastOperation = e.target.innerText;
  mathOperation();
  tempResultEl.innerText = "";
  display2El.innerText = result;
  display1El.innerText = dis2Num + lastOperation;
});

sqrt.addEventListener("click", (e) => {
  if (!dis2Num) return;
  lastOperation = e.target.innerText;
  mathOperation();
  tempResultEl.innerText = "";
  display2El.innerText = result;
  display1El.innerText = lastOperation + dis2Num;
});

base10.addEventListener("click", (e) => {
  if (!b_ten) {
    b_ten = true;
    console.log(e.target.innerText);
    lastOperation = e.target.innerText;
    const operationName = e.target.innerText;
    mathOperation();
    result = "10^";
    clearVar(operationName);
  }
});

log10.addEventListener("click", (e) => {
  if (!log) {
    log = true;
    lastOperation = e.target.innerText;
    const operationName = e.target.innerText;
    mathOperation();
    clearVar(operationName);
  }
});

ln.addEventListener("click", (e) => {
  if (!lne) {
    lne = true;
    lastOperation = e.target.innerText;
    console.log(lastOperation);
    const operationName = e.target.innerText;
    mathOperation();
    clearVar(operationName);
  }
});

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

// console.log(operationEl);

numbersEl.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
  });
});

operationEl.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) return;
    haveDot = false;
    const operationName = e.target.innerText;
    // console.log(dis1Num,dis2Num,lastOperation);

    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});
const clearVar = (name = "") => {
  // console.log("disp1"+display1El);
  // console.log("disp2"+display2El);
  // console.log("dis1"+dis1Num);
  // console.log("dis2"+dis2Num);
  // console.log("result"+result);
  // console.log("tempres"+tempResultEl);
  // console.log("name"+name);
  // console.log(name);
  dis1Num += dis2Num + " " + name + " ";
  display1El.innerText = dis1Num;
  display2El.innerText = "";
  dis2Num = "";
  tempResultEl.innerText = result;
};

const mathOperation = () => {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
  } else if (lastOperation === "log") {
    if (!dis2Num) return;
    result = Math.log10(dis2Num);
  } else if (lastOperation === "ln") {
    console.log(dis2Num);
    if (!dis2Num) return;
    result = Math.log(dis2Num);
  } else if (lastOperation === "10x") {
    if (!dis2Num) return;
    result = Math.pow(10, parseFloat(dis2Num));
  } else if (lastOperation === "xy") {
    result = Math.pow(parseFloat(result), parseFloat(dis2Num));
  } else if (lastOperation === "sqrt") {
    result = Math.sqrt(dis2Num);
  } else if (lastOperation === "x2") {
    result = Math.pow(parseFloat(dis2Num), 2);
  } else if (lastOperation === "n!") {
    result = factorial(parseFloat(dis2Num));
  } else if (lastOperation === "1/x") {
    result = 1 / parseFloat(dis2Num);
  } else if (lastOperation === "sin") {
    console.log(dis2Num);
    if (!dis2Num) return;
    result = Math.sin(dis2Num);
  } else if (lastOperation === "cos") {
    console.log(dis2Num);
    if (!dis2Num) return;
    result = Math.cos(dis2Num);
  } else if (lastOperation === "tan") {
    console.log(dis2Num);
    if (!dis2Num) return;
    result = Math.tan(dis2Num);
  } else if (lastOperation === "csc") {
    console.log(dis2Num);
    if (!dis2Num) return;
    result = Math.sin(1/dis2Num);
  } else if (lastOperation === "sec") {
    console.log(dis2Num);
    if (!dis2Num) return;
    result = Math.cos(1/dis2Num);
  } else if (lastOperation === "cot") {
    console.log(dis2Num);
    if (!dis2Num) return;
    result = Math.tan(dis2Num);
  } 
};

const factorial = (num) => {
  if (num == 1) return num;
  return (num = num * factorial(num - 1));
};

equalEl.addEventListener("click", () => {
  if (!dis2Num || !dis1Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display2El.innerText = result;
  tempResultEl.innerText = "";
  dis2Num = result;
  dis1Num = "";
  console.log("after" + result);
});

clearAllEl.addEventListener("click", () => {
  dis1Num = "";
  dis2Num = "";
  display1El.innerText = "";
  display2El.innerText = "";
  result = "";
  tempResultEl.innerText = "";
  b_ten = false;
  log = false;
  lne = false;
});

clearLastEl.addEventListener("click", () => {
  display2El.innerText = "";
  dis2Num = "";
  console.log(result);
});

window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickButtonEl(e.key);
    // console.log(e.key)
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
    clickOperation(e.key);
  } else if (e.key === "*") {
    clickOperation("x");
    // console.log(e.key)
  } else if (e.key == "Enter" || e.key === "=") {
    clickEqual();
  } else if (e.key == "Backspace") {
    lastentryRemove();
  } else if (e.key == "Delete") {
    allremove();
  }
  // console.log(e.key)
});
const clickButtonEl = (key) => {
  numbersEl.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
};
const clickOperation = (key) => {
  operationEl.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
};
const clickEqual = () => {
  equalEl.click();
};

const lastentryRemove = () => {
  clearLastEl.click();
};

const allremove = () => {
  clearAllEl.click();
};
