

//***const variable
// const name="Puspa atharu";
// name="puspa"
// console.log(name);

 // ****let variable
// let name1="abc";
// name1="Hari";
// console.log(name1);

// ********primitive datatype**********
// const a=true;
// const b="Puspa"
// const c=13;
// const abc=undefined;
// const symbol=[123]
// const d=null;

// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))
// console.log(typeof(d))
// console.log(typeof (undefined));

// ********non-primitive datatype********

// const arr=[1 , 2,"puspa"] 
// console.log(typeof(arr))


// const obj={
//   name:"puspa",
//   class:13
// }
// console.log(typeof(obj))

// const newfunction= function fun(){
// }
// console.log(typeof newfunction)

// console.log(3+2); //add
// console.log(4-2);//substract
// console.log(3*3);//multiply
// console.log(9/3);//division
// console.log(8%3);//modulus
// increment ++
// decrement--
// post increment 
// pre increment prefix


// condition in javascript
// if condition 
// if else condition
// else if else condition
// switch condition

// let a="5";
// let b=5;
// console.log(a+b);
// console.log(Number(a)+b);

// let a="5";
// let b=5;
// console.log(a + String(b));

// let a=5;
// let b=20;
// console.log(a>b);
// console.log(a<b);
// console.log(a=b);
// console.log(a!=b);
// let a=6;
// let b=10;
// if(a>b){
//   console.log("a is greater than b");
// }

// let a=3;
// let b=1;
// if(a>b){
// console.log("a is greater ")
// }
// else{
//   console.log("b is greater than a")
// }

// let a=10;
// let b=40;
// let c=12;

// if(a>b && a>c){
//   console.log("a is greater")
// }
// else if(b>a && b>c){
//   console.log("b is greater");

// }
// else{
//   console.log("c is greater");
// }

// let temperature = 25;
// let isSummer = true;

// if (isSummer) {
//     if (temperature > 30) {
//         console.log("It's a hot summer day!");
//     } else  {
//         console.log("It's a warm summer day.");
//     }
// } else {
//     console.log("It's not summer.");
// }


// let a=30;
// let b=20;
// let c=40;
// let d=50;
// if(a>b){
//   if(a>c){
//     if(a>d){
//       console.log("a is greater")
//     } else {
//       console.log("d is greater")
//     }
//   } else if(c>d){
//     console.log("c is greater")
//   } else{
//     console.log("d is greater")
//   }
// } else if(b>d){
// console.log("b is greater ")
// }else{
//   console.log("d is greater")
// }


// let a=10;
// let b=12;
// let c=14;
// let d=9;
// let e=18;
// if(a>b&&a>c&&a>d&&a>e){
//  console.log("a is greater")
// }else if(b>c&&b>d&&b>e){
//   console.log("b is greater")
// } else if(c>b&&c>d&&c>e){
//   console.log("c is greater")
// } else if(d>b&&d>c&&d>e){
//   console.log("d is greater")
// }else{
//   console.log("e is greater")
// }

// for(let i=0;i<=10;i++){
//   console.log(i);
// }

// forloop

// for(let i=0;i<=10;i++){
//   if(i%2==0){
//     console.log(i);
//   }
// }

// let abc='';
// for(let i=0;i<=4;i++){
//   for(let j=0;j<=4;j++){
//     abc+='*';
//   }
//   abc+='\n';
// }
// console.log(abc);

// let abc='';
// for(let i=0;i<=4;i++){
//   for(let j=0;j<=4;j++){
    
//     if(i==0||i==4||j==0||j==4){
     
//       abc+='*';
//     }else{
//       abc+=" ";
//     }
//   }
//   abc+='\n';
// }
// console.log(abc);


// let abc='';
// for(let i=0;i<=9;i++){
//   for(let j=0;j<=9;j++){
    
//     if(i==0||i==9||j==0||j==9){
     
//       abc+='*';
//     }else{
//       abc+=" ";
//     }
//   }
//   abc+='\n';
// }
// console.log(abc);


// let abc=""
// for(let i=0;i<=5;i++){
// }
// for(let j=0;j<=5;j++){

//   console.log("*")

// let n=10;
// let abc='';
// for(let i=0;i<n;i++){
//   for(let j=0;j<=i-1;j++){
//     abc+='*';
    
//   }
//   abc+='\n'
// }
// console.log(abc);

// let n=10;
// let abc='';
// for(let i=0;i<=n-1;i++){
//   for(let j=0;j<=i;j++){
//     if(i==0||j==0||i==n-1||i==j){
//       abc+='*';
//     }else{
//       abc+=" ";
//     }
   
//   }
//   abc+='\n'
// }
// console.log(abc);


// let n=10;
// let abc='';
// for(let i=0;i<=n-1;i++){
//   for(let j=0;j<=i;j++){
//     if(i==0||j==0||i==n-1||i==j){
//       abc+='*';
//     }else{
//       abc+=" ";
//     }
   
//   }
//   abc+='\n'
// }
// console.log(abc);


// let n=10;
// let abc='';
// for(let i=0;i<=n-1;i++){
//   for(let j=0;j<=i;j++){
//     if(i==0||j==0||i==n-1||i==j){
//       abc+='*';
//     }else{
//       abc+=" ";
//     }
   
//   }
//   abc+='\n'
// }
// console.log(abc);



// if(a>b){
//   if(a>c){
//     if(a>d){
//       if(a>e){
//         console.log("a is greater")
//       }else{
//         console.log("e is greater")
//       }

//     }else if(d>b){ 
//       if(d>c){
//         if(d>e){
//           console.log("d is greater")
//         }else{
//           console.log("e is greater")
//         }
//       } else if(c>b){
//         console.log("c is greater")
//       }else{
//       console.log("b is greater")
//     }

//   } else if(b>e){
//     if(b>c){

//       console.log("b is greater");
//         } else{
//           console.log("e is greater")
//         }
//     }
//   }
// }