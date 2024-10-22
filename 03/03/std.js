function Student(no, name, kor, eng, mat) {
    this.no = no;
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.mat = mat;
}

Student.prototype.total = function() {
    return this.kor + this.eng + this.mat;
}
const s1 = new Student(1, '새똥이', 100, 100, 100);
console.log(s1.total());

// list.remove(index)
// splice 중간 제거, 추가, 범위제거
const arr = [1,2,3,4,5];
// arr.splice(1, 3, 10, 20); // 1번인덱스부터3번까지 지우고 그 사이에 10과 20을 추가

Array.prototype.remove = function(index) {// 이거로 remove기능 추가했음
    this.splice(index, 1);
}

Array.prototype.add = function(index) {//add기능을 추가한 경우
    this.push(index, 1);
}

arr.add(9);
arr.remove(3);

console.log(arr);

// for(let i in obj) {} 
// i:키 , obj[i]:밸류 이거로 확인

for(let i in s1) {
    if(i == 'name') {
        s1[i] = '소똥이';
    }
    console.log(i, s1[i]);
}


for(let i in arr) {
    console.log(i, arr[i]);
}

// in operator
console.log('name' in s1);
console.log('addr' in s1);

for(let i in "abcde") {
    console.log(i, "abcde"[i]);    
}