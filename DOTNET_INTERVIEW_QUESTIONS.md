# .NET / C# Interview Questions (Real-World Focused)

This document contains **practical .NET and C# interview questions** focused on
**backend fundamentals, performance, concurrency, debugging, and production issues**.

---

## 📌 C# Fundamentals

1. What is the difference between `class` and `struct`?
2. What are value types and reference types?
3. What is boxing and unboxing?
4. Difference between `const`, `readonly`, and `static readonly`.
5. What is immutability in C#?
6. What is `var` and how does it work?
7. Difference between `==` and `.Equals()`.

---

## 📌 Memory Management & GC (Very Important)

1. How does garbage collection work in .NET?
2. What are the different GC generations?
3. What causes memory leaks in .NET?
4. Difference between managed and unmanaged memory.
5. When should you implement `IDisposable`?
6. What happens if you forget to dispose objects?
7. What is a finalizer and when should it be used?

---

## 🔥 Async / Await & Concurrency (High Importance)

1. How does `async/await` work internally?
2. Difference between `Task` and `Thread`.
3. What is the thread pool?
4. What is deadlock and how does it occur?
5. Why does using `.Result` or `.Wait()` cause deadlocks?
6. Difference between `Task.Run` and `Task.Factory.StartNew`.
7. What happens if an async method is not awaited?
8. How do you cancel an async operation?

---

## 📌 ASP.NET Core Fundamentals

1. What is Kestrel?
2. Difference between ASP.NET and ASP.NET Core.
3. What is middleware?
4. Order of middleware execution.
5. What is dependency injection and how is it implemented in ASP.NET Core?
6. Difference between `Singleton`, `Scoped`, and `Transient`.
7. What happens if you inject a scoped service into a singleton?

---

## 🔥 Real-World Debugging Problems

1. API endpoint is called multiple times for one request. Why?
2. Background task keeps running after request completes. Why?
3. Memory usage keeps increasing over time. Why?
4. Async method hangs in production but not locally. Why?
5. Application crashes under load but works fine in dev. Why?
6. Multiple DB calls executed instead of one. Why?
7. Request is slow only in production. Why?

---

## 📌 Entity Framework Core

1. Difference between `IQueryable` and `IEnumerable`.
2. What is lazy loading?
3. What is eager loading?
4. Difference between `Include` and `ThenInclude`.
5. What is the N+1 query problem?
6. How do you optimize EF Core queries?
7. What happens if `DbContext` is not disposed?

---

## 📌 Performance & Scalability

1. How do you improve API performance?
2. What is caching and when should it be used?
3. Difference between in-memory cache and distributed cache.
4. How does async improve scalability?
5. What is connection pooling?
6. What is rate limiting?
7. How do you handle high traffic APIs?

---

## 📌 Multithreading & Synchronization

1. What is race condition?
2. Difference between `lock`, `Monitor`, and `SemaphoreSlim`.
3. What is `async` thread-safety?
4. How do you protect shared resources?
5. Difference between parallelism and concurrency.
6. When should you use `Parallel.ForEach`?

---

## 📌 Logging, Monitoring & Diagnostics

1. Difference between logging and tracing.
2. How do you log exceptions properly?
3. What is structured logging?
4. How do you monitor application health?
5. What tools do you use for debugging production issues?

---

## 📌 Security

1. How does authentication work in ASP.NET Core?
2. Difference between authentication and authorization.
3. What is JWT?
4. How do you secure APIs?
5. What is CORS and why is it needed?
6. How do you prevent SQL injection?

---

## 📌 Architecture & Design Patterns

1. What is SOLID?
2. What is Clean Architecture?
3. Difference between Repository and Unit of Work.
4. When should you NOT use a design pattern?
5. What is CQRS?
6. When is CQRS overkill?

---

## 🏆 Senior-Level .NET Questions

1. Explain a production memory leak you fixed.
2. How do you debug async deadlocks?
3. How do you design a background job safely?
4. How do you version APIs?
5. How do you handle breaking changes?
6. How do you ensure backward compatibility?

---

## 💡 Practical Coding Challenges

- Fix an async deadlock
- Optimize a slow EF Core query
- Fix a memory leak caused by `IDisposable`
- Prevent multiple API calls
- Implement retry logic with exponential backoff

---

## ✅ What Interviewers Look For

- Strong C# fundamentals
- Async/await mastery
- Production debugging mindset
- Performance awareness
- Clean architecture thinking

---

📌 **Tip:**  
If you can explain *why* a .NET issue happens — not just how to fix it — you’re operating at a senior level.
