// for(let i=0;i<10;i++){ //1. Initialization 2. Condition 3. Increment/Decrement
//     console.log(i);

// }


// let i=0
// while(i<=10){
//     console.log(i);
//     i++;
// }

// let i=0
// do{
//     console.log(i);
//     i++;
// }while(i>10)

// let start=+prompt("Enter start of range")
// let end=+prompt("Enter end of range")
// for(let i=start;i<=end;i++){
//     if(i%2==0){
//         console.log(`${i} is even`);
//     }
// else if(i%2!==0){
//     console.log(`${i} is odd`);
// }
// }

// let start=+prompt("Enter start of range")
// let end=+prompt("Enter end of range")
// let i=start

// while(i<=end){
//     if(i%2===0){
//         console.log(`${i} is even`);
//     }
//  if(i%2!==0){
//     console.log(`${i} is odd`);
//     }
// }
// let number=+prompt("Enter a number")
// let start=+prompt("Enter start of range")
// let end=+prompt("Enter end of range")

// for(let i= start;i<end;i++){
//     console.log(`${number} x ${i} = ${number*i}`)
// }

// function display(){
//     console.log("Hello! Iam a function")
// }

// display()

// const display=()=>console.log("Hello! Iam Function") //Arrow Functions / Fat Arrow Function

// display()

// function add(n1,n2){
//     let result=n1+n2
//     console.log(result)
// }

// let num1=+prompt("Enter first number")
// let num2=parseFloat(prompt("Enter second number"))
// add(num1,num2)

// function add(n1=10,n2=20){
//     let result=n1+n2
//     console.log(result)
// }

// add(50)


// function add(n1,n2){
//     let result=n1+n2
//     return result
// }
// let num1=+prompt("Enter number 1")
// let num2=+prompt("Enter number 2")
// let sum=add(num1,num2)
// console.log(sum)

//Make a calculator using functions.
//Take 2 numbers as input
//If user enters 1 add the numbers
//If user enters 2 minus the numbers
//If user enters 3 multiply the numbers
//If user enters 4 divide the numbers
// let num1=+prompt("Enter first number")
// let num2=+prompt("Enter second number")
// let choice=+prompt("Enter 1 to add, 2 to minus, 3 to multiply, 4 to divide")
// function add(n1,n2){
//     let result=n1+n2
//     console.log(result)
// }
// function minus(n1,n2){
//     let result=n1-n2
//     console.log(result)
// }
// function multiply(n1,n2){
//     let result=n1*n2
//     console.log(result)
// }
// function divide(n1,n2){
//     let result=n1/n2
//     console.log(result)
// }
// switch(choice){
//     case 1:
//         add(num1,num2)
//         break;
//     case 2:
//         minus(num1,num2)
//         break;
//     case 3:
//         multiply(num1,num2)
//         break;
//     case 4:
//         divide(num1,num2)
//         break;
//     default:
//         console.log("Invalid Choice")

// }
