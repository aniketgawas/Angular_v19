# Coding Interview Problem Statements (Language Agnostic)

This document contains common **logic-based interview problems**.  
These problems can be solved using **any programming language** and focus on  
**efficiency, clarity, and problem-solving skills**.

---

## 🧩 Problem 1: First Largest and Second Largest Number (Single Loop)

### 📌 Problem Statement

Given an array of numbers, find the **largest** and **second largest** numbers  
using **only a single loop**.

Sorting the array is **not allowed**.

---

### 🧠 Example

**Input:**
```
[10, 5, 20, 8, 15]
```

**Output:**
```
Largest: 20
Second Largest: 15
```

---

### 📥 More Examples

| Input          | Output                          |
|----------------|----------------------------------|
| `[1, 2, 3, 4]` | Largest: 4, Second: 3           |
| `[5, 5, 5]`    | Largest: 5, Second: 5           |
| `[7]`          | Not applicable                  |
| `[]`           | Not applicable                  |

---

### 📌 Constraints

- Use **only one loop**
- Do **not** sort the array
- Handle negative numbers
- Handle duplicate values
- Array length may be less than 2

---

### 🎯 Expected Approach (High Level)

- Maintain two variables:
  - `largest`
  - `secondLargest`
- Traverse the array once
- Update both values based on comparisons

---

### ⏱ Complexity Expectation

- Time Complexity: **O(n)**
- Space Complexity: **O(1)**

---

## 🧩 Problem 2: Valid Anagram

### 📌 Problem Statement

Given two strings, determine whether they are **anagrams** of each other.

Two strings are anagrams if they contain the **same characters with the same frequency**,  
but possibly in a different order.

---

### 🧠 Example

**Input:**
```
string1 = "listen"
string2 = "silent"
```

**Output:**
```
true
```

---

### 📥 More Examples

| String 1 | String 2 | Output |
|---------|----------|--------|
| `"rat"` | `"car"`  | false  |
| `"evil"`| `"vile"` | true   |
| `"aab"` | `"aba"`  | true   |
| `"abc"` | `"ab"`   | false  |

---

### 📌 Constraints

- Strings may be empty
- Case sensitivity depends on implementation
- Special characters and spaces may or may not be included
- Length mismatch means not an anagram

---

### 🎯 Expected Approach (High Level)

- If lengths differ, return false
- Count character frequencies and compare
  **OR**
- Sort both strings and compare

---

### ⏱ Complexity Expectation

- Time Complexity: **O(n)**
- Space Complexity: **O(n)**

---

## 🧩 Problem 3: FizzBuzz

### 📌 Problem Statement

Write a program that prints numbers from **1 to N**.

For multiples of:
- **3**, print `"Fizz"`
- **5**, print `"Buzz"`
- **Both 3 and 5**, print `"FizzBuzz"`

Otherwise, print the number itself.

---

### 🧠 Example

**Input:**
```
N = 15
```

**Output:**
```
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz,
11, Fizz, 13, 14, FizzBuzz
```

---

### ⏱ Complexity Expectation

- Time Complexity: **O(n)**
- Space Complexity: **O(1)**

---

## 🧩 Problem 4: Reverse a String (Without Using Built-in Methods)

### 📌 Problem Statement

Given a string, reverse it **without using any built-in reverse methods**.

---

### 🧠 Example

**Input:**
```
"hello"
```

**Output:**
```
"olleh"
```

---

### 📌 Constraints

- Do not use built-in reverse functions
- String may be empty
- String may contain spaces and special characters

---

### 🎯 Expected Approach (High Level)

- Use two pointers (start and end)
- Swap characters until pointers meet

---

### ⏱ Complexity Expectation

- Time Complexity: **O(n)**
- Space Complexity: **O(1)** or **O(n)**

---

## 🧩 Problem 5: First Non-Repeating Character in a String

### 📌 Problem Statement

Given a string, find the **first character that does not repeat**.

If no such character exists, return `null`, `-1`, or an empty value.

---

### 🧠 Example

**Input:**
```
"swiss"
```

**Output:**
```
'w'
```

---

### 📥 More Examples

| Input        | Output |
|-------------|--------|
| `"aabb"`    | None   |
| `"stress"`  | 't'    |
| `"aabccde"` | 'b'    |
| `""`        | None   |

---

### 🎯 Expected Approach (High Level)

- Count frequency of each character
- Traverse string again to find the first unique character

---

### ⏱ Complexity Expectation

- Time Complexity: **O(n)**
- Space Complexity: **O(n)**

---

## 🏁 Interviewer Expectations

- Clear explanation of logic
- Efficient solution without unnecessary operations
- Proper handling of edge cases
- Ability to explain **why** the solution works

---

📌 **Tip:**  
Avoid sorting unless explicitly required — interviewers look for **optimal logic and clarity**.
