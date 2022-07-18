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
for(var num=0; num<=10; num++){
    console.log(num);
}

