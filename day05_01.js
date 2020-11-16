//1.js
const b=2
function greeting() {
    const a =1+b
    return 'hi'
}

function sum(a,b,c) {
    console.log(arguments)
    return a+b+c
}
sum(1,2,3)

console.log(this)


const person={
    name:'zhengdada',
    birthday:1999,
    calAge:function () {
        console.log("年龄为" `${2020-this.birthday}`)
    }
}
person.calAge()

const calage=person.calAge
calage() //输出结果为NaN,因为意味this为全局对象，this.birthday为undinfine，2020-undinfine=NaN,函数调用方式出现错误

//先创建一个全局执行上下文
let a= 20;
const b =30;
var c;
function multiply(e,f){
    var g =20
    return e*f*g
}
c=multiply(20,30)

//hoisting
console.log(sayHello)
console.log(strMessage)
console.log(sayHi)
function sayHello(){
    return 'Hello Java'
}
var strMessage='Helol pyython'
var sayHi=function(){
    return 'Hi java'
}

//变量提升(只适用于var)
console.log(a)  //输出undefind
var a ='zhengdada'
console.log(a) //输出zhengdada

//let /const
function foo(){
    console.log(a)
    let a = 'zhengdada' //引用错误，暂时性死区，提升只能适用于var
    console.log(a)
}
foo()

//作用域与作用域链
const name='zhengdada'
const age=21
const city='sichuan'
function gerPerson(){
    const name='zhenghairong'
    const age=28
    return `${name} is ${age} and live in ${city}`
}
console.log(gerPerson())

//全局执行上下文中通过var声明的变量，会自动成为全局对象的属性
//全局执行上下文中通过函数声明定义的函数，会自动成为全局对象的方法
//后果：
let a = 1
const b = 2
var c = 3  //全局作用域下用var声明变量会自动认为全局环境下的属性和方法
function foo(){
    console.log('hi')
}
const foo = function(){}

//this绑定

const foo = function(){
    let name=21
    console.log(this.name+10)//this.name=undefined,undefined+10=NaN
}
foo()

var name1=21
const foo1 = function(){
    console.log(this.name1)//this.name=undefined,undefined+10=NaN
}
foo1()

const foo = () => {console.log(2020-this.age)}//箭头函数是没有this绑定的
const foo = function(){
    console.log(2020-this.age)
}
const oStudent = {
    name:'zhenghairong',
    age:21,
    calAge:foo
}
oStudent.calAge()