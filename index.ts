//1. 변수에 타입을 지정해보자
// 타입으로 string, number, boolean, null, undefined, bigint, [], {} 등

////string
let 이름: string = "kim";

////  스트링이 들어오는 어레이
let 어레이: string[] = ["kim", "park"];

////object자료

let 오브젝트: { name: string } = { name: "kim" };

///다양한 타입을 들어올 수 있게 하려면 union type
let 이름2: string | number = "kim";

/// 변수로 타입지정해서 사용하기
/// 대문자 시작한다.
type Name = string | number;

let 이름3: Name = 123;

///함수의 인자와 return을 지정할 수 있따.

function 함수(x: number): number {
  return x * 2;
}

//// arr 자료에 사용하는 튜플타입~~ 입력한 순서대로 타입이 정.확.히 들어가야함

type Member = [number, boolean];

let john: Member = [11, true];

////object 여러 속성을 타입지정하기
/// 글자로 된 모든 object 속성의 타입은 string

type Member2 = {
  [key: string]: string;
};

let john2: Member2 = { name: "name" };

///클래스 문법 타입 지정

class User {
  yeon: string;
  constructor(yeon: string) {
    this.yeon = yeon;
  }
}

//// ?을 사용해주면 name:string이라는 key:Value형태가 들어올수도있고 안들어올수도있고
////대신 name이라는 key이름은 name으로 들어와야함

type MyObject = {
  name?: string;
  age: number;
};

let 철수: MyObject = {
  name: "kim",
  age: 50,
};
