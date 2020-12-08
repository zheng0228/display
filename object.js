const oStudent={
    studentName:'zhenghairong',
    age:21,
    org:['lovo','smart'],
    len:null,
    lenl:undefined,
    course:{name:'java',day:1},
    learn:function(){
        console.log('hello student')
    },
    learn1(){
        console.log('hello1 world')
    }
};
for(let p in oStudent4){
    console.log(p);
}
console.log(Object.keys(oStudent));
for (let p of Object.keys(oStudent1)){
    console.log(p);
}
console.log(Object.vaules(oStudent4));
delete oStudent.len;
console.log(oStudent.len);//得到undefind结果
oStudent.learn();
oStudent.learn1();
oStudent['learn']();
console.log(oStudent['age']);
console.log(oStudent['student Name']);
//构造函数
const oStudent1=new Object();
oStudent1.studentName='zhenghairong';
oStudent1.age=21;


//计算属性
let a='student',b='Name';
const oStudent1={
    [a+b]:'zhenghairong',
    age:21
};
console.log(oStudent1)
//简写
let studentName='zhenghairong',age=21;
const oStudent2={
    studentName:studentName,
    age:age
};
const oStudent3={studentName,age};  //ES6
console.log(oStudent3.studentName);

//判断属性或者方法是否存在
//1.通过in运算符来判断
const teacher={
    name:'zhenghairong',
    age:21
};
console.log('name'in teacher);
console.log('sname'in teacher);
//2.逻辑表达式
if(teacher.naem !==undefined){
    console.log('teacher.name 存在')
}
//3.直接用对象的一个hasOwnProperty()
if(teacher.hasOwnProperty){
    console.log('我有这个属性')
}
const vaules1=Object.vaules(oStudent4);
console.log([a,b]);




for(let [a,b] of Object.defineProperties(oStudent4)){
    console.log(`key:${a},value:${b}`);
}

//按引用赋值
const aa={name:'zhenghairong'};
const bb=aa;
bb.name='zhengdada';
console.log(aa.name);

let x=1,y=2,z=3;
console.log(Math.max(x,y,z));
const myMath1={
    max:function(...num){
        return num;
        
    }
}