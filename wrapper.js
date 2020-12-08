//String对象
let e=String.fromCharCode(97);
e=String.fromCharCode('97')
console.log(e);
let d='zhenghairong';
console.log(d.slice(1,3));
console.log(d);
d.concat('zhenghairong')

const b=`{"student Name":"zhenghairong","age":21,"org":["lovo","smart"]}`
const oStudent=JSON.parse(b);
for(let p in oStudent){
    console.log(p);
}