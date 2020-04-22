
export function Add(numbers) {
    if (numbers == "" || numbers == null) {
      return 0;
    }

    if (numbers.indexOf(",") !== -1) {
      var numberParts = numbers.split(",");
      var sum = 0;
      numberParts.forEach(numberAsString => {
        sum += parseInt(numberAsString);
      })

      return sum;
    }

    return 0
  
}