let obj = {
    "x" : 10,
    y : "1234",
    z : function() {}
};

console.log(obj.x);
obj.x = 20;
console.log(obj.x);
obj.x = function() {
    console.log('hello world');
    
}
console.log(obj.x);
obj.x();

// 개체의 프로퍼티에 접근 하는 방법
obj['x']();

// 객체에 프로퍼티 추가 하는 방법
obj.a = undefined;
console.log(obj);

// 객체에 프로퍼티 제거 하는 방법
delete obj.y;
console.log(obj);

let arg = {'0':'a', '1':'b'};

//symbol []
let subName = Symbol();
console.log(typeof subName);

let info = {
    [subName] : '자바스크립트',
    subName : '제이쿼리'
};
console.log(info, info[subName], info.subName, info['subName']);



