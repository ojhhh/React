const ta = new Date("2023-07-01").getDay();
console.log(ta);
const tb = new Date();
console.log(tb.getMonth() + 1);

console.log(new Date().getMonth() + 1);

console.log(new Date().getFullYear());

const tc = new Date(
  new Date().getFullYear(),
  new Date().getMonth() + 1,
  0
).getDate();

console.log(tc);

console.log(new Date().getDay());

console.log(6 % 6 == 0);
console.log(0 % 6 == 0);
