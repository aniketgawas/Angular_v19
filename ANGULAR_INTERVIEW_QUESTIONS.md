# Angular Interview Questions (Real-World Focused)

This document contains **practical Angular interview questions** commonly asked in real projects.
The focus is on **RxJS, performance, architecture, debugging, and best practices**.

---

## 📌 Angular Fundamentals

1. What is the difference between `Component` and `Directive`?
2. What are standalone components and why were they introduced?
3. Explain Angular change detection.
4. What is the difference between `ngOnInit` and `constructor`?
5. How does Angular handle dependency injection?
6. What are pure vs impure pipes?
7. What is the purpose of `trackBy` in `*ngFor`?

---

## 📌 RxJS & Observables (High Importance)

1. What is the difference between `Observable` and `Promise`?
2. What is a `Subject`?
3. Difference between:
   - `Subject`
   - `BehaviorSubject`
   - `ReplaySubject`
4. What are cold vs hot observables?
5. What happens if you subscribe multiple times to an HTTP observable?
6. Why should nested subscriptions be avoided?
7. Explain `switchMap`, `mergeMap`, `concatMap`, `exhaustMap`.
8. What is `shareReplay` and when should it be used?
9. Why does `BehaviorSubject` emit immediately on subscribe?
10. How do you cancel an ongoing HTTP request?

---

## 🔥 Debugging & Real-World Problems (Very Important)

1. API calls are happening multiple times on button click. Why?
2. API calls increase as **1 → 2 → 4 → 8**. What is the issue?
3. Component is destroyed but API calls are still running. Why?
4. Using `(click)` works fine, but using `addEventListener` causes issues. Why?
5. Why does using `async` pipe + `subscribe()` cause duplicate calls?
6. Why does subscribing inside a method cause memory leaks?
7. How do you detect subscription leaks?
8. Why does `fromEvent(window, 'resize')` cause performance issues?
9. How can `interval()` cause memory leaks?
10. What happens if you forget to unsubscribe?

---

## 📌 Angular Lifecycle & Cleanup

1. Which lifecycle hook is best for subscriptions?
2. Does Angular automatically unsubscribe observables?
3. What happens if an observable never completes?
4. How does `takeUntil` work?
5. When is `ngOnDestroy` called?
6. How does the `async` pipe handle subscriptions?
7. Difference between manual unsubscribe and `async` pipe.

---

## 📌 Performance & Optimization

1. What is `OnPush` change detection?
2. When should you use `OnPush`?
3. How does `trackBy` improve performance?
4. What is lazy loading?
5. How does Angular handle large lists efficiently?
6. What is zone.js and why is it used?
7. How do you optimize API calls in Angular?

---

## 📌 Routing

1. Difference between `RouterModule.forRoot` and `forChild`
2. What are route resolvers?
3. How do guards work?
4. How to prevent multiple API calls on route change?
5. Difference between `ActivatedRoute.snapshot` and `params`
6. How to handle memory leaks with route params?

---

## 📌 Forms

1. Difference between Template-Driven and Reactive Forms
2. What is `FormBuilder`?
3. How do validators work?
4. How do you create custom validators?
5. What are async validators?
6. How do you handle dynamic forms?

---

## 📌 State Management

1. When should you use a service for state?
2. What problems does NgRx solve?
3. Difference between local state and global state
4. How do you avoid over-engineering with state management?
5. What is unidirectional data flow?

---

## 📌 Testing

1. Difference between unit test and integration test
2. How do you test a service with HTTP calls?
3. How do you mock observables?
4. How do you test subscription cleanup?
5. How do you test a memory leak scenario?

---

## 📌 Architecture & Best Practices

1. Smart vs dumb components
2. When should logic live in services?
3. How do you structure a large Angular app?
4. How do you avoid tight coupling?
5. What are common Angular anti-patterns?

---

## 🏆 Senior-Level Questions

1. Explain a production bug you fixed related to RxJS.
2. How would you design a polling system safely?
3. How do you prevent duplicate API calls?
4. How do you debug performance issues in Angular?
5. How do you enforce best practices across a team?

---

## 💡 Bonus Practical Challenges

- Fix an exponential API call bug
- Fix a memory leak caused by `interval`
- Refactor nested subscriptions
- Convert imperative code to reactive
- Add unit tests to prevent regressions

---

## ✅ What Interviewers Look For

- Clear understanding of RxJS
- Ability to debug real issues
- Clean subscription management
- Performance awareness
- Production mindset

---

📌 **Tip:**  
If you can explain *why* a bug happens — not just how to fix it — you’re already at senior level.
