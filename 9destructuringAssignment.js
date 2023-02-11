//1 Array Matching
console.log("----------Array Matching----------")
let arr=[1,2,3,4]
let [a,b]=arr

console.log("a: ",a)
console.log("b: ",b)
console.log("array: ",arr)
// [b,a] == [a,b];            //Cannot set properties of undefined 
// console.log("a: ",a)
// console.log("b: ",b)

//2 Object Matching, Shorthand Notation
console.log("----------Object Matching, Shorthand Notation----------")
function getStudent(){
    let student={
        sname:"Lucky",
        rno:36,
        level:"BTech"
    }
    return student;
}
//console.log(getStudent())
var {sname,rno,level}= getStudent();
console.log(sname,rno,level);
console.log(sname,rno);


//3 Object Matching, Deep Matching
console.log("----------Object Matching, Deep Matching----------")
function getData(){
    let obj={
        ename:"Amit",
        salary:100000,
        location:{
            city:"Banglore",
            state:"Karnataka"
        }
    }
    return obj;
}
let {ename:employeeName,salary:employeeSalary, location:{city:employeeCity,state},location}=getData();
console.log(employeeName,employeeSalary,location,employeeCity, state);


//4 Parameter Context Matching
console.log("----------Parameter Context Matching----------")
function printData([name,age]){
    console.log("Name:",name,", Age:",age)
}
printData(["Aaliya",31]);

function printData2({name,age}){
    console.log("Name:",name,", Age:",age)
}
printData2({name:"Aaliya",age:31});

function printData2({name:ename,age:eage}){
    console.log("Name:",ename,", Age:",eage)
}
printData2({name:"Aafrin",age:33});


//5 Fail soft destructuring
console.log("----------Fail soft destructuring----------")
let ar2= [5,6]
let [e=3,f=9,g=2,h]=ar2
console.log(e,f,g,h)                //5 6 2 undefined