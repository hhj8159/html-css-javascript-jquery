function f (x) {
    return x;
}
console.log(typeof f);
console.log(typeof f(10));
console.log(typeof f("10"));
console.log(typeof f({x:10, y:20}));
console.log(typeof f([1,2,3,4]));
console.log(typeof f());
console.log(typeof f(undefined));

function myFunc() {
    console.log("핫하");
    
}
console.log(typeof f(myFunc));

f(myFunc());
f(myFunc)();

// document.addEventListener("click", function() {
//     // click시 할 일
// })
// callback 파라미터로 전달되는 함수

// scope
// 지역변수 : 함수내에서 선언한 변수
// 전역변수 : 지역변수가 아닌 변수


// 전역
// var b = 20; // 전역변수
function test() {
    // var a;
    // console.log(a); // error가 아님
    // var a = 10;
    // console.log(a);
    // console.log(b);
    b = 30;
    
}
// console.log(a);
// var b = 20; // 여기서는 undefined
test();
console.log(b);

for(var i = 0; i < 10; i++) {

}
console.log(i);
{
    {
        {
            {
                {
                    {
                        var num = 30;
                    }
                }
            }
        }
    }
}

console.log(num);

function f1() {
    var local = 30;
    function f2() {
        console.log(local + 50);
        
    }
    f2();
}
f1();

// let, const 호이스팅 하지 않음
// let으로 변수 선언 - 블럭 기반으로 작동
var a = 10;
var a = 20;
let number = 20;
// let number = 20;
for(let s = 0; s < 10; s++) {
    console.log(s);
    
}
// console.log(s); 

let fn = function(x) {
    console.log("hello " + x);
    
}
fn("world");

// final double PI = Math.PI;
const PI = Math.PI;
// PI = 3.14;


// closure - 함수 종료 후에도 지역변수가 남아 있는 현상
// 클로저 동작의 최소 조건 >> 함수를 리턴
// 전역변수에 접근하지 않으려고 사용, callback을 줄이려고 사용
function increaseCount() {
    let n = 0;
    function inner() {
        n++;
        return n;
    }
    return inner;
}
let tmp = increaseCount();
console.log(tmp());
console.log(tmp());
console.log(tmp());

// console.log(increaseCount()());
// console.log(increaseCount()());
// console.log(increaseCount()());

// function f() {
//     f();
// }
// f();

console.log(this);


console.log(Number("1234.456abcd1234"));    //NaN
console.log(parseInt("1234.456abcd1234"));  // 123
console.log(parseFloat("1234.456abcd1234")); // 123.456

// finish
// finity 유한
// infinity 무한

// NaN, Infinity
let nan = NaN;
let posiInfi = Number.POSITIVE_INFINITY;
let negaInfi = Number.NEGATIVE_INFINITY;

console.log(typeof nan);
console.log(posiInfi);
console.log(negaInfi);

console.log(isNaN(nan));
console.log(!!nan); // NaN미정의값

console.log("=========================================");
console.log(isFinite(posiInfi));
console.log(isFinite(negaInfi));

eval("let str = 'hello'; console.log(str);") // 보안상 위험하니 eval함수는 쓰지마라

// URI(통일된자원에대한정보)경로, URL(통일된자원에대한장소) 쿼리스트링

// http://www.javaman.com/post/view?no123
// http://www.javaman.com/search?query=abcd
// http://www.javaman.com/post/view/123=http://www.naver.com

let str = 'http://www.자바맨.com/search?query=http://www.네이버.com#abcd';
console.log(encodeURI(str));
console.log(encodeURIComponent(str));

// https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=http%3A%2F%2Fwww.javaman.com%2Fsearch%3Fquery%3Dhttp%3A%2F%2Fwww.naver.com%23abcd&oquery=http%3A%2F%2Fwww.%EC%9E%90%EB%B0%94%EB%A7%A8.com%2Fsearch%3Fquery%3Dhttp%3A%2F%2Fwww.%EB%84%A4%EC%9D%B4%EB%B2%84.com%23abcd&tqi=ixh7YsqpsECssgOii6VssssstSG-098888
let resultStr = decodeURIComponent('https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=http%3A%2F%2Fwww.javaman.com%2Fsearch%3Fquery%3Dhttp%3A%2F%2Fwww.naver.com%23abcd&oquery=http%3A%2F%2Fwww.%EC%9E%90%EB%B0%94%EB%A7%A8.com%2Fsearch%3Fquery%3Dhttp%3A%2F%2Fwww.%EB%84%A4%EC%9D%B4%EB%B2%84.com%23abcd&tqi=ixh7YsqpsECssgOii6VssssstSG-098888')
console.log(resultStr);

// 메서드 : 객체에 종속된 함수
let obj = { // 타입이 함수면 메서드
    x:10,
    y:"abcd",
    z:function(){}
};

class Student { // 
    
}
let student = new Student();
