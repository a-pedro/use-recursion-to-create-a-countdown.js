// Only change code below this line
function countdown(n){
  if (n <= 0) {
return [];
  } else {
    let array = countdown ( n - 1 ); ;
  array.unshift(n);
    return array;
  }
  
}
// Only change code above this line
console.log(countdown(10))



