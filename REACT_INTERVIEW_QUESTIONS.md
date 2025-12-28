# React Interview Questions (Real-World Focused)

This document contains **practical React interview questions** focused on
**hooks, state management, performance, debugging, and production issues**.

---

## 📌 React Fundamentals

1. What is React and why is it used?
2. Difference between a component and an element.
3. What is JSX and how does it work?
4. What are props?
5. What is state?
6. Difference between controlled and uncontrolled components.
7. What is virtual DOM?

---

## 📌 Hooks (Very Important)

1. What problem do hooks solve?
2. Rules of hooks.
3. Difference between `useState` and `useReducer`.
4. Difference between `useEffect` and lifecycle methods.
5. What happens if you omit the dependency array?
6. What happens if you pass an empty dependency array?
7. Why does `useEffect` run twice in React 18 (Strict Mode)?
8. What is `useRef` used for?

---

## 🔥 Real-World Hooks Bugs (Interview Favorites)

1. API calls increasing on every re-render. Why?
2. Infinite loop caused by `useEffect`. Why?
3. Event listener added multiple times. Why?
4. Stale state inside `useEffect`. Why?
5. State update not reflecting immediately. Why?
6. Memory leak due to missing cleanup. Why?
7. API called twice on component mount. Why?

---

## 📌 State Management

1. When should you lift state up?
2. Difference between local and global state.
3. When should you use Context API?
4. Why is Redux needed?
5. Difference between Redux and Redux Toolkit.
6. What is unidirectional data flow?
7. How do you avoid prop drilling?

---

## 📌 Performance Optimization

1. What is re-render?
2. Why do unnecessary re-renders happen?
3. What is `React.memo`?
4. Difference between `useCallback` and `useMemo`.
5. When should you not use memoization?
6. What is code splitting?
7. How does lazy loading work in React?

---

## 📌 Event Handling & DOM

1. How does event delegation work in React?
2. Difference between synthetic events and native events.
3. Why does `this` behave differently in React?
4. How do you handle forms efficiently?
5. How do you prevent default browser behavior?

---

## 📌 Asynchronous React

1. Where should API calls be made in React?
2. How do you cancel API calls in React?
3. How do you handle loading and error states?
4. What happens if a component unmounts during an API call?
5. How do you prevent race conditions in React?

---

## 📌 React Router

1. Difference between `useParams` and `useSearchParams`.
2. What is lazy route loading?
3. How do you prevent re-fetching data on route change?
4. How do you handle protected routes?
5. How do you clean up side effects on navigation?

---

## 📌 Testing

1. Difference between unit and integration tests.
2. How do you test React components?
3. How do you mock API calls?
4. How do you test hooks?
5. How do you test cleanup logic?

---

## 📌 Architecture & Best Practices

1. Smart vs dumb components.
2. Folder structure best practices.
3. How do you share logic between components?
4. When should logic move out of components?
5. How do you avoid tightly coupled components?

---

## 🏆 Senior-Level React Questions

1. Explain a production bug caused by hooks.
2. How do you debug excessive re-renders?
3. How do you design a scalable React app?
4. How do you prevent memory leaks?
5. How do you handle large forms efficiently?
6. How do you migrate class components to hooks?

---

## 💡 Practical Debugging Challenges

- Fix infinite `useEffect` loop
- Fix duplicate API calls
- Fix stale closure bug
- Fix missing cleanup in event listeners
- Optimize slow component rendering

---

## ✅ What Interviewers Look For

- Strong understanding of hooks
- Ability to debug re-render issues
- Performance awareness
- Clean side-effect management
- Production experience

---

📌 **Tip:**  
If you can explain *why* a React bug happens — not just *how* to fix it — you’re operating at a senior level.
