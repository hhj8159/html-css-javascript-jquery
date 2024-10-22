const arr = [10, 20, 30, 40, 50];

// filter, foreach, map *******중요 외워라
// 10, 30, 50만 출력 >> 10, 90, 250
function f(x) {
    return x % 20 != 0;
}
function f2(x) {
    console.log(x);    
}
function f3(x) {
    return x ** 2 / 10;
}
arr.filter(f4).map(f3).forEach(f2);

function f4(x) { 
    return x % 20 == 0;
}
// function f5(x) {
//     return x * 3;
// }
// arr.filter(f4).map(f5).forEach(f2);

arr.filter(x => x % 20 != 0).map(x => x ** 2 / 10).forEach(x => console.log(x));

arr.filter(x => x % 20 == 0).map(x => x * 100).forEach(x => console.log(x));

arr.
filter(function(x) {
    return x % 20 != 0 
})
.map(function f3(x) {
    return x ** 2 / 10
})
.forEach(function f3(x) {
    return x ** 2 / 10
});

 //********** */

// reduce mongo db에서 주로 씀
// reduce 차원감소 집계함수적목적
 const arr2 = [1,2,3,4,5];
 const result = arr2.reduce(function(acc, cur) {
    console.log(acc);
    return acc + cur;
    
 }, 0);
 console.log(result);
 
 // find  arr.find(callback[, thisArg])
 // some  arr.some(callback[, thisArg])
