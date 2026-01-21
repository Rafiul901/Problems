let lunches=[];
function addLunchToEnd(arr,str){
arr.push(str);
console.log(`${str} added to the end of the lunch menu.`)
return arr;
}

function addLunchToStart(arr,str2){
  arr.unshift(str2);
  console.log(`${str2} added to the start of the lunch menu.`)
return arr;
}

function removeLastLunch(arr){
if(arr.length===0){
  console.log("No lunches to remove.");
  return arr;
}


 const str2= arr.pop();
  console.log(`${str2} removed from the end of the lunch menu.`)
return arr;
}

function removeFirstLunch(arr){
if(arr.length ===0){
  console.log("No lunches to remove.");
  return arr;
}
const str2=arr.shift();
console.log(`${str2} removed from the start of the lunch menu.`)
}