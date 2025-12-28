# Node.js, Express, NestJS & Next.js Interview Questions (Real-World Focused)

This document contains **practical backend and full-stack interview questions**
focused on **debugging, performance, architecture, scalability, and production issues**
across Node.js, Express, NestJS, and Next.js.

---

# 🟢 Node.js Interview Questions

## 📌 Node.js Fundamentals

1. What is Node.js and how does it work internally?
2. What is the event loop?
3. Is Node.js single-threaded?
4. Difference between blocking and non-blocking code.
5. What is libuv?
6. What are streams?
7. Difference between `process.nextTick`, `setImmediate`, and `setTimeout`.

---

## 🔥 Real-World Node.js Bugs

1. Why does CPU usage spike to 100%?
2. Why does the server freeze under load?
3. Why does memory usage keep increasing?
4. Why does an API work locally but timeout in production?
5. Why does `await` inside a loop slow down the app?
6. Why do event listeners fire multiple times?
7. Why does the process crash without error logs?

---

## 📌 Performance & Scalability

1. How does Node.js handle concurrency?
2. What is clustering?
3. When should you use worker threads?
4. How do you handle heavy CPU tasks?
5. What is backpressure?
6. How do you implement rate limiting?

---

# 🟡 Express.js Interview Questions

## 📌 Express Fundamentals

1. What is Express?
2. How does middleware work?
3. Difference between `app.use` and `app.get`.
4. What is the request–response lifecycle?
5. What are error-handling middlewares?
6. How does Express handle async errors?

---

## 🔥 Common Express Debugging Problems

1. API called twice for one request. Why?
2. Request hangs forever. Why?
3. Headers already sent error. Why?
4. Middleware executed multiple times. Why?
5. `req.body` is undefined. Why?
6. CORS works locally but fails in production. Why?

---

## 📌 Express Best Practices

1. How do you structure a large Express app?
2. Where should validation logic live?
3. How do you handle centralized error handling?
4. How do you secure Express APIs?
5. How do you log requests properly?

---

# 🔵 NestJS Interview Questions

## 📌 NestJS Fundamentals

1. What is NestJS?
2. Difference between NestJS and Express.
3. What are modules in NestJS?
4. What are controllers and providers?
5. How does dependency injection work in NestJS?
6. What are decorators?

---

## 🔥 Real-World NestJS Issues

1. Provider instantiated multiple times. Why?
2. Circular dependency error. Why?
3. Request-scoped provider causing performance issues. Why?
4. App starts but routes are not registered. Why?
5. Exception filter not catching errors. Why?

---

## 📌 Guards, Interceptors & Pipes

1. Difference between guards and middleware.
2. What are interceptors used for?
3. How do pipes work?
4. When should you use custom pipes?
5. How do you implement role-based access control?

---

## 📌 NestJS Architecture & Patterns

1. How do you structure a large NestJS app?
2. What is CQRS in NestJS?
3. When is CQRS overkill?
4. How do you handle background jobs?
5. How do you handle transactions?

---

# 🟣 Next.js Interview Questions

## 📌 Next.js Fundamentals

1. What is Next.js?
2. Difference between Next.js and React.
3. What is server-side rendering (SSR)?
4. What is static site generation (SSG)?
5. What is incremental static regeneration (ISR)?
6. What are API routes?

---

## 🔥 Real-World Next.js Bugs

1. API route executed multiple times. Why?
2. Page works locally but fails after build. Why?
3. `window` is undefined error. Why?
4. Hydration mismatch error. Why?
5. API calls happening twice in development. Why?
6. Environment variables not working. Why?

---

## 📌 Rendering Strategies (Very Important)

1. When should you use SSR?
2. When should you use SSG?
3. When should you use ISR?
4. How do you prevent duplicate data fetching?
5. How do you cache API responses?

---

## 📌 Performance & Optimization

1. How does Next.js handle code splitting?
2. What is image optimization?
3. What is edge rendering?
4. How do you reduce bundle size?
5. How do you improve TTFB?

---

# 🔐 Security (All Frameworks)

1. How do you prevent SQL injection?
2. How do you prevent XSS?
3. How do you secure APIs?
4. What is CSRF and how do you prevent it?
5. How do you handle authentication securely?

---

# 🏆 Senior-Level Questions (Cross-Stack)

1. Debug a memory leak in a Node.js app.
2. Design a scalable API architecture.
3. Handle 1M concurrent users — how?
4. Prevent duplicate API calls across frontend and backend.
5. Handle background jobs reliably.
6. Design a logging and monitoring strategy.
7. Explain a production outage you fixed.

---

## 💡 Practical Debugging Challenges

- Fix event loop blocking
- Fix duplicate middleware execution
- Fix memory leak due to listeners
- Fix SSR hydration issue
- Optimize slow API response

---

## ✅ What Interviewers Look For

- Understanding of event-driven architecture
- Debugging mindset
- Performance awareness
- Clean separation of concerns
- Production experience

---

📌 **Tip:**  
If you can explain *why* a Node / Express / Nest / Next issue happens — not just *how* to fix it — you are operating at a senior level.
