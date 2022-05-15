class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  grtGreeting() {
    return `Hi this is  ${this.name}`;
  }

  getDescription() {
    return ` ${this.name} is ${this.age} year(s) old`;
  }
}

const me = new Person("shaza Aly", 55);
// console.log(me.grtGreeting());
// console.log(me.getDescription());

// const him = new Person();
// console.log(him.getDescription(25));

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major; //str to boolean using !
  }

  getDescription() {
    let desc = super.getDescription();
    if (this.hasMajor()) {
      desc = desc + ` Your Grade = ${this.major}`;
    }
    return desc;
  }
}

const std1 = new Student("Medo Medo", 55);
const std2 = new Student("Another Medo", 55, "vwrtj");

// console.log(std1.getDescription());
// console.log(std2.getDescription());

class Traveller extends Person {
  constructor(name, location) {
    super(name);
    this.location = location;
  }

  hasLocation() {
    return !!this.location;
  }

  grtGreeting() {
    let greeting = super.grtGreeting();

    if (this.hasLocation()) {
      greeting = greeting + `from ${this.location}`;
    }
    return greeting;
  }
}

const trv1 = new Traveller("Shaza Aly ");
console.log(trv1.grtGreeting());
