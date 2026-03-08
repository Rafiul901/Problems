//Build the Largest Number Finder

function largestOfAll(arr){
let result =[]

for(let i=0; i<arr.length; i++){
    let max = arr[i][0];

    for(let j=1; j<arr[i].length; j++){
        if(arr[i][j]> max){
            max=arr[i][j]
        }
    }
    result.push(max)
}
return result
}
// console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

///Build a First Element Finder
function findElement(arr,func){
    for(let i=0; i<arr.length; i++){
        if(func(arr[i])){
            return arr[i]
        }
    }
    return undefined
}
// console.log(findElement([1, 3, 5, 8], num => num % 3 === 0));

//Implement the Slice and Splice Algorithm

function spliceOf(arr1,arr2,i){
    let result =arr2.slice();

    result.splice(i,0,...arr1);

    return result
}
// console.log(spliceOf([1, 2, 3], [4, 5], 1));

//Build a Gradebook App

function getAverage(scores){
    let total = 0;

    for(let score of scores){
        total +=score;
    }
    return total/scores.length;

}

function getGrade(score){
    score= Number(score);
if(score === 100){
    return 'A+'
}
else if(score >=90){
    return 'A'
}
else if(score >=80){
    return 'B'
}
else if(score >=70){
    return 'C'
}
else if(score >=60){
    return 'D'
}
else return 'F'
}

function hasPassingGrade(score){
    return getGrade(score) !== "F"
}

function studentMsg(scores,studentScore){
    const average = getAverage(scores);
    const grade = getGrade(studentScore);
const passed = hasPassingGrade(studentScore);


if (passed) 
    { return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
} else 
    { return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
 } 
}

// console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));

//Build a Title Case Converter
 
function titleCase(str){
  return str.split(" ").map(word =>
    word[0].toUpperCase()+word.slice(1).toLowerCase()
  ).join(' ')
}

// console.log(titleCase("I'm a little tea pot"))

//Implement a Falsy Remover

function bouncer(arr){
    return arr.filter(Boolean)
}
// console.log(bouncer([7, "ate", "", false, 9]));


//Implement a Unique Sorted Union
function uniqueArray(...arrays){
    let result =[]

    for(let arr of arrays){
        for(let value of arr){
            if(!result.includes(value)){
                result.push(value)
            }
        }
    }
    return result;
}

//Password Generator

function generatePass(n){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().";

    let result ='';

    for(let i=0; i<n; i++){
let randomIndex =Math.floor(Math.random()*chars.length);

result +=chars[randomIndex]
    }

    return result;
}
let password = generatePass(2);
// console.log("generated pass: "+ password);

//Design a Sum All Numbers Algorithm
function sumAll(arr){
    let min =Math.min(arr[0],arr[1]);
    let max =Math.max(arr[0],arr[1]);

    let sum =0;
    for(let i=min; i<=max; i++){
        sum +=i;
    }
    return sum
}
// console.log(sumAll([1,4]));


