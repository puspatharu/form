
let first = '';
let opera = null;
let second = "";
let display = document.getElementById("display")

function myfun(a) {
  // console.log(a);
  if (opera == null) {
    first += a;
    display.value = first;
  }
  else {
    second += a;
    display.value += a;
  }

}



function operator(b) {
  display.value += b;
  opera = b;

}

function result() {
  // display.value=eval(display.value);
  display.value = " ";
  let c;
  switch (opera) {
    case "+":
      c = Number(first) + Number(second);
      display.value=c;
      first=c;

      break;
    case "-":
      
      c = first - second;
      display.value=c;
      first=c;
      break;
    case '*':
      c = first * second;
      display.value=c;
      first=c;
      break;
    case '/':
     c = first / second;
     display.value=c;
      first=c;
      ;
      break;
    case '%':
      c = first % second;
      display.value=c;
      first=c;
      break;

    default:
      console.log("wrong entry");
      break;
  }
first=c;
second='';
opera=''

}
function reset() {
  first="";
  second='';
  opera=null;
  display.value = 0;

}



