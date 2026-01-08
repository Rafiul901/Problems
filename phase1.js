//1. Check if a number is even or odd
function isEvenOrOdd(num){
if(num%2 ===0){
    return "even";
}
else return "odd"
}

//2. Find the maximum of two numbers
function findMaximum(num1,num2){
    if(num1<num2){
        return num2
    }
    else return num1
}

//3. Find the maximum of three numbers 
function findMaximumOfThree(num1,num2,num3){
return Math.max(num1,num2,num3)
}


//4. Check if a year is a leap year  
function isLeapYear(year){
if(year%400 ===0){
    return true;
}
if(year%100 ===0){
    return false;
}
if(year%4 ===0){
    return true;
}
else return false
}

//5. Print numbers from 1 to N 
function isPrint(n){
for( let i=1; i<=n; i++)
    console.log(i);
}



//6. Print numbers from N to 1 
function isThere(n){
    let number =[]
    for(let i=n; i>=1; i--){
        number.push(i)
    }
    return number
}

// 7. Sum of numbers from 1 to N  
 function sumOfNum(n){
    let sum=0;
    for(let i=1; i<=n;i++){
        sum+=i;
    }
    return sum;
 }


//8. Factorial of a number (loop) 
function factorial (n){
    let factNum =1;
    for(let i=1; i<=n; i++){
        factNum*=i
    }
    return factNum
}


//9. Count digits of a number
function countDigit (n){
let str =n.toString();
return str.length
}

//10. Reverse a number
function reverseNum(n){
    return Number(n.toString().split('').reverse().join(''))
}


//14. Sum of digits 
function sumOfDigits(n){
    let sum =0;
    for(i=1; i<n.length; i++){
       sum+=n(i) 
    }
    return sum;
}
console.log(sumOfDigits(123));