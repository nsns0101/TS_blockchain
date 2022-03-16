const name1 = "Lee Jae Young",
    age = 24,
    gender = "male"

//매개변수에 타입을 지정
// ?는 선택 매개변수
// string타입으로 반환
const sayHi = ( name1 : string, age : number, gender? : string): string => {
    return `Hello ${name1}, you are ${age}, you are a ${gender}`;
}

console.log(sayHi(name1, age, gender));

export {};