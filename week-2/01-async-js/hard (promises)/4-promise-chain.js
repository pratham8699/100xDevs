/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(t);
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(t);
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(t);
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  let ans = 0;
  return wait1(t1)
    .then((value) => {
      ans += value * 1000;
      //   return wait2(t2);
      t2;
    })
    .then((val) => {
      ans += val * 1000;
      //   return wait3(t3);
      //   ans+=
      t3;
    })
    .then((value) => {
      ans += value * 1000;
      return ans;
    });
}

module.exports = calculateTime;
