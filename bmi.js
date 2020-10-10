//mark
let mass1 = 62;
let height1 = 1.8;
//john
let mass2 = 65;
let height2 = 1.75;

let BMI1 = mass1 / (height1*height1);
let BMI2 = mass2 / (height2*height2);

console.log(BMI1);
console.log(BMI2);

if (BMI1 > BMI2){
    console.log("True");
}
else{
    console.log("False");
}
