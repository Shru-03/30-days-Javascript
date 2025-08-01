// // A closure allows an inner function to access variables defined in the outer function, even after the outer function has returned.
// // Closures enable:
// // Private variables (data hiding)
// // Stateful functions
// // Module patterns (encapsulation)

// //1. Practical Example: Closure for Data Privacy

// function createBankAccount() {
//   let balance = 1000; // private variable

//   return {
//     deposit(amount) {
//       balance += amount;
//       return balance;
//     },
//     withdraw(amount) {
//       if (amount <= balance) {
//         balance -= amount;
//         return balance;
//       } else {
//         return "Insufficient funds";
//       }
//     },
//     getBalance() {
//       return balance;
//     },
//   };
// }

// const myAccount = createBankAccount();
// console.log(myAccount.deposit(500)); // 1500
// console.log(myAccount.getBalance()); // 1500
// console.log(myAccount.balance); // undefined ❗ (can't access directly)

// // 2. Stateful Functions
// function makeCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = makeCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// // 3. Module Patterns (Encapsulation)

// const UserModule = (function () {
//   let username = "Guest"; // private

//   function login(name) {
//     username = name;
//     console.log("Logged in as", username);
//   }

//   function logout() {
//     username = "Guest";
//     console.log("Logged out");
//   }

//   function getUser() {
//     return username;
//   }

//   // Expose only what’s needed
//   return {
//     login,
//     logout,
//     getUser,
//   };
// })();

// UserModule.login("Shruti");
// console.log(UserModule.getUser()); // "Shruti"
// UserModule.logout();
// console.log(UserModule.getUser()); // "Guest"

// console.log(UserModule.username); // undefined ❌

function createCounters() {
  var counters = [];
  for (var i = 0; i < 3; i++) {
    (function (j) {
      counters.push(function () {
        return j;
      });
    })(i);
  }
  return counters;
}

const [a, b, c] = createCounters();
console.log(a(), b(), c()); // 0 1 2

function memoize(fn) {
  const cache = {};
  return function (x) {
    if (x in cache) {
      return cache[x];
    } else {
      const result = fn(x);
      cache[x] = result;
      return result;
    }
  };
}

const slow = (x) => {
  console.log("Called with", x);
  return x * 2;
};
const fast = memoize(slow);
fast(5);
console.log(fast(6));
