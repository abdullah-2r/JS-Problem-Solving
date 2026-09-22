function countNumberProperties(numbers) {
      let even = 0;
      let odd = 0;
      let positive = 0;
      let negative = 0;

  for (number of numbers) {
      if(number % 2 === 0){
          even++;
      }
       if(number % 2 !== 0){
           odd++;
      }
       if(number > 0){
          positive++;
      }
       if(number < 0) {
            negative++;

      }
  }
     return {"even":even,"negative":negative,"odd":odd,"positive":positive};
}

