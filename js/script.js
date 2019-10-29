//Week 5 cohort 18 Generation
console.log("Generation Cohort 18");
const PI_NUMBER = 3.1416;

let generation = 18;
let graduated = false;
let ticket = 9.00;
let grade = 'A';

let undefinedVar = undefined;
let nanVar = NaN;
let wayBehind = -Infinity;
let wayFar = Infinity;

let number1 = Number(prompt("Enter a number 1:"));
let number2 = Number(prompt("Enter a number 2:"));

let age = Number(prompt("Enter your age:"));
let dayWeek = prompt("Enter a day of the week:");

switch(dayWeek){
       case "monday": 
            console.log("Lazy"); 
            break;
       case "tuesday": 
            console.log("Terrible"); 
            break;
       case "wednesday": 
            console.log("Belly of the week"); 
            break;
       case "thursday": 
            console.log("Jueveves"); 
            break;
       case "friday": 
            console.log("Beviernes"); 
            break;
}

//Functions
const Resta = function(n1, n2){
    return n1-n2;
}

const Multiplicacion = (n1, n2)=>{
    return n1*n2;
}

const Cuadrado = (n)=>{
    return n*n;
}

function isOlder(age){
    let mensaje = "";
    if(age>=18){
       return true;
    }else{
       return false;
    }
}

function Sum(n1, n2){
    return n1 + n2;
}

function pow(base, exponent){
    let result =1;
    for(i=0; i<exponent;i++){
        result= result*base;
    }
    return result;
}



console.log(number1 + "+" + number2 + "=" + (number1+number2));
console.log(number1 + "+" + number2 + "=" + Sum(number1, number2));
console.log(number1 + "-" + number2 + "=" + Resta(number1, number2));
console.log(number1 + "*" + number2 + "=" + Multiplicacion(number1, number2));
console.log(number1 + "^" + number2 + "=" + (Cuadrado(number1, number2)));
console.log(isOlder(age));
console.log(number1 + "^" + number2 + "=" + (pow(number1, number2)));