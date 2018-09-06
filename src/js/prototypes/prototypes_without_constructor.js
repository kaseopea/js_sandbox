const greeter = {
  greet() {
    console.log(`### Hi ${this.name}!`);
  }
};

const bob = Object.create(greeter);
const bobProto = Object.getPrototypeOf(bob);
const greeterProto = Object.getPrototypeOf(greeter);
bob.name = 'Bob';

bob.greet();

console.log(greeterProto === Object.prototype);
console.log(bobProto === greeter);