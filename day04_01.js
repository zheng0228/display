//字面量(正则表达式)
let a=' ',b=" ",c=' ';//字符串字面量
let oArray=[1,2,3];
const oStudent={};
const oReg=' \abc\ ';
/*
定义函数的四种方式
*/
//函数声明
function sayHello(){
    console.log('hello world')
}//定义了一个函数字面量
//定义函数表达式
const sayHello=function(){
    console.log('hello world')//可以复制
};//匿名的函数表达式
console.log(sayHello);
sayHello();
const sayHello=function sayHi(){
    console.log('hello world')
};//命名的函数表达式
//Function 构造函数(不建议使用)
const sayHello=new Function("console.log('hello world')");
//ES6新增语法，箭头函数(其他程序员不易看懂)
const sayHello=() => {console.log(('hello wworld'));}
 
//返回值
const sayHello=function(){
    let a=1,b=2;
    let c=a+b;
    return c ;
}
console.log(sayHello());//如果是return，没有c，结果是undefined，如有return返回值,但没有执行语句，结果一样


//函数参数,function()框号里为形参
const add=function(a,b){
    return a+b;
}
let a=add(2,3);
console.log(a);
const add1=function(a,b){
    return a+b;
}
let b=add1();
console.log(b);//结果为NaN,NaN=not a number,undefined+undefined

let b=1;
b=Infinity;//无穷大
b=-Infinity;//负无穷大

let b2=add1();//只传递一个参数
console.log(b2);//结果为NaN

let b3=add1(1,2,3,4);//传递多个参数
console.log(b3);//结果为3，意思就是实参比形参多，函数依然会被调用

const add2=function(a,b){
    let a1=arguments.length;
    console.log(a1);
    console.log(arguments[5]);
    return a+b;
}
let b4=add2(1,2,2,3,4,5);
console.log(b4);

const add3=function(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){//箭头函数是没有argument
        sum=sum+arguments[i]
    }
    return sum;
}
let b5=add3(1,2,4,5,6,7,8);
console.log(b5);

const add=function(...numbers){
    let sum=0;
    for(const num of numbers){
        sum =sum+num;
    }
    return sum;
}
let a1=add(1,2,2);
console.log(a1);

//默认参数(默认参数一定要出现在非默认参数之后，要不然没有任何意义)
const sayHi=function(studentName='js'){
    console.log(`hello,${studentName}`);
}
sayHi();
sayHi('java');

//箭头函数
const add1=(...numbers) =>{
    let sum=0;
for(const num of numbers){
    sum=sum+num;
}
return sum;
}
console.log(add1(1,2,2));

const add2=function(a,b){//这一段可以简写箭头函数 const add2=(a,b) =>a+b;
    return a+b;
}

//回调(叫做callback)
function dance(){
    console.log('我在跳舞');
}
function sing(song,callback){
    console.log(`我在唱${song}`);
    if ((typeof callback)=='function'){
        callback();
    }
}
sing('国歌',dance)

//改写函数表达式(箭头函数表达式)
const dance=() => {console.log('我在跳舞')}
const sing=(song,callback) =>{
     console.log(`我在唱${song}`)
     if(typeof callback == 'function'){
         callback();
     }
}
sing('国歌',dance);

//用箭头函数作为回调函数
const sing=(song,callback) =>{
    console.log(`我在唱${song}`)
    if(typeof callback == 'function'){
        callback();
    }
}
sing('国歌',() => (console.log(`我在跳舞`)))

//回调函数的应用
//1.数组的排序
const oArray=[1,10,2,11,9,8];
console.log(oArray.sort());//排序,但将数组当成字符串（字母）进行排序了
const num=(a,b) => a-b;
console.log(oArray.sort(num));//正确的将数组进行排序了

//数组迭代：forEach(),map(),reduce(),filter 

//forEach
const colors=['Red','Back','Green'];
for(let i=0;max=colors.length;i++){
    console.log(`位置${i}处的颜色为${colors[i]}`);
}

const colors=['Red','Back','Green'];
colors.forEach(
    (colors,index)=>console.log(`位置${index}处的颜色为${colors}`)
    );

const oArray1=[1,2,3,4];
oArray1.forEach((colors) => console.log(`${colors}`))

//map
const oArray2=[1,2,3,4];
const oArray3=oArray2.map((x) => x+2);
console.log(oArray3);

//改写
//先定义一个数组，然后得到一个新数组，每个元素的平方，不用map的版本
const a1=[1,2,3];
let a2=[];
for(let i=0;i<a1.length;i++){
          a2[i]=a1[i]+a1[i];
}
console.log(a2);
//map版本
let a1=[1,2,3];
let a2=a1.map((x) => x*x);
console.log(a2);

//reduce
const a1=[1,2,3];
const a2=a1.reduce(//该数组元素相加
    (sum,curVal) => sum +curVal//carVal是当前值
)
console.log(a2);
console.log(typeof a2);
//更简洁的版本
const a2=[1,2,3].reduce((sum,curVal) => sum+cuiVal);//sum+cuiVal后面有个初始值0
console.log(a2);
//不用reduce版本
const a2=[1,2,3].reduce((sum,curVal) => sum+cuiVal,10);
console.log(a2);
//字符串转为数组
const sentence="this is 中国 a big world";
const words=sentence.split(" ");
console.log(words);
const lenOfWords=words.reduce(//累加器
    (sum,val) => sum+val.length,0
)
console.log(lenOfWords);

//filter过滤
const a1=[1,2,3,4,5,6,7,8];
const a2=a1.filter(a => a%2==0);
console.log(a2)
//filter过滤指定的字符串
const sentence="this is 中国 a big world";
const words=sentence.split(" ");
console.log(words);
const words1=words.filter(
    (val) => val.length >4
);
console.log(words1);
//链式语法
const a=[1,2,3].map((x) => x*x).reduce((acc,x) => acc+x);
console.log(a)