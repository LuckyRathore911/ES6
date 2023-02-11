function luck(){
    console.log("Inside ", this)
}
console.log("Outside ",this)
luck();

// Arrow function does not have 'this'
// hence we cannot make its constructor
// it do not have argument variables
// and it does not have new.target
const lucky=()=>{
    console.log("--Inside-- ", this)
}
console.log("--Outside-- ",this)
lucky();

let arr=[1,2,3,4]
const arrmap=arr.map(element=>element*2)
console.log(arrmap);


// const retObj=(n,a)=>{
//     return {uname:n, age:a}
// }
//OR
const retObj=(n,a)=>({uname:n, age:a})      //() shows that the {} are of object and not the function body

console.log(retObj("Lucky",28))