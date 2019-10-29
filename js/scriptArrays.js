let myArray1= [];
let myArray2= [1, 2.4, 3, true, "5", 'Z'];

let obj = {
    name : "Jose",
    age : 27, 
    weight : 82.2
};

for(let element of myArray2){
    console.log(element);
}

console.log(obj);

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

function getMin(){
    let min=arguments[0];
    for(let i=0; i<arguments.length; i++){
            if(arguments[i]<min){
                min=arguments[i]
            }
        }
    return min;
}

let a =[199,28,323];
console.log(Math.min(10,200,2,-1,22));
console.log(getMin(... a));