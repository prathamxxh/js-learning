// JavaScript Promises - Practice & Understanding

// Basic syntax of a Promise
const p = new Promise((resolve, reject) => {
  // async work goes here
});

// resolve(value) → success
// reject(error) → failure



// Example 1: Simple Promise
const a = new Promise((resolve, reject) => {
  resolve("Done");
});

function afterPromise() {
  console.log("after promise");
}

// a.then(afterPromise);



// Example 2: Promise with setTimeout
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("finished");
    }, ms);
  });
}

function afterWait() {
  console.log("this comes after");
}

// wait(2000).then(afterWait);



// .then() → used to handle resolved value
// .catch() → used to handle errors



// Example 3: Promise chaining
Promise.resolve(5)
  .then((num) => num + 3)
  .then((num) => num * 2)
  .then((num) => num - 4)
  .then((num) => console.log(num));



// Callback Hell (problem)
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        // console.log("Done!");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// Promises make this cleaner
// wait(1000)
//   .then(() => wait(1000))
//   .then(() => wait(1000))
//   .then(() => console.log("done"));



// Q1: delay(ms)
// Prints "Done after X ms"
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Done after ${ms} ms`);
      resolve();
    }, ms);
  });
}

// delay(2000);



// Q2: Promise chain
// Start with 5 → +3 → *2 → -4
Promise.resolve(5)
  .then((num) => num + 3)
  .then((num) => num * 2)
  .then((num) => num - 4)
  .then((num) => console.log(num));



// Q3: Sequential tasks
function task(name, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Task ${name} done`);
      resolve();
    }, time);
  });
}

// task("Pratham", 2000);
