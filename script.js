"use strict"

const numbers = []; 

for(let i = 0; i < 21; i++){
    numbers.push(Math.ceil(-10 + Math.random() * ((10 - (-10)) + 1)));
}
console.log(numbers);

for(let i = 0; i <= numbers.length; i++){
    while(numbers[i] < 0){
        if(numbers[i] <= 0){
            numbers.splice(i, 1);
        }
    }
}
console.log(numbers);

for(let i in numbers){
    numbers[i] = numbers[i] ** 2;
}
console.log(numbers);

for(let i = 0; i < numbers.length; i++){
    for(let j = i; j < numbers.length; j++){
        if(numbers[i] > numbers[j]){
            let k = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = k;
        }
    }
}
console.log(numbers);