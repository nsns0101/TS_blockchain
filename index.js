"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name1 = "Lee Jae Young", age = 24, gender = "male";
//매개변수에 타입을 지정
// ?는 선택 매개변수
var sayHi = function (name1, age, gender) {
    return "Hello ".concat(name1, ", you are ").concat(age, ", you are a ").concat(gender);
};
console.log(sayHi(name1, age, gender));
//# sourceMappingURL=index.js.map