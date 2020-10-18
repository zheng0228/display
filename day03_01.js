//var是Es5,前置变量，let,const是Es6(let不可以前置变量，可以重新赋值，初始化，而const不可以)
//创建对象
//1.通过object构造函数
let myObject =  new Object();
myObject.name = 'zhenghairong';
myObject.age = 21;
console.log(myObject);
//2.通过对象字面量创建对象
const oStudent = {};
oStudent.name = 'zhenghairong';
oStudent.age = 21;

const oStudent1 = {//或者（常用）
    name:'zhenghairong',
    age:21
};
console.log(oStudent1.name);
console.log(typeof oStudent1);//打印输出object
//Array
const a1 = new Array;
const a2 = [];
console.log(typeof a2);//打印输出object
console.log(a2[0]);//打印输出undefine，因为数组初始化为0，没有

const a3 = [];//给数组赋值，方式一
a3[0]='a';
a3[4]=1;
a3[6]=true;
console.log(typeof a3);
console.log(a3 instanceof Array);//instanceof
console.log(a3[2]);

const a4 =[1,2,3,'a',true,undefined,null,a2,oStudent];//给数组赋值，方式二
console.log(a4)

//删除数组元素
const avengers = ['zhangfei','lisi','wangwu'];
delete avengers[2];
console.log(avengers);

const number=[1,2,3,4];
let a=number[0];
let b=number[1];
let c=number[2];
let d=number[3];
console.log(`a=${a},b=${b},c=${c},d=${d}`);

const [a,b,c,d]=[1,2,3,4];
console.log(`a=${a},b=${b},c=${c},d=${d}`);
const [a,b]=[`zhenghairong`,true,1,2,3,4];
console.log(`a=${a},b=${b}`);

const avengers1 = ['zhangfei','lisi','wangwu'];
console.log(avengers1.length);
avengers1.length=1;
console.log(avengers1);
avengers1.length=0;
console.log(avengers1);

//数组的属性和方法
const avengers2 = ['zhangfei','lisi','wangwu'];
avengers2.pop();//元素被删除，被删除的元素的位置也被删除
console.log(avengers2);
avengers2.push('wangwu')//在数组最后添加一个元素，添加到数组最前面（第一个）用unshift
console.log(avengers2);


console.log(avengers2.pop());//被删除的元素被返回
console.log(avengers2.shift());//数组的第一个元素被返回

const avengers5 = ['zhangfei','lisi','wangwu'];
const avengers4 = ['sjiuow','wnjwve','cwjcjwj'];
const avengers6 = ['veveive','vvee','gregerg'];
console.log(avengers4,avengers5,avengers6);
//也可以（简写版）
const ah=[...avengers6,...avengers5,...avengers4];
console.log(ah);

const avengers4 = ['sjiuow','wnjwve','cwjcjwj'];
const av1=avengers4.join();
const av2=avengers4.join("&");
console.log(av1);
console.log(av2);

//数组切片
const avengers4 = ['sjiuow','wnjwve','cwjcjwj','gyrgirghr'];
const av3=avengers4.slice(1,3);//不包含第三个元素
console.log(avengers4);
console.log(av3);
//数组中删除元素，将新元素插入之前删除的元素
const avengers4 = ['sjiuow','wnjwve','cwjcjwj','hfhuierger'];
const av4=avengers4.splice(1,2,'hfeiu','hvheve','wgegu')//splice(1,2)指的是被切的元素位置
console.log(avengers4);
console.log(av4);

const number2=[1,2,3,4,5,6];
const a =number2.sort();//sort按照字母顺序排列的
console.log(number2);
console.log(a)
    
const str=['a','c','s','e','r'];
const b=str.reverse();
console.log(b);
console.log(str);

//inclube找特殊字符串，如果找的就是true,没有就是flase
const avengers4 = ['sjiuow','wnjwve','cwjcjwj'];
const av5=avengers4.includes('sjiuow');//indexOf则是0和1（没有找的）
console.log(av5);

//多维数组
const ma = [[1,2],[3,4]];
console.log(ma);
console.log(ma[0][0])
console.log(ma[0][1])

//嵌套数组
const nc=['cjknsc','wkc'];
const bf=['er','vje'];
const gr=[nc,bf];
console.log(gr);
const flat = [...nc,...bf];
console.log(flat);
//扁平化的嵌套数组

//set
const oSet=new Set();
//方法一
oSet.add(1);
oSet.add(2);
oSet.add(3).add(4).add(5)//该集合添加了5个元素
oSet.add(5);
console.log(oSet);
//方法二
const list1=new Set([1,2,3,4,5,6])
console.log(list1);
const list2=new Set('hello');
console.log(list2);
const list3=new Set().add('the').add('a').add('heh');
console.log(list3.size);
list3.size=2;
console.log(list3);

const list3=new Set().add('the').add('a').add('heh');
const a1=list3.has('heh');
const b1=list3.delete('the');
console.log(a1);
console.log(b1);
list3.clear();
console.log(list3);

const list4=new Set().add('the').add('a').add('heh');
const a=Array.from(list4);//或者可以const a =[...list4],主要功能为换成[]括号(转换为数组)
console.log(a);

//删除重复值
const oArray1=[1,2,2,3,5,5,4,3,2]
const oSet1=new Set(oArray1);//把数组转变为一个集合
console.log(oSet1);
const oArray2=[...oSet1];//再把集合转变为数组
console.log(oArray2)//再把集合转变为数组

//weak就是对象被阻止垃圾回收
const student={
    name:'zheng',
    age:21
}
const weak=new WeakSet();
weak.add(student);
console.log([...weak][0]);//[...weak][0]代表引用的部分

let student1={
    name:'xiao',
    age:2
}
const weak=new WeakSet();
strong.add(student1);
student1=null;
console.log([...strong][0]);

let student2={
    name:'zheng',
    age:21
}
const weak=new WeakSet();
weak.add(student2);
student2=null
console.log(weak.has(student2));

//Map
const oMap=new Map();
oMap.set(1,'i');
oMap.set(2,'ii').set(3,'iii').set(4,'iv');
console.log(oMap)//打印输出的=>表示键值对
console.log(oMap.size);
const a=oMap.get(3);
console.log(a)
oMap.set('name','zhengdada');
const r =oMap.get('name');
console.log(oMap)
console.log(r)
console.log(oMap.has('name'));
const c=oMap.delete('name');
console.log(c);
oMap.clear();
console.log(oMap);
//嵌套数组
const oMap = new Map().set(1, "I").set(2,'II').set('b',"III").set(4,"IV").set('a',"V")
const oArray = [...oMap];
console.log(oArray);

const oMap = new Map().set(1, "I").set(2,'II').set('b',"III").set(4,"IV").set('a',"V")
const oArray = Array.from(oMap)
console.log(oArray);

const student = {
    name: 'xiao',
    age: 21
};

student.name = 'xiao'
student.age = 21
student = null;