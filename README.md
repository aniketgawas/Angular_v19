🔥 Angular RxJS Re-Subscription Debugging Challenge
📌 Overview

This project demonstrates a classic Angular + RxJS bug caused by re-subscribing to a Subject inside a user action.

The application appears to work correctly at first, but repeated interactions cause the API calls to grow exponentially.

This is a real-world issue commonly seen in Angular applications and is an excellent test of RxJS fundamentals.

🧩 Application Behavior

A Load Data button triggers data loading

Data is fetched from a mock API

Each API response returns a list of items

The UI displays the loaded items in a list