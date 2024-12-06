
// const username=document.getElementById('username').value;
// const password=document.getElementById('password').value;
// const button=document.getElementById('btn');


let username="";
let password="";
let female="";
let male="";
let country='';
let textarea="";
let remark='';
let file='';
function changedOne(a,b){
  username=a;
 
  console.log(a,b);
}
function changedTwo(c,b){
  password=c;

  console.log(c,b);
}
function changedThree(d,b){
  female=d;

  console.log(d,b);
}
function changedFour(e,b){
  male=e;

  console.log(e,b);
}
function changedFive(f,b){
  country=f;

  console.log(f,b);
}
function changedSix(g,b){
  textarea=g;

  console.log(g,b);
}

function changedSeven(h,b){
  remark=h;

  console.log(h,b);
}
function changedFile(g,b){
  file=g;

  console.log(g,b);
}
function clickButton(){
  console.log(username);
  console.log(password);
  console.log(female);
  console.log(male);
  console.log(country);
  console.log(textarea);
  console.log(remark);
  console.log(file);
}
