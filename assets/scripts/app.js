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
const pie = document.getElementById("pie");
const e = document.getElementById("e");
const power = document.getElementById("power");
const sqrt = document.getElementById("sqrt");
const square = document.getElementById("square");
const fact = document.getElementById("fact");
const one_divide = document.getElementById("one_divide");
const trigonometry = document.getElementById("trigonometry");
const fn = document.getElementById("function");
const m_plus = document.getElementById('m_plus')
const m_minus = document.getElementById('m_minus')
const m_clear = document.getElementById('m_clear')
const m_save = document.getElementById('m_save')
const m_recall = document.getElementById('m_recall')
const block = trigonometry.getElementsByClassName("block");
const block2 = trigonometry.getElementsByClassName("block2");
const trichange = document.getElementById("trichange");
const trihyp = document.getElementById("trihyp");
const mode = document.getElementById("mode");
const floor = document.getElementById("floor");
const ceil = document.getElementById("ceil");
const rand = document.getElementById("rand");
const dms = document.getElementById("dms");
const deg = document.getElementById("deg");
const exp = document.getElementById("exp");
const sin = document.getElementById("sin");
const cos = document.getElementById("cos");
const tan = document.getElementById("tan");
const csc = document.getElementById("csc");
const sec = document.getElementById("sec");
const cot = document.getElementById("cot");
const change = document.getElementById('change')
const fe = document.getElementById('F-E')
const plus_minus = document.getElementById('plus_minus')
const degree = document.getElementById('degree');
let mresult = 0;
// let degree_event=true;





let blockevent = false;
let block2_event = false;
let b_ten = false;
let log = false;
let lne = false;
let trichange_event = false;
let trigonometry_event = false;
let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;
let sqrt_event = false;
let fact_event = false;
let square_event = false;
let one_divide_event = false;
let sin_event = false;
let cos_event = false;
let tan_event = false;
let csc_event = false;
let sec_event = false;
let cot_event = false;
let trihyp_event = false;
let change_event = false;
let mode_event = false;
let floor_event = false;
let ceil_event = false;
let power_event = false;
let degree_event = true;

degree.addEventListener('click',()=>{
  if(degree_event){
    degree.innerText='RAD'
  }else{
    degree.innerText='DEG'
  }
  degree_event=!degree_event
})

power.addEventListener('click', (e) => {
  // console.log(dis2Num);
  dis1Num = dis2Num;
  dis2Num = "";
  power_event = true;
  lastOperation = e.target.innerText;
})

plus_minus.addEventListener('click', (e) => {
  if (isNaN(parseFloat(dis2Num))) {
    return;
  }
  dis2Num = parseFloat(dis2Num) * (-1)
  display2El.innerText = dis2Num;
})

fe.addEventListener('click', (e) => {
  display2El.innerText = dis2Num + "e+ 0";
  display1El.innerText = "";

})

change.addEventListener('click', (e) => {
  if (!change_event) {
    // change[0].style.backgroundColor='white'
    square.innerHTML = '<p>x<sup>3</sup>';
    sqrt.innerHTML = '<p><sup>3</sup>√x</p>';
    power.innerHTML = '<p><sup>y</sup>√x</p>';
    base10.innerHTML = '<p>2<sup>x</sup></p>';
    log.innerText = 'logyx';
    // ln.innerHTML='<p>e<sup>x</sup></p>';
    ln.innerText = 'e^x'
  }
  else {
    // change[0].style.backgroundColor ='#16b2eb7d'
    square.innerHTML = '<p>x<sup>2</sup>';
    sqrt.innerHTML = '<p><sup>2</sup>√x</p>';
    power.innerHTML = '<p>x<sup>y</sup></p>';
    base10.innerHTML = '<p>10<sup>x</sup></p>';
    log.innerText = 'log';
    ln.innerText = 'ln';
  }
  change_event = !change_event;
})

m_save.addEventListener('click', (e) => {
  mresult = parseFloat(dis2Num);
  console.log(mresult);
})
m_plus.addEventListener('click', (e) => {
  mresult += parseFloat(dis2Num);
})
m_minus.addEventListener('click', (e) => {
  mresult -= parseFloat(dis2Num);
})
m_recall.addEventListener('click', (e) => {
  display2El.innerText = mresult;
})
m_clear.addEventListener('click', (e) => {
  mresult = 0;
  display2El.innerText = mresult;
})


exp.addEventListener("click", () => {
  result = Math.exp(dis2Num);

  display2El.innerText = result;
  display1El.innerText = "e^" + dis2Num;
  dis2Num = result;
});
dms.addEventListener("click", (e) => {
  lastOperation = e.target.innerText;
  mathOperation();
  display1El.innerText = "";
  display2El.innerText = result;
  dis2Num = result;
});

rand.addEventListener("click", (e) => {
  display1El.innerText = "Random No. (0-1)";
  display2El.innerText = Math.random();
});

mode.addEventListener("click", (e) => {
  if (!mode_event) {
    mode_event = true;
    lastOperation = e.target.innerText;
    mathOperation();
    display1El.innerText = "|" + dis2Num + "|";
    display2El.innerText = result;
    dis2Num = result;
  }
});
floor.addEventListener("click", (e) => {
  if (!floor_event) {
    floor_event = true;
    lastOperation = e.target.innerText;
    mathOperation();
    display1El.innerText = dis2Num;
    display2El.innerText = result;
    dis2Num = result;
  }
});
ceil.addEventListener("click", (e) => {
  if (!ceil_event) {
    ceil_event = true;
    lastOperation = e.target.innerText;
    mathOperation();
    display1El.innerText = dis2Num;
    display2El.innerText = result;
    dis2Num = result;
  }
});
e.addEventListener("click", (e) => {
  lastOperation = e.target.innerText;
  mathOperation();
  if (dis2Num) {
    display1El.innerText = dis2Num + " * e";
  } else {
    display1El.innerText = "e";
  }
  display2El.innerText = result;
  dis2Num = result;
});
pie.addEventListener("click", (e) => {
  lastOperation = e.target.innerText;
  mathOperation();
  if (dis2Num) {
    display1El.innerText = dis2Num + " * pie";
  } else {
    display1El.innerText = "pie";
  }
  display2El.innerText = result;
  dis2Num = result;
});

trichange.addEventListener("click", (e) => {
  // e.stopPropagation();
  if (!trichange_event) {
    trichange.style.backgroundColor = "#16b2eb7d";
    sin.innerHTML = "<p>sin <sup>-1</sup></p>";
    cos.innerHTML = "<p>cos <sup>-1</sup></p>";
    tan.innerHTML = "<p>tan <sup>-1</sup></p>";
    csc.innerHTML = "<p>csc <sup>-1</sup></p>";
    sec.innerHTML = "<p>sec <sup>-1</sup></p>";
    cot.innerHTML = "<p>cot <sup>-1</sup></p>";
  } else {
    trichange.style.backgroundColor = "white";
    sin.innerHTML = "<p>sin</p>";
    cos.innerHTML = "<p>cos</p>";
    tan.innerHTML = "<p>tan</p>";
    csc.innerHTML = "<p>csc</p>";
    sec.innerHTML = "<p>sec</p>";
    cot.innerHTML = "<p>cot</p>";
  }
  trichange_event = !trichange_event;
});
trihyp.addEventListener("click", (e) => {
  if (!trihyp_event) {
    trihyp.style.backgroundColor = "#16b2eb7d";
    sin.innerHTML = "<p>sinh</p>";
    cos.innerHTML = "<p>cosh</p>";
    tan.innerHTML = "<p>tanh</p>";
    csc.innerHTML = "<p>csch</p>";
    sec.innerHTML = "<p>sech</p>";
    cot.innerHTML = "<p>coth</p>";
  } else {
    trihyp.style.backgroundColor = "white";
    sin.innerHTML = "<p>sin</p>";
    cos.innerHTML = "<p>cos</p>";
    tan.innerHTML = "<p>tan</p>";
    csc.innerHTML = "<p>csc</p>";
    sec.innerHTML = "<p>sec</p>";
    cot.innerHTML = "<p>cot</p>";
  }
  trihyp_event = !trihyp_event;
});

sin.addEventListener("click", (e) => {
  console.log(e.target.innerText);
  if (!sin_event) {
    sin_event = true;
    lastOperation = e.target.innerText;
    mathOperation();

    display1El.innerText = e.target.innerText + dis2Num;
    display2El.innerText = result;
    dis2Num = result;
  }
});
cos.addEventListener("click", (e) => {
  console.log(e.target.innerText);
  if (!cos_event) {
    cos_event = true;
    lastOperation = e.target.innerText;
    mathOperation();

    display1El.innerText = e.target.innerText + dis2Num;
    display2El.innerText = result;
    dis2Num = result;
  }
});
tan.addEventListener("click", (e) => {
  console.log(e.target.innerText);
  if (!tan_event) {
    tan_event = true;
    lastOperation = e.target.innerText;
    mathOperation();

    display1El.innerText = e.target.innerText + dis2Num;
    display2El.innerText = result;
    dis2Num = result;
  }
});

csc.addEventListener("click", (e) => {
  console.log(e.target.innerText);
  if (!csc_event) {
    csc_event = true;
    lastOperation = e.target.innerText;
    mathOperation();
    display1El.innerText = e.target.innerText + dis2Num;
    display2El.innerText = result;
    dis2Num = result;
  }
});
sec.addEventListener("click", (e) => {
  if (!sec_event) {
    sec_event = true;
    lastOperation = e.target.innerText;
    mathOperation();

    display1El.innerText = e.target.innerText + dis2Num;
    display2El.innerText = result;
    dis2Num = result;
  }
});
cot.addEventListener("click", (e) => {
  if (!cot_event) {
    cot_event = true;
    lastOperation = e.target.innerText;
    mathOperation();
    display1El.innerText = e.target.innerText + dis2Num;
    display2El.innerText = result;
    dis2Num = result;
  }
});

trigonometry.addEventListener("click", (e) => {
  if (trigonometry_event) {
    document.getElementsByClassName("block")[0].style.display = "none";
  } else {
    document.getElementsByClassName("block")[0].style.display = "block";
  }
  trigonometry_event = !trigonometry_event;
});
fn.addEventListener("click", (e) => {
  if (block2_event) {
    document.getElementsByClassName("block2")[0].style.display = "none";
  } else {
    document.getElementsByClassName("block2")[0].style.display = "block";
  }
  block2_event = !block2_event;
});

one_divide.addEventListener("click", (e) => {
  if (!one_divide_event) {
    one_divide_event = true;
    lastOperation = e.target.innerText;
    mathOperation();
    display1El.innerText = "1" + "/" + dis2Num;
    display2El.innerText = result;
    console.log("after" + display2El.innerText);
    dis2Num = result;
  }
});

fact.addEventListener("click", (e) => {
  if (!fact_event) {
    fact_event = true;
    lastOperation = e.target.innerText;
    mathOperation();
    display1El.innerText = dis2Num + "" + "!";
    display2El.innerText = result;
    console.log("after" + display2El.innerText);
    dis2Num = result;
  }
});

square.addEventListener("click", (e) => {
  if (!square_event) {
    two_rest_event = true;
    lastOperation = e.target.innerText;
    mathOperation();
    console.log(lastOperation);
    if (lastOperation === 'x2') {
      display1El.innerHTML = `<p>${dis2Num}<sup>2</sup></p>`
    } else {
      display1El.innerHTML = `<p>${dis2Num}<sup>3</sup></p>`
    }

    display2El.innerText = result;
    console.log("after" + display2El.innerText);
    dis2Num = result;
  }
});

sqrt.addEventListener("click", (e) => {
  console.log(e.target.innerText);
  if (!sqrt_event) {
    sqrt_event = true;
    lastOperation = e.target.innerText;
    mathOperation();
    if (lastOperation === '2√x') {
      display1El.innerHTML = `<p><sup>2</sup>√${dis2Num}</p>`
    } else {
      display1El.innerHTML = `<p><sup>3</sup>√${dis2Num}</p>`
    }

    display2El.innerText = result;
    // console.log("after" + display2El.innerText);
    dis2Num = result;
  }
});

base10.addEventListener("click", (e) => {
  if (!b_ten) {
    b_ten = true;
    lastOperation = e.target.innerText;
    console.log("e value " + e.target.innerText);
    mathOperation();
    display1El.innerText = lastOperation + dis2Num + "";
    console.log(result);
    display2El.innerText = result;
    console.log("after" + display2El.innerText);
    dis2Num = result;
  }
});

log10.addEventListener("click", (e) => {
  if (!log) {
    log = true;
    lastOperation = e.target.innerText;
    const operationName = e.target.innerText;
    mathOperation();
    console.log(result);
    display1El.innerText = dis2Num + "" + lastOperation;
    display2El.innerText = result;
    dis2Num = result;
  }
});

ln.addEventListener("click", (e) => {
  if (!lne) {
    lne = true;
    lastOperation = e.target.innerText;
    mathOperation();
    console.log(result);
    if (lastOperation === 'ln') {
      display1El.innerText = dis2Num + "" + lastOperation;
    } else {
      display1El.innerText = "e^" + dis2Num;
    }
    display2El.innerText = result;
    dis2Num = result;
  }
});
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
    haveDot = false;
    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
  });
});
const clearVar = (name = "") => {
  dis1Num += dis2Num + " " + name + " ";
  display1El.innerText = dis1Num;
  display2El.innerText = "";
  dis2Num = "";
  tempResultEl.innerText = result;
};

const mathOperation = () => {
  if (lastOperation === "log") {
    // if (!dis2Num) return;
    console.log("disp2" + dis2Num);
    result = Math.log10(dis2Num);
  } else if (lastOperation === "ln" || lastOperation === 'e^x') {
    // console.log('last operation'+lastOperation)
    if (!dis2Num) return;
    if (lastOperation === 'ln') {
      result = Math.log(dis2Num);

    } else {
      result = Math.exp(dis2Num);
    }

  } else if (lastOperation === "10x" || lastOperation === "2x") {
    console.log("lastopearation in res" + lastOperation);
    if (!dis2Num) return;
    if (lastOperation === '10x') {
      result = Math.pow(10, parseFloat(dis2Num));
    } else {
      result = Math.pow(2, parseFloat(dis2Num));
    }

  } else if (lastOperation === "xy") {
    result = Math.pow(parseFloat(dis1Num), parseFloat(dis2Num));
  } else if (lastOperation === "2√x" || lastOperation === "3√x") {
    if (lastOperation === '2√x') {
      result = Math.sqrt(dis2Num);
    } else {
      result = Math.cbrt(dis2Num);
    }

  } else if (lastOperation === "x2" || lastOperation === 'x3') {
    if (lastOperation === 'x2') {
      result = Math.pow(parseFloat(dis2Num), 2);
    } else {
      result = Math.pow(parseFloat(dis2Num), 3);
    }

  } else if (lastOperation === "n!") {
    result = factorial(parseFloat(dis2Num));
  } else if (lastOperation === "1/x") {
    result = 1 / parseFloat(dis2Num);
  } else if (
    lastOperation === "sin" ||
    lastOperation === "sin -1" ||
    lastOperation === "sinh"
  ) {
    if (!dis2Num) return;

    if (lastOperation === "sin -1") {
      result = Math.asin(dis2Num);
    } else if (lastOperation === "sinh") {
      result = Math.sinh(dis2Num);
    } else {
      result = Math.sin(dis2Num);
    }
    if(degree_event){
      result=dis2Num*(Math.PI/180.0)
    }
    // console.log("res"+result);
    sin_event = false;
  } else if (
    lastOperation === "cos" ||
    lastOperation === "cos -1" ||
    lastOperation === "cosh"
  ) {
    if (!dis2Num) return;

    if (lastOperation === "cos -1") {
      result = Math.acos(dis2Num);
    } else if (lastOperation === "cosh") {
      result = Math.cosh(dis2Num);
    } else {
      result = Math.cos(dis2Num);
    }
    if(degree_event){
      result=dis2Num*(Math.PI/180.0)
    }
    // console.log("res"+result);
    cos_event = false;
  } else if (
    lastOperation === "tan" ||
    lastOperation === "tan -1" ||
    lastOperation === "tanh"
  ) {
    if (!dis2Num) return;
    if (lastOperation === "tan -1") {
      result = Math.atan(dis2Num);
    } else if (lastOperation === "tanh") {
      result = Math.tanh(dis2Num);
    } else {
      result = Math.tan(dis2Num);
    }
    if(degree_event){
      result=dis2Num*(Math.PI/180.0)
    }
    // console.log("res"+result);
    tan_event = false;
  } else if (
    lastOperation === "csc" ||
    lastOperation === "csc -1" ||
    lastOperation === "csch"
  ) {
    if (!dis2Num) return;

    if (lastOperation === "csc -1") {
      result = 1 / Math.asin(dis2Num);
    } else if (lastOperation === "csch") {
      result = 1 / Math.sinh(dis2Num);
    } else {
      result = 1 / Math.sin(dis2Num);
    }
    if(degree_event){
      result=dis2Num*(Math.PI/180.0)
    }
    // console.log("res"+result);
    csc_event = false;
  } else if (
    lastOperation === "sec" ||
    lastOperation === "sec -1" ||
    lastOperation === "sech"
  ) {
    if (!dis2Num) return;

    if (lastOperation === "sec -1") {
      result = 1 / Math.acos(dis2Num);
    } else if (lastOperation === "cosh") {
      result = 1 / Math.cosh(dis2Num);
    } else {
      result = 1 / Math.cos(dis2Num);
    }
    if(degree_event){
      result=dis2Num*(Math.PI/180.0)
    }
    // console.log("res"+result);
    sec_event = false;
  } else if (
    lastOperation === "cot" ||
    lastOperation === "cot -1" ||
    lastOperation === "coth"
  ) {
    if (!dis2Num) return;
    if (lastOperation === "cot -1") {
      result = 1 / Math.atan(dis2Num);
    } else if (lastOperation === "coth") {
      result = 1 / Math.tanh(dis2Num);
    } else {
      result = 1 / Math.tan(dis2Num);
    }
    if(degree_event){
      result=dis2Num*(Math.PI/180.0)
    }
    // console.log("res"+result);
    cot_event = false;
  } else if (lastOperation === "pie") {
    console.log("dis2" + dis2Num);
    if (dis2Num) {
      result = parseFloat(dis2Num) * Math.PI;
    }
    result = Math.PI;
  } else if (lastOperation === "e") {
    console.log("dis2" + dis2Num);
    if (dis2Num) {
      result = parseFloat(dis2Num) * Math.E;
    }
    result = Math.E;
  } else if (lastOperation === "|x|") {
    result = Math.abs(dis2Num);
  } else if (lastOperation === "floor") {
    result = Math.floor(dis2Num);
    haveDot = false;
  } else if (lastOperation === "ceil") {
    result = Math.ceil(dis2Num);
    haveDot = false;
  } else if (lastOperation === "dms") {
    let d = Math.floor(dis2Num);
    let minfloat = (dis2Num - d) * 60;
    let m = Math.floor(minfloat);
    let secfloat = (minfloat - m) * 60;
    let s = Math.round(secfloat);
    if (s == 60) {
      m++;
      s = 0;
    }
    if (m == 60) {
      d++;
      m = 0;
    }
    result = "" + d + ":" + m + ":" + s;
    //  return ("" + d + ":" + m + ":" + s);
  }
};

const factorial = (num) => {
  if (num == 1) return num;
  return (num = num * factorial(num - 1));
};

equalEl.addEventListener("click", () => {
  haveDot = false;
  if (power_event) {
    if (lastOperation === 'xy') {
      result = Math.pow(dis1Num, dis2Num);
      console.log("res" + result)
      display2El.innerText = result;
      display1El.innerHTML = `<p>${dis1Num}<sup>${dis2Num}</sup></p>`
      power_event = false;
      return;
    } else {
      result = Math.exp(1 / dis2Num * Math.log(dis1Num));
      console.log("res" + result)
      display2El.innerText = result;
      display1El.innerHTML = `<p><sup>${dis2Num}</sup>√${dis1Num}</p>`
      power_event = false;
      return;
    }

  }
  display1El.innerText = dis2Num;
  result = eval(dis2Num);
  display2El.innerText = result;
  dis2Num = result;
  dis1Num = "";
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
  sin_event = false;
  cos_event = false;
  tan_event = false;
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
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
    clickOperation(e.key);
  } else if (e.key === "*") {
    clickOperation("x");
  } else if (e.key == "Enter" || e.key === "=") {
    clickEqual();
  } else if (e.key == "Backspace") {
    lastentryRemove();
  } else if (e.key == "Delete") {
    allremove();
  }
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
