const now = new Date();
console.log(now); // 9시간 부족함
console.log(now.getFullYear(), now.getMonth()+1, now.getDate());
console.log(now.getHours(), now.getMinutes(), now.getSeconds());
console.log(now.getTime(), now.getDay());

//getDay를 사용하여 현재의 요일을 한글로 출력 0~6

switch(now.getDay()){
    case 0:
        console.log('일요일');        
        break;
    case 1:
        console.log('월요일');
        break;
    case 2:
        console.log('화요일');
        break;
    case 3:
        console.log('수요일');
        break;
    case 4:
        console.log('목요일');
        break;
    case 5:
        console.log('금요일');
        break;
    case 6:
        console.log('토요일');
        break;
}
console.log(now.getDay());

const days = ['일', '월', '화', '수', '목', '금', '토'];
console.log(days[now.getDay()] + "요일");

console.log(now.getTimezoneOffset());
now.get




