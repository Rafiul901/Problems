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
    return average = total/scores.length;

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

console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));