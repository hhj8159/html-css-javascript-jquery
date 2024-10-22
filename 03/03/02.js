let number = 20;
// 14[16] 10100[2]

let binaryNumber = number.toString(2);
let hexNumber = number.toString(16);

console.log(binaryNumber, hexNumber);

let result = parseInt(binaryNumber, 2); //2진법 10진법으로바꿀때
console.log(result);

const str = "가나다라가나다라가나다라";
console.log(str.charAt(2), str[2]);//문자열 배열로 확인
// substring과 slice는 같다. ~이상 ~미만으로 자름
console.log(str.slice(1, 3), str.substring(1, 3), str.substr(1, 3));
// replace는  1회만 바꾼다. all붙으면 다 바꿈
console.log(str.replace('가', '나'), str.replaceAll('가', '마'));

// charCodeAt(index) 특정 인덱스의 코드값을 알 수 있다
// 11172
// console.log(588 * 19);

let s = "";
for(let i = 0; i < 26; i++) {
    s += String.fromCharCode(65+i);
}
console.log(s);
console.log(s.charCodeAt(0));

// sort 제대로 쓰려면 callback필요
const arr = [10, 20, 3, 40, 5];
arr.sort((a, b) => a - b);
arr.sort(function(a, b) {
    return b - a;
}) 
console.log(arr);

// fot in
// for of
for(let i of arr) {
    console.log(i);    
}

const multi = [
    [1,2,3,4],
    [3,4,5],
    [2,3,4]
];

// for in의 경우
for(let i in multi) {
    for(let j in multi[i]) {
        console.log(multi[i][j]);        
    } 
}
// for of의 경우 -잘 안씀
for(let sub of multi) {
    for(let value of sub){
        console.log(value);    
    }
}



