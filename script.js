// inline caching
function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`
}

const userData = {
  firstName: 'Nick',
  lastName: 'Watson'
}

findUser(userData)

// hidden classes
function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Animal(1,2);
const obj2 = new Animal(3,4);

obj1.a = 30;
obj1.b = 100;
obj2.b = 30;
obj2.a = 100;

// call stack and memory heap
const number = 610; //allocate memory for number
const string = 'some text'; // allocate memory for a string
const human = { // allocate memory for an object and its values
  first: 'Andrei',
  last: 'Neagoie'
} 