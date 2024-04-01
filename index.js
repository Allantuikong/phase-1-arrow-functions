// FUNCTION EXPRESSION

const divide = function(a,b){
    return a/b;
}

console.log(divide(2000,100));

// ARROW FUNCTIONS

const square = x => x * x ;
console.log(square(2));

const add = (x,y) => x + y;
console.log(add(5,5));

//PRACTICE
// const sum = (parameter1, parameter2) => {
//     console.log(`Adding ${parameter1}`);
//     console.log(`Adding ${parameter2}`);
//     return parameter1 + parameter2;
// }

// console.log(sum(2,3));

// const nums = [1,2,3,4,5];
// const squares = nums.map(x => x ** 2);

// console.log(squares);
// console.log(nums);
