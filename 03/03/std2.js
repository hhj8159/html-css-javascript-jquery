class Student {
    constructor(no, name, score) {
        this.no = no;
        this.name = name;
        this.score = score;
    }
    toString() {
        return `학번 : ${this._no}`
    };
    get getName() {
        return this.name;
    };
    set setName(name) {
        this.name = name;
    };
    get no() {
        return this._no;
    }
    set no(n) {
        if(n < 0) {
            return;
        }
        this._no = n;
    }
}
// const student = new Student(1, '말똥이', 100);
// console.log(student.no);
// student.no = 2;
// console.log(student.no);
// console.log(student.name);
// student.setName = '소똥이'
// console.log(student.getName);
// console.log(student);
// console.log(student.toString());
// for(let i in student) {
//     console.log(i);    
// }

let num = 10.1234; // typeof number
console.log(typeof num);
console.log(num.toFixed(2)); 

num = new Number(20.1234); // typeof object
console.log(num.toFixed(2)); 
console.log(typeof num); 

let str = "abcd";
new Number("1234");
str = new String("ABCD");