let fruits = ["apple", "banana", "cherry", "date","elderberry"]

let numbers = [1,2,3,4,5]
//left to right array starts at 0, 1,2,3,4,5 
//right to left array starts at -1,-2,-3,-4
console.log(numbers.at(-4))
console.log(fruits.length)
console.log(fruits[fruits.length-1])//gets the last item in an array

//using push method causes a destructive array
//using spread creates a new array without destructing the previous one
let newfruits = ["lemon", ...fruits, "kiwi"] 
console.log(newfruits)



//looping 
let num =[20,10,30,40]
let counter = 0
while(counter < num.length){
    console.log ("hi")
    counter++ //output hi 5 times starts from 0
}


//for loop
//for (init, condition, increment){
//code to execute
//}
let list= [30,40,50,60]
//for(let i=0; i<5; i++){
    //console.log(list)
//}


//for of 
for (let li of list){
    console.log(li)
}

//array iteration
//forEach
let nums = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]
nums.forEach(num =>{
    console.log(num)
})

//map
 let newNums = nums.map (num =>{
    return num**2})
    console.log(...newNums)
    
 

 //filter
 // returns all the element that match a specified condition


 //find
 //return the first element that meets the criteria

 //reduce
 

