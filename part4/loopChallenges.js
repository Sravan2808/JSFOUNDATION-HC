/* 
1.Write a while loop that calculates the sum of all 
numbers from 1 to 5 and stores the result in a variable
named sum
*/

// let sum = 0;
// let i=0;
// while(i<=5){
//     sum+=i;
//     i++;
// }
// console.log(sum);

/*
2.Write a ehile loop that counts down from 5 to 1 and 
stores the numbers in an array named countdown
*/
let j=5;
let countdown = []
while(j>0){
    countdown.push(j);
    j--;
}
console.log(countdown);

/* 
3.Write a do while loop that prompts a useer to enter 
their favourite tea type until they enter stop.
Store each tea type in an array named teaCollection.
*/

// let teaCollection = [];
// let tea = "abc"
// do {
//    tea = prompt(`Enter yout favourite tea (type "stop" to finish)` )
//     if(tea!=="stop"){
//         teaCollection.push(tea);
//     }
// } while (tea != "stop"); 

/*
4.Write a do while loop that adds numbers from 1 to 3
and stores the result in a variable named total 
*/
// let total = 0;
// let k=1;
// do {
//     total += k;
//     k++;
// } while (k<=3);
// console.log(total)

/*
5.Write a for loop that multiplies each element in the
array [2,4,6] by 2 and stores the results in a new 
array named 'multipliedNumbers'
*/
let multipliedNumbers = [];
let numbers = [2,4,6]

for (let i = 0; i < numbers.length; i++) {
    // multipliedNumbers[i] = numbers[i]*2;
    multipliedNumbers.push(numbers[i]*2)
}
console.log(multipliedNumbers);


/*
6.Write a for loop that lists all the cities in the 
array ["Paris","NewYork","Tokyo","London"] and
stores each city in a new array named cityList
*/

let cities = ["Paris","NewYork","Tokyo","London"]
let cityList = [];

for (let c = 0; c < cities.length; c++) {
    const element = cities[c];
    // cityList.push(element) 
    // cityList.shift(element) 
    cityList.unshift(element) 
}
console.log(cityList);


