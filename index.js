//1. 변수에 타입을 지정해보자
// 타입으로 string, number, boolean, null, undefined, bigint, [], {} 등
////string
var 이름 = "kim";
////  스트링이 들어오는 어레이
var 어레이 = ["kim", "park"];
////object자료
var 오브젝트 = { name: "kim" };
///다양한 타입을 들어올 수 있게 하려면 union type
var 이름2 = "kim";
var 이름3 = 123;
///함수의 인자와 return을 지정할 수 있따.
function 함수(x) {
    return x * 2;
}
var john = [11, true];
var john2 = { name: "name" };
///클래스 문법 타입 지정
var User = /** @class */ (function () {
    function User(yeon) {
        this.yeon = yeon;
    }
    return User;
}());
var 철수 = {
    name: "kim",
    age: 50,
};
