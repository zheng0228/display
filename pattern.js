// 创建正则表达式
// 方式一
const pattern = /javaScript/;
pattern.test('javaScript');

// 方式二
// RegExp
const pattern1 = new RegExp('javaScript');
let a = pattern1.test('javaScript');
console.log(a);


let a = /dog/.test('hot dog');  
console.log(a);  // true
let a = /d.g/.test('hot dog');  
console.log(a);  // true

let a = /11|22/.test('2232432');
console.log(a);   // true


let b = (new RegExp('1\\+1').test('1+1'));
console.log(b);

// 匹配原则

// abcd任意一个出现就可以
let c = /[abcd]/.test('php');
console.log(c);
// a-d里面某一个在就可
let c1 = /[a-d]/.test('pbp');
console.log(c1);


let d = /[\d]/.test(1233);
console.log(d);


let f = /l{0}k/.test('loooook');
console.log(f);

