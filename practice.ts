///object 타입지정하기

let project: {
  member?: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

const 라잌가수: { name: string; singer: number } = { name: "하이", singer: 30 };

////union유니온(타입 두개갇 들어옴)

///arr경우
let 회원들: (number | string)[] = [1, 2, 3, "바보"];

//obj경우
let 오브젝: { a: string | number } = { a: "123" };

/// 변수 선언시 타입 지정을 해줘야함 중간에 타입바꾸지 못함
// let 참치 : string
// 참치:{참치회:string} = {참치회:"맛있어"}

let 나이: string | number;

///나이+1

////에러남

//// string + 1 가능
//// number +1 가능
//// string|number + 1 불가능

////ts는 엄격해야함

/// 언노운인 변수의 타입인 변수를 조작하려면
/// 내가 조작할 변수의 타입이 무엇인지 확실하게 체크하는 narrowing/ assertion 스킬 사용

let user: string = "kim";
let age: undefined = undefined;
let married: boolean = false;
let 철수2: (string | undefined | boolean)[] = [user, age, married];

////변수 할당할 떄 말고도 obj가 할당되어 값이 변하는 것 까지 타입지정을 해줘야한다.
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};

학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

///////////////////
//// 함수 타입 지정하기
/// 인자와 return값에 타입을 지정할 수 있다
///인자에 타입을 지정해주면 무조근 파라미터 값을 지정해주어야한다.
///만약에 인자가 들어올지 말지 option을 걸어주기 위해서는 x?:number
/// 물음표 연산자 사용
function 나함수(x: number): number {
  return x + 1;
}
나함수(1);

////void
////void => return 할게 없다면 :void
///실수해서 return하면 에러남

function 나함수2(x: number): void {
  x + 1;
}
나함수2(1);

////물음표 연산자
////     (x?: number) = (x : number | undefined) 와 같다

////왜 number| undefined 는 함수호출에서 에러가 나고
/// 옵션을 붙이는 곳은 에러가 안날까?
// function 나함수3(x: number | undefined) {
//   console.log(x);
// }

// 나함수3();

function 나함수4(x?: number) {
  // console.log(x);
}

나함수4();

///들어오는 인자값을 엄격하게 체크하는 방법 => Narrowing

////Narrowing

function 나함수5(x: number | string) {
  // return x + 1;
  ///x가 유니온 타입이기에 에러가 난 것이다!!!!!
}

나함수5(123);

/// ts는 항상 엄격하게,,,
/// 여기서 인자가 애매하게 들어와 타입이 확정되지 않을 경우에 narrowing을 사용한다

//////1)
function 나함수7(x: number | string) {
  if (typeof x === "number") {
    return x + 1;
  } else {
    return x + "1";
  }
}

나함수7(123);

///이외에  속성명 in 오브젝트자료
//// /// 인스턴스 instanceof 부모  문법이 존재한다.

/// assertion 문법 (타입 덮어쓰기)
///  ㄴ 이거 사용하면 if문이 필요없다

/// x as number => 들어오는 인자를 number로 바꿔주세요!
///assertion 문법의 용도는?(유니온 타입을 하나로 확정짓고 싶을때 사용하는것)
///1. narrowing 할 때
///2. 무슨 타입이 들어올지 100% 확실할 때 쓴다. =>
///하지만 버그 추적하기 힘들다. 그래서 남이 짠 코드 수정하거나 왜 타입에러가나는지 모를때ㅑ 사용한다.

function 나함수6(x: number | string) {
  let arr: number[] = [];
  arr[0] = x as number;
}

나함수6(5);

///
///
///
/////타입이 너무 길다면? => type alias

type Animal = string | number | undefined;
type Test = string;
let 동물: Animal & Test = "kim";

type Animal2 = {
  name: string;
  age: number;
};
let 동물2: Animal2;

///const object 수정 막기
///읽기전용으로 바꿔주면 object의 객체값을 수정할 수 없다.
type girlType = {
  readonly region: string;
};
const 출생지역: girlType = { region: "seoul" };

/////
////
////
////
/////type합치기
type NameType = string;
type AgeType = number;
type Person = NameType | AgeType;

///object를 extend하기

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

///type 포지션은 재정의가 불가능하다
////
////

///변수보다 더 엄격한 타입지정 가능
////literal types

let 이름4: 123;

let 나다: "연주" | "서른살인디";

나다 = "서른살인디";

///// 
