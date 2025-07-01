# 🟨 JavaScript Day 13 — Maps and Sets

On Day 13 of my JavaScript learning journey, I explored two important ES6 features — **Maps** and **Sets**. Here's a quick breakdown of what I learned:

---

## 📘 Map in JavaScript

A `Map` is a collection of keyed data items, just like an object. But the key difference is that `Map` allows keys of any type and maintains the insertion order.

### 🔧 Operations Performed:

```js
let map = new Map();
map.set("name", "Ayush");
map.set("age", 21);
map.set("Email", "ayushk9451@gmail.com");

console.log(map);
console.log(map.has("age"));      // true
console.log(map.get("Email"));    // "ayushk9451@gmail.com"
console.log(map.delete("Email")); // true
console.log(map);
