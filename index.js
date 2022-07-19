// console.log("Hello World");


// Values and Variabes

// var myName = 'Hassan Shabbir';
// var myAge = 26;
// console.log('My Name is '+ myName+ ' and age is '+myAge);


//Data Types 

// var myName = 'Hassan Shabbir';
// var myAge = 26;
// console.log('My Name is '+ myName+ ' and age is '+myAge);
// console.log(typeof(myName))
// console.log(typeof(myAge))

// var iAmHassan = true;
// console.log(iAmHassan)
// console.log(typeof(iAmHassan))

//Interview Question 1
// null vs undefined
// null is value, undefined is datatype

// Interview Question 2
// Nan is the property of global object


// Expressions And Operatiors



// 4 challenge
// Q1) what is the output of 3**3
// solution
// console.log(3**3)

//Q2) swap 2 numbers
// var a = 5;
// var b =10;

// var c = b;
// b = a;
// a = c;
// console.log("The value of a = "+ a);
// console.log("The value of b = "+ b);

// Q3) swap 2 number without using 3rd var
// var a = 5;
// var b =10;

// a = a+b;
// b = a-b;
// a = a-b;
// console.log("The value of a = "+ a);
// console.log("The value of b = "+ b);

// interview question
// what is the difference between == vs ===?
// Ans) === check the type also but == only compare the value 

// Control Statement & Loops
//  If Else
// var tomr = "rain"
// if(tomr == "rain"){
//     console.log("Take a Raincoat");
// }
// else{
//     console.log("No need to take a raincoat");
// }

// var year = 2020;
// if(year % 4 === 0){
//     if(year%100 === 0){
//         if(year % 400 ===0 ){
//             console.log("The year "+ year + " is a leap year");
//         }else{
//             console.log("The year "+ year + " is not a leap year");
//         }
//     }
//     else{
//         console.log("The year "+ year + " is a leap year");
//     }
// }else{
//     console.log("The year "+ year + " is not a leap year");
// }

// Ternary operator
// var age=17;
// console.log((age >= 18) ? "you can vote" : "you cannot vote");

// Switch Statement
// var area = "circle";
// var PI = 3.142, l=5, b=4, r=3;
// switch(area){
//     case 'circle':
//         console.log("Its Circle");
//         break;
//     case 'triangle':
//         console.log("Its Triangle");
//         break;
//     case 'rectangle':
//         console.log("Its Rectangle");
//         break;
//     default:
//         console.log("please enter valid data");
// }

// While Loop 
// var num = 0;
// while(num <= 10){
//     console.log(num);
//     num++;
// }

// Do While 
// var num = 0;
// do {
//     console.log(num);
//     num++;
// }while(num<=10);

// For Loop 
// for(var num=0; num<=10; num++){
//     console.log(num);
// }

// Challenge
// var table = 9;
// for(var mul =1;mul<=10; mul++){
//     console.log(table+" * "+mul+" = "+ table*mul);
// }

// function sum(){
//     var a =10, b=20;
//     var total= a+b;
//     console.log("total="+total);
// }

// sum()


// ECMA Script 
// LET vs CONST vs VAR 

// var myName = "Hassan";
// console.log(myName);

// myName = 'Mughal';
// console.log(myName);

// let myName = "Hassan";
// console.log(myName);

// myName = 'Mughal';
// console.log(myName);

// const myName = "Hassan";
// console.log(myName);

// myName = 'Mughal';
// console.log(myName);

// Template Literals
// for(let num=1; num<=10; num++){
//     let tableOf = 12;
//     console.log(`${tableOf} * ${num} = ${tableOf*num}`);
// }


//  Default Parameters

// array function

// Array in JS
// var myFriends = ['Hassan', 'Ahmed', 'Usama', true, 52];
// console.log(myFriends[1]);


// Array Length
// console.log(myFriends.length);

// var myFriends = ['Hassan', 'Ahmed', 'Usama'];
// for loop
// for(var i=0; i<myFriends.length; i++){
//     console.log(myFriends[i]);
// }

// for in loop
// for(let elements in myFriends){
//     console.log(myFriends[elements]);
// }

// for of loop
// for(let elements of myFriends){
//     console.log(elements);
// }

// myFriends.forEach(function(elements, index, array){
//     console.log(elements);
// });

// var myFriends = ['Hassan', 'Ahmed', 'Usama'];
// console.log(myFriends.indexOf("Hassan"));

// const prices = [200, 300, 350, 400, 450, 500, 600];
// const findElem = prices.find((currVal) => {
//     return currVal > 400;
// });

// console.log(findElem);

// const prices = [200, 300, 350, 400, 450, 500, 600];

// const newPriceTag = prices.filter((elem, index) => {
//     return elem < 400;
// });
// console.log(newPriceTag);


// const months = ['March', 'Jan', ' Feb', 'Dec', 'Nov'];
// console.log(months.sort());

// const animals = ['pigs', 'goats', 'sheep'];
// animals.push('chicken');
// console.log(animals);

// const animals = ['pigs', 'goats', 'sheep'];
// animals.unshift('chicken');
// console.log(animals);

//  const plants = ['brocoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
//  console.log(plants);
//  console.log(plants.pop());
//  console.log(plants);

// console.log(plants);
// console.log(plants.shift());
// console.log(plants);


// Challenge 
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// Add december to end
// const newMonth = months.splice(months.length,0,"Dec")
// console.log(months);

// return value of splice method
// const newMonth = months.splice(months.length,0,"Dec")
// console.log(newMonth); // return empty array cuz it takes deleted elements


// update march to March
// const indexOfMonth = months.indexOf('march');
// if(indexOfMonth !== -1){
//     const updateMonth = months.splice(indexOfMonth,1,'March')
// }
// else{
//     console.log('No such data found');
// }

// console.log(months);

// delete the june
// const indexOfMonth = months.indexOf('June');
// if(indexOfMonth !== -1){
//     const updateMonth = months.splice(indexOfMonth,1)
// }
// else{
//     console.log('No such data found');
// }
// console.log(months);


