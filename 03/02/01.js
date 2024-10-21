var arr = ["ABCD", true, 1234];
console.log(arr.length);

var arr2 = new Array(10);
console.log(arr2);
console.log(arr2[0]); // undefined 기본값

// overloading 

// slice, (cf : substring)
var arr3 = arr.slice(1); // 1이상 인덱스 2미만 인덱스까지 자르기
console.log(arr); // 원본에 변화없음
console.log(arr3);

// split : 문자열 >> 배열 (seperator)
// join : 배열 >> 문자열

var str = "a-b-c-d-e"; // a/b/c/d/e
arr = str.split("-"); // 괄호안의 것을 기준으로 자름
console.log(arr);
str = arr.join("/");
console.log(str);

arr = [1,2,3,4,5];
arr2 = [4,5,6,7];

//var arr3 = arr.concat(arr2); //두 배열을 붙인다
// ...(전개)  : 두 배열을 붙인다 ex) ...arr 
// var arr3 = [arr, arr2];
var arr3 = [0, ...arr, 10, ...arr2, 20];
// console.log(arr3[0][3]); 2차원배열
// console.log(arr3);
console.log(arr3.toString());

// 자바의 배열은 소유 멤버 : length/자바에서 조인 사용방법 String.join(배열, 구분자) >>

// toString() 
var num = 1; // java > Integer num = 1;참조형  int num = 1;기본형
console.log(num.toString());

// 자바스크립트의 모든 변수는 객체로 관리됨 . 순수 객체지향 언어

// 함수 
// hoist 
// js >> 실행 전에 전체스캔 > 함수, 변수 정리
// **** 상단으로 끌어올려 선언만 한다 ****

console.log(f(10));
function f(x) {
    return x * x;
}
console.log(f(5));

console.log(abc);
var abc = "1234";
console.log(abc);

// 익명 함수 - 보통 일회용
// 변수 선언 후 타입이 함수인 대상을 할당. 타입이 함수인 변수
// f2();
var f2 = function (x) {
    return x * x;
}
var num = 10;
console.log(f2(20));
console.log(function (x) {
    return x * x;
}(20));
console.log(num);
console.log(10);


(function(str) {    // 즉시실행함수
    console.log("hello " + str);
    
})("javascript");
(function(str) {    // 즉시실행함수
    console.log("hello " + str);
    
}("javascript"));

((str) => {
    console.log("hello " + str);
    
})("js");


function process() {
    return; // 리턴에서 호출 위치(process())로 되돌아간다.
    var kor = 90;
    var eng = 90;
    var mat = 90;
    var avg = (kor + eng + mat) / 3;
    return avg;
}
console.log("홍길동 학생의 평균은 " + process());



// 두 수를 입력 받아 그 중 큰 값을 반환하는 함수
function max(m1, m2) { 
    return m1 > m2 ? m1 : m2;
}
var max = (a, b) => a > b ? a : b;
console.log(max(10, 5)); // 10

// 여러 수를 입력 받아 그 중 큰 값을 반환하는 함수
// arguments 배열과 비슷함
function max2() {
    var max = -Number.MAX_VALUE;
    for(var i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] !== "number") {
            return undefined;
        }
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max == -Number.MAX_VALUE ? undefined : max;
    console.log(arguments);     
    console.log(arguments.length);     
}
console.log(max2(10, 20, 30, 40));




 