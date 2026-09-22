function checkMathOperationsForNine(a, b) {
  let sum = a + b;
  let sub = a - b;
  let multi = a * b;
  let division = a / b;
  if(sum === 9 || sub === 9 || multi === 9 || division === 9){
      return "Nine";
  }
  else {
      return "Nein";
  }
  
}
