var s = {x:10, z:true, no:10};

s.no = 20;
s.name = "이재용";
s.kor = 80;
s.eng = 80;
s.mat = 60;
s.total = function() {
    return this.kor + this.eng + this.mat;
}
// console.log(s.no);
// // 필드제거 : delete
// delete s.no;
// console.log(s);
// console.log(s.no);
// console.log(s.total());

// typeof연산자 : 단항, 대상 피연산자의 타입을 문자열로 반환
var num = 10;
// num = "10";
num = Boolean(String(num));
num = "ABCD";
num *= 1; 
// 문자열을 숫자로 바꾸려면 - 0 , / 1, * 1


// 문장열 <<>> 숫자
// num = !!num;; 
// boolean >> 문자열 : + 빈문자열   문자열만들기 : 빈문자열 붙이기
// boolean >> 숫자 : - 0, ...   숫자만들기 : 산술연산 처리
// 논리만들기 : 이중부정   이중부정은 boolean으로 형변환

// 다른 데이터 타입이 논리 연산중 false가 오는 경우
// 문자열 >> 빈문자열일 경우에만 false
// 숫자 >> 0일 경우 false
// 객체 >> null일 경우 false   객체의 주소가 없는 상태가 null(널은 오브젝트타입이다)
// 함수 >> 



console.log(num, typeof num);
console.log(3/0, 0/0);


var num = 10;
for(var i = 10 ; i-- ; ) {

}

