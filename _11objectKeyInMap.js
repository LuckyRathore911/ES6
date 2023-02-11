// Key in map can be of object type
const studentMap= new Map();

studentMap.set("key1",12);
console.log(studentMap)
console.log(studentMap.get("key1"))

console.log("------")
const s1={sname:"Lucky"}            //object
const s2={sname:"Princy"}           //object
studentMap.set(s1,"Good student")
studentMap.set(s2,"Very Good student")
console.log(studentMap);