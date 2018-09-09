/* Function as constructor Prototype */
function Person(name) {
  this.name = name;
}

/* Method in prototype */
Person.prototype.greet = function() {
  return console.warn(`### Hi, mister ${this.name}!`);
};

/* Sandbox */
const alex = new Person("Alex");
const alexProto = Object.getPrototypeOf(alex);
const personProto = Object.getPrototypeOf(Person);

console.warn(alex);
console.log("alex.constructor: ", alex.constructor);
console.log("Person constructor: ", Person.constructor);
// console.warn(`Alex has .name  [${alex.hasOwnProperty('name')}]`);
// console.warn(`Alex has .greet [${alex.hasOwnProperty('greet')}]`);
// console.warn(`[alexProto === Person.prototype] ${alexProto === Person.prototype}`);
// console.warn(`[Prototype of Person.prototype === Object.prototype] ${Object.getPrototypeOf(Person.prototype) === Object.prototype}`);
// console.log(`Prototype of Person is Function.prototype: [${personProto === Function.prototype}]`);

// alex.greet();

// console.log('Prototype of Object.prototype', Object.getPrototypeOf(Object.prototype) === null);
console.log("================================================================");

/* Simple function */
function testFunc() {
  return true;
}

const funcProto = Object.getPrototypeOf(testFunc);

// console.log(testFunc);
// console.log('Prototype of test function = Function.prototype', funcProto === Function.prototype);
