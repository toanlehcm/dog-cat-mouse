var Dog = require('./dog');
var Cat = require('./cat'); 
var Mouse = require('./mouse');

// var dog = new Dog('Tom');
// var tom = new Cat();
// dog.eat(tom);
// dog.sayHi();

var cat = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog('bobabob');

try {
    cat.eat(dog);
} catch (e) {
   console.log('error while cat eating a dog'); 
}

cat.eat(mouse);
console.log(cat);
