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

document.addEventListener("click", function() {
    // click시 할 일
})