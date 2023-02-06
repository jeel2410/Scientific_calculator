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
      // if (!dis2Num) return;
      console.log( "disp2"+dis2Num);
      result = Math.log10(dis2Num);
    } else if (lastOperation === "ln") {
      console.log(dis2Num);
      if (!dis2Num) return;
      result = Math.log(dis2Num);
    } else if (lastOperation === "10x") {
      if (!dis2Num) return;
      result = Math.pow(10, parseFloat(dis2Num));
    } else if (lastOperation === "xy") {
      result=Math.pow(parseFloat(dis1Num),parseFloat(dis2Num));
    } else if (lastOperation === "sqrt") {
      result = Math.sqrt(dis2Num);
    } else if (lastOperation === "x2") {
      result = Math.pow(parseFloat(dis2Num), 2);
    } else if (lastOperation === "n!") {
      result = factorial(parseFloat(dis2Num));
    } else if (lastOperation === "1/x") {
      result = 1 / parseFloat(dis2Num);
    } else if (lastOperation === "sin" || lastOperation === "sin -1" || lastOperation === "sinh") {
      if (!dis2Num) return;
  
      if(lastOperation === "sin -1") {
        result = Math.asin(dis2Num);
      }else if(lastOperation === "sinh") {
        result = Math.sinh(dis2Num);
      }
      else{
        result = Math.sin(dis2Num);
      }
      // console.log("res"+result);
      sin_event=false;
    } else if (lastOperation === "cos" || lastOperation === "cos -1" || lastOperation === "cosh") {
      if (!dis2Num) return;
  
      if(lastOperation === "cos -1") {
        result = Math.acos(dis2Num);
      } else if(lastOperation === "cosh") {
        result = Math.cosh(dis2Num);
      }
      else{
        result = Math.cos(dis2Num);
      }
      // console.log("res"+result);
      cos_event=false;
    } else if (lastOperation === "tan" || lastOperation === "tan -1" || lastOperation === "tanh") {
      if (!dis2Num) return;
      if(lastOperation === "tan -1") {
        result = Math.atan(dis2Num);
      } else if(lastOperation === "tanh") {
        result = Math.tanh(dis2Num);
      }
      else{
        result = Math.tan(dis2Num);
      }
      // console.log("res"+result);
      tan_event=false;
    } else if (lastOperation === "csc" || lastOperation === "csc -1" || lastOperation === "csch") {
      if (!dis2Num) return;
  
      if(lastOperation === "csc -1") {
        result =1/ Math.asin(dis2Num);
      }else if(lastOperation === "csch") {
        result = 1/Math.sinh(dis2Num);
      }
      else{
        result = 1/Math.sin(dis2Num);
      }
      // console.log("res"+result);
      csc_event=false;
    } else if (lastOperation === "sec" || lastOperation === "sec -1" || lastOperation === "sech") {
      if (!dis2Num) return;
  
      if(lastOperation === "sec -1") {
        result = 1/Math.acos(dis2Num);
      } else if(lastOperation === "cosh") {
        result = 1/Math.cosh(dis2Num);
      }
      else{
        result = 1/Math.cos(dis2Num);
      }
      // console.log("res"+result);
      sec_event=false;
    } else if (lastOperation === "cot" || lastOperation === "cot -1" || lastOperation === "coth") {
      if (!dis2Num) return;
      if(lastOperation === "cot -1") {
        result = 1/Math.atan(dis2Num);
      } else if(lastOperation === "coth") {
        result = 1/Math.tanh(dis2Num);
      }
      else{
        result = 1/Math.tan(dis2Num);
      }
      // console.log("res"+result);
      tan_event=false;
    } else if (lastOperation === "pie") {
      console.log("dis2"+dis2Num);
      if(dis2Num){
        
        result = parseFloat(dis2Num)*Math.PI;
      };
      result=Math.PI;
     
    } else if (lastOperation === "e") {
      console.log("dis2"+dis2Num);
      if(dis2Num){
        
        result = parseFloat(dis2Num)*Math.E;
      };
      result=Math.E;
     
    } else if (lastOperation === "mode") {
      result = Math.abs(dis2Num);
    } else if (lastOperation === "floor") {
      result = Math.floor(dis2Num);
      haveDot=false;
    } else if (lastOperation === "ceil") {
      result = Math.ceil(dis2Num);
      haveDot=false;
    } else if (lastOperation ==='dms'){
      let d = Math.floor (dis2Num);
     let minfloat = (dis2Num-d)*60;
     let m = Math.floor(minfloat);
     let secfloat = (minfloat-m)*60;
     let s = Math.round(secfloat);
     if (s==60) {
       m++;
       s=0;
     }
     if (m==60) {
       d++;
       m=0;
     }
     result="" + d + ":" + m + ":" + s;
    //  return ("" + d + ":" + m + ":" + s);
    }
  };
export default mathOperation;  