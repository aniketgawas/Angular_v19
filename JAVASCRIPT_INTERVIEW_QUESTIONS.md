# JavaScript Interview Questions (Real-World Focused)

This document contains **practical JavaScript interview questions** focused on
**core language concepts, debugging, performance, and real production issues**.

---

## 📌 JavaScript Fundamentals

1. What are the different data types in JavaScript?
2. Difference between `var`, `let`, and `const`.
3. What is hoisting?
4. What is scope? Explain global, function, and block scope.
5. What is the difference between `==` and `===`?
6. What are truthy and falsy values?
7. What is type coercion?
8. What is immutability and why is it important?

---

## 📌 Execution Context & Closures

1. What is the execution context?
2. Explain the call stack.
3. What is a closure?
4. Give a real-world use case of closures.
5. Why do closures sometimes cause memory leaks?
6. What is lexical scope?
7. How does JavaScript resolve variable lookups?

---

## 📌 Asynchronous JavaScript (Very Important)

1. What is synchronous vs asynchronous code?
2. What is the event loop?
3. What is the callback queue and microtask queue?
4. Difference between `setTimeout`, `setImmediate`, and `requestAnimationFrame`.
5. Why are promises better than callbacks?
6. What happens if a promise is never resolved or rejected?
7. How does `async/await` work internally?
8. What happens if you forget `await`?

---

## 🔥 Promises & Async Bugs (Real-World)

1. Why does `console.log` inside a `then()` run after outer logs?
2. Why does `Promise.all` fail when one promise rejects?
3. Difference between `Promise.all`, `allSettled`, `race`, and `any`.
4. How do you cancel a promise?
5. Why does `forEach` not work with `async/await`?
6. How do you handle sequential vs parallel API calls?
7. What happens if an async function throws an error?

---

## 📌 Functions & Objects

1. What is the difference between function declaration and expression?
2. What is an arrow function?
3. How does `this` behave in arrow functions?
4. What is `bind`, `call`, and `apply`?
5. What happens when a method is passed as a callback?
6. How do you deep clone an object?
7. Difference between shallow and deep copy.

---

## 🔥 Common JavaScript Bugs (Interview Favorites)

1. Why does this log `undefined`?
2. Why does this loop print the same value?
3. Why does `this` become undefined?
4. Why does mutating an array affect another variable?
5. Why does `setTimeout` inside a loop behave unexpectedly?
6. Why do event listeners fire multiple times?
7. Why does removing an event listener not work?

---

## 📌 Arrays & Functional Programming

1. Difference between `map`, `filter`, and `reduce`.
2. When should you use `reduce`?
3. Difference between `forEach` and `map`.
4. What is immutability in arrays?
5. How do you remove duplicates from an array?
6. How do you flatten an array?
7. How do you sort numbers correctly in JavaScript?

---

## 📌 Prototypes & Classes

1. What is the prototype chain?
2. Difference between classical and prototypal inheritance.
3. How does `class` work under the hood?
4. What is `__proto__`?
5. How does method overriding work?
6. When should you use inheritance vs composition?

---

## 📌 Memory Management & Performance

1. How does garbage collection work?
2. What causes memory leaks in JavaScript?
3. How do closures cause memory leaks?
4. What happens if you keep references to DOM elements?
5. How do you optimize large loops?
6. What is debouncing and throttling?
7. How do you prevent unnecessary re-renders?

---

## 📌 Browser & DOM

1. Difference between `event.target` and `event.currentTarget`.
2. What is event bubbling and capturing?
3. How does `preventDefault` work?
4. What is event delegation?
5. Why is event delegation more efficient?
6. How do you remove event listeners properly?

---

## 📌 Modules & Tooling

1. Difference between CommonJS and ES Modules.
2. What is tree shaking?
3. What is bundling?
4. What is transpilation?
5. Difference between `defer` and `async` script loading.

---

## 📌 Error Handling

1. Difference between `throw` and `reject`.
2. How does `try/catch` work with async/await?
3. What happens if an error is not caught?
4. How do you create custom errors?

---

## 🏆 Senior-Level JavaScript Questions

1. Explain the event loop with a real example.
2. Debug a memory leak in a large app.
3. Design a retry mechanism for API calls.
4. Explain race conditions in JavaScript.
5. How would you throttle API calls globally?
6. Explain how JS handles concurrency with a single thread.

---

## 💡 Practical Coding Challenges

- Implement debounce and throttle
- Fix `this` binding bug
- Debug an async loop issue
- Fix event listener memory leak
- Refactor callback-based code to async/await

---

## ✅ What Interviewers Look For

- Strong fundamentals
- Ability to reason about async code
- Debugging mindset
- Performance awareness
- Understanding of edge cases

---

📌 **Tip:**  
If you can explain *why* JavaScript behaves the way it does, not just *how*, you’re already ahead of most candidates.
