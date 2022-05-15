var myName = "Shaza";
var myName = "Medo";

console.log(myName);

let fName = "Jain";
fName = "jphnny";

console.log(fName);

// const constName = "blabla";
// constName = "medo";

// console.log(constName);

function getName() {
  var petName = "catt";
  return petName;
}

//console.log(petName);  //not defined

//Block Scoping

var fullName = "Aly Aly";
if (fullName) {
  const firstName = fullName.split(" ")[0];
  console.log(firstName);  
}

console.log(firstName);  //not de fined
