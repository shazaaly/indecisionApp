const multiplier = {
    numbers: [10, 20, 8, 4, 7, 6, 7],
    multiplyBy: 10,
    multiply(numbers, multiply) {
      const result = this.numbers.map((number) => {
        return number * this.multiplyBy;
      });
      return result;
    },
  };
  
  console.log(multiplier.multiply());