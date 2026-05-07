---
title: "03 - Scaling Up"
date: 2023-10-03
weight: 3
image: "images/chapter3.png"
summary: "When the system grows beyond a single machine. The challenges of distributed consensus and the art of keeping things in sync."
---

# Scaling Up

We had a working system. It was beautiful. It was clean. It was running on a single laptop under my desk. But the world was calling.

## The Traffic Spike

It started with a mention on Hacker News. Then a tweet from a thought leader. Suddenly, our request logs looked like a heart monitor during a sprint.

```text
GET / 200 OK
GET / 200 OK
GET / 503 SERVICE UNAVAILABLE
...
```

The laptop fan was spinning so fast it threatened to achieve lift-off. We needed to scale.

## Horizontal vs. Vertical

We debated the age-old question: do we buy a bigger computer (Vertical), or do we buy *more* computers (Horizontal)?

*   **Vertical Scaling**: Easier to manage, but expensive and has a hard limit.
*   **Horizontal Scaling**: Infinite potential, but introduces the nightmare of distributed state.

We chose the hard path. We chose to go horizontal.

### The Database Problem

Stateless services are easy. You just spin up more of them. But the database? The database remembers. And when you have multiple databases trying to remember the same thing at the same time, arguments ensue.

We looked at CAP theorem. We looked at PACELC. We looked at our bank account.

In the end, we compromised. We sharded.

## The Result

Today, Writebook runs on a cluster of nodes spanning three continents. It handles millions of requests. But deep down, in the core of its logic, it still remembers that rainy night in the data center where it all began.
