//函数的属性
function getStudent(name,gender){//...gender为剩余参数（把其他收集到一个里面），name为形式参数，他的长度getStudent.length为1  
    return '';
}
console.log(getStudent.length)
console.log(getStudent.name);//输出getStudent
const getStudent1=function(){
    return '';
}
console.log(getStudent1.name);//输出getStudent1
console.log(getStudent1.prototype);//所有 对象都有prototype这一个属性

//call(),apple()是间接调用函数


//call
function add(c,d){
    console.log(this.a+this.b+c+d);
}
add(3,4);//NaN 因为this.a/this.b是undefind
//add(3,4)等同于add.call(undefind,3,4);输出NaN  this是全局对象
let num={a:1,b:2};
add.call(num,3,4)//10

const person={
    name:'郑海蓉',
    say:function(){
        return `你好，我是${this.name}`
    },
};
function moreSay(age,hobby){
    console.log(`${this.say()},我${age}岁，喜欢${hobby}`)
}
moreSay.call(person,21,"滑滑板");
//var声明变量，定义一个全局变量，就是挂在window下面的一个属性了


//apply
let array=['a','b'];
let enement=[0,1,2];
let a=[...array,...enement]
console.log(a);//['a','b',0,1,2]  数组不可变性，可以带来预测的结果
array.push.apply(array.enement);
console.log(array);//['a','b',0,1,2] 数组可变性，不可预测

//借用方法
const numbers=[1,2,3,4,5];
let max=Math.max.apply(null,numbers);//null代表为a全局变量
console.log(max);

//bind绑定
var large={
    a:100,
};
small.go(2,3,4);//10
 const person={
     age:21,
     getNameAndAge:function(name){
         return name+" "+this.age;
     },
 };
 //直接在person对象上调用方法
 person.getNameAndAge=person.getNameAndAge;
 //将方法的调用低值给变量nameAndAge
 const nameAndAge=person.getNameAndAge;
 //通过引用nameAndAge,调用底值给它的函数
 nameAndAge("郑海蓉");
 const boundNameAndAge=nameAndAge.bind(person,"郑海蓉");
 boundNameAndAge();
 //不带任何参数绑定
 const boundNameAndAge=nameAndAge.bind();
 boundNameAndAge("郑海蓉");
 const boundNameAndAge=nameAndAge.bind(undefined,"郑海蓉");
 //将this设置为null
 const boundNameAndAge=nameAndAge.bind(null,"郑海蓉");
 boundNameAndAge();


 //函数的toString()方法
 const ;getStudent2=function(){
    return 'zheng';
 }
console.log(getStudent2.toString());//查看原生代码
console.log(Math.max.toString());//不能查看原生代码

//Memoizaton
//斐波那契数组
const fina=function(n){
    // if(n<2){
    //     return n;
    // }else{
    //     return fina(n-1)+fina(n-2);
    // }等同于return n<2? n:fina(n-1)+fina(n-2);
    return n<2? n:fina(n-1)+fina(n-2);
};
console.time();
console.log(fina(3));
console.timeEnd();
const finaCache=function(n){
    finaCache.cache=finaCache.cache || {};
    // if(finaCache.cache !=undefined){
    //     finaCache.cache=finaCache.cache;
    // }else{
    //     finaCache={};
    // }
    //带缓存版本的
    if(!finaCache.cache[n]){
        finaCache.cache[n]=n <2? n:finaCache(n-1)+finaCache(n-2)
    }
    return finaCache.cache[n]
}
console.time();
finaCache(20);
console.timeEnd();
console.time();
let a=finaCache(20);//所消耗时间更小
console.timeEnd();
console.log(a);

//通用版的函数,参数就是对象的属性


//IIFE（立即调用函数表达式）
(function(){
    var temp=2;
})();
// {
//     const temp=1;
// }
// console.log(temp);等同于ES6
console.log(temp)


//临时变量

//严格模式

//模块模式
var myModule=(function(){
    var myPrivateVar,myPrivateMethod;
    myPrivateVar=0;//私有变量
    myPrivateMethod=function(foo){
        console.log(foo)  ;
    };
    return {//return下的方法可以调用
        myPrivateVar:"foo",//公开变量
        myPublicFunction:function(bar){
            //公开方法
            myPrivateVar++;
            myPrivateMethod(bar);
        },
    };
});

//暴露的模块模式
var myPevealingMoudle=(function(){
    var privateCounter=0;
    function privateFunction(){
        privateCounter++;
    }
    function publicFunction(){
        publicIncrement();
    }
    function publicIncrement(){
        privateFunction();
    }
    function publicGetCount(){
        return privateCounter;
    }
    //暴露公有属性和方法，指向私有属性和方法
    return{
        start:publicFunction,
        increment:publicIncrement,
        count:publicGetCount,
    };
})();
myPevealingMoudle.start();
myPevealingMoudle.increment();
myPevealingMoudle.count();

//closure
function outerFunc(){
  let outerVar="I am outside!";
  function innerFunc(){
      console.log(outerVar);
  }
  return innerFunc;
}
const myInnerFunc=outerFunc();
myInnerFunc();//=>输出"I am outside"

//闭包实列

//回调，也是一个典型的闭包
const message='hello world';
setTimeout(function callback)
