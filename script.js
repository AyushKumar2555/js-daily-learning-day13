//maps and sets 
let map = new Map();
map.set("name", "Ayush")
map.set("age", 21);
map.set("Email", "ayushk9451@gmail.com");
console.log(map);
console.log(map.has("age"));
console.log(map.get("Email"));

// map.clear();

console.log(map);
console.log(map.delete("Email"));


//sets
let set = new Set();
console.log(set);
set.add('aman')
set.add(50)
set.add(0)
console.log(set);
console.log(set.has('aman'));
console.log(set.delete('aman'));

console.log(set.clear());
console.log(set);




