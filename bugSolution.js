function foo(a, b) {
  // Check for falsy values using loose equality
  if (a == 0 || b == 0) {
    return 0;
  } else {
    return a * b;
  }
}

//Alternatively, explicitly check for falsy values:
function foo2(a,b){
    if(!a || !b){
        return 0;
    }else{
        return a*b;
    }
}

console.log(foo(0, 5)); // Correctly returns 0
console.log(foo(5, 0)); // Correctly returns 0
console.log(foo(null, 5)); // Correctly returns 0
console.log(foo(5, false)); // Correctly returns 0
console.log(foo2(0,5)); //Correctly returns 0
console.log(foo2(5,0)); //Correctly returns 0
console.log(foo2(null,5)); //Correctly returns 0
console.log(foo2(5,false)); //Correctly returns 0