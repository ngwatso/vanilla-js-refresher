// // inline caching
// function findUser(user) {
//   return `found ${user.firstName} ${user.lastName}`
// }

// const userData = {
//   firstName: 'Nick',
//   lastName: 'Watson'
// }

// findUser(userData)

// // hidden classes
// function Animal(x, y) {
//   this.x = x;
//   this.y = y;
// }

// const obj1 = new Animal(1,2);
// const obj2 = new Animal(3,4);

// obj1.a = 30;
// obj1.b = 100;
// obj2.b = 30;
// obj2.a = 100;

// // callstack and memory heap
// const number = 610; //allocate memory for number
// const string = 'some text'; // allocate memory for a string
// const human = { // allocate memory for an object and its values
//   first: 'Andrei',
//   last: 'Neagoie'
// } 

// function subtractTwo(num) {
//   return num - 2;
// }

// function calculate() {
//   const sumTotal = 4 + 5;
//   return subtractTwo(sumTotal)
// }

// calculate()
// // callstack, runs in FIFO style


// // memory leak
// // The more data you add, and don't later remove, the closer you get to memory leaks

// // global variable
// let a = 1;
// let b = 2;
// let c = 3;

// // event listeners
// let element = documant.getElementById('button');
// element.addEventListener('click', onClick());

// // setInterval
// setInterval(() => {
//   // referencing objects...
// })

//fill array with 60000 elements
const list = new Array(60000).join('1.1').split('.');
 
function removeItemsFromList() {
    var item = list.pop();
 
    if (item) {
        removeItemsFromList();
    }
};
 
removeItemsFromList();
