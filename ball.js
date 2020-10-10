//john
var arr1 = [89,120,103];
//mike
var arr2 = [116,94,123];

function avg1(array){
    var len = arr1.length;
    var sum = 0;
    for(var i = 0;i<len;i++){
        sum +=array[i];
    }
    return sum/len;
}
console.log(avg1(arr1));

function avg2(array){
    var len = arr2.length;
    var sum = 0;
    for(var i = 0;i<len;i++){
        sum +=array[i];
    }
    return sum/len;
}
console.log(avg2(arr2));

if (avg1 > avg2){
    console.log("John队伍获胜");
}
else{
    console.log("Mike队伍获胜");
}

//改变数组数据
arr1.push(106);
console.log(arr1);
arr2.push(85);
console.log(arr2);

//Mary
var arr3 = [97,134,105];

function avg3(array){
    var len = arr3.length;
    var sum = 0;
    for(var i = 0;i<len;i++){
        sum +=array[i];
    }
    return sum/len;
}
console.log(avg3(arr3));

if ((avg1 > avg2) && (avg1 > avg3)){
    console.log("John队伍获胜");
}
else if ((avg2 > avg1) && (avg2 > avg3)){
    console.log("Mike队伍获胜");
}
else{
    console.log("Mary队伍获胜");
}