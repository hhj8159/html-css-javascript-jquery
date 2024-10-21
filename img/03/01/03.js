// 10을 추가, 30을 추가, 5를 추가, 20을 추가
// 40을 0번 인덱스에 추가
var arr = [];

// arr.push(10, 30, 5, 20);
arr.push(10);
arr.push(30);
arr.push(5);
arr.push(20);
console.log(arr);

arr.unshift(40);
console.log(arr);

arr.sort(function(a,b){
    return a-b
});
console.log(arr);

arr.sort(function(a,b){
    return b-a
});
console.log(arr);

console.log(arr.reverse());