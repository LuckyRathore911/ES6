let n="Lucky"
let r=36
console.log(`Hello, I am ${n}.
My roll number is ${r}\n`);


//Custom Interpolation
function custom(str,name,roll){
    console.log("str ",str)
    console.log("name ",name)
    console.log("roll ",roll)
}
let studentName="Princy"
let rollNumber=40
custom("Student's name is ' ' and roll number is ' '.",studentName,rollNumber)
custom`Student's name is ${studentName} and roll number is ${rollNumber}`           //makes array of each string separated by ${}



//Raw String
let str=`my roll number is \n ${45}`
console.log(str== "my roll number is \\n 45")           //false
console.log(String.raw`my roll number is \n ${45}`== "my roll number is \\n 45")           //true