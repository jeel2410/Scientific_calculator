const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");
const log10 = document.getElementById("log10");
const ln = document.getElementById('ln');
const base10 = document.getElementById('base10')
const power=document.getElementById('power')
const sqrt=document.getElementById('sqrt')
let b_ten = false;
let log = false
let lne = false;

sqrt.addEventListener('click',(e)=>{
  lastOperation = e.target.innerText;
    const operationName = e.target.innerText;
    mathOperation();
    clearVar(operationName);
})


base10.addEventListener('click', (e) => {
  if (!b_ten) {
    b_ten = true;
    console.log(e.target.innerText);
    lastOperation = e.target.innerText;
    const operationName = e.target.innerText;
    mathOperation()
    result = '10^'
    clearVar(operationName)
  }

})

log10.addEventListener("click", (e) => {
  if (!log) {
    log = true;
    lastOperation = e.target.innerText;
    const operationName = e.target.innerText;
    mathOperation();
    clearVar(operationName);
  }

});

ln.addEventListener('click', (e) => {
  if (!lne) {
    lne = true;
    lastOperation = e.target.innerText;
    console.log(lastOperation);
    const operationName = e.target.innerText;
    mathOperation()
    clearVar(operationName);

  }

})

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
    result = Math.pow(10, parseFloat(dis2Num))
  } else if(lastOperation==='xy'){
    result=Math.pow(parseFloat(result),parseFloat(dis2Num))
  } else if(lastOperation==='sqrt'){
    result=Math.sqrt((dis2Num))
    console.log(result);

  }
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
  console.log('after' + result);
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
