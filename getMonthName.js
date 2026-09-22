function getMonthName(monthNumber) {
  let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = monthArray[monthNumber - 1];
  return month;

}

// console.log(getMonthName(5));