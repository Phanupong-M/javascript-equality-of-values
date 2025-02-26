// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20); //false
Object.is(0, -0); // false
Object.is(NaN, 100); // false
Object.is("one", "two"); // false
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }); //false แค่เปิด {} ใหม่ ก็เป็นการสร้าง object ตัวใหม่ ดังนั้น แม้ว่าไส้ข้างในจะเหมือนกัน แต่คนละ {} ก็ถือว่าเป็น object คนละตัว
Object.is(null, undefined); //false

10 === 20; //false
10 === "10" //false
3.14 !== 3.14; //false
"TechUp" !== "TechUp"; //false
NaN === NaN; //false
0 !== -0; //false เพราะ 0 === -0 เป็น true ดังนั้นในกรณีนี้ 0 ต้องเท่ากับ -0 

let objectA = { course: "Web Developer", price: 300000 }; 
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB; //false เพราะ variable คนละตัว จึงเก็บใน memory คนละตัว แม้ว่าไส้ข้างใน object จะเหมือนกัน แต่ 
