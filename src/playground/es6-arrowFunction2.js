const add = (a, b) => {
  return a + b;
};
console.log(add(5, 6));

const user = {
  name: "Andrew",
  cities: ["Cairo", "Alex", "Florida"],
  printPlaces() {
    const cityNames = this.cities.map((city) => {
      return this.name + " lives in : " + city;
    });

    return cityNames;
  },
};
console.log(user.printPlaces());

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
