class Human {
    public name : string;
    public age : number;
    public gender : string;

    constructor(name : string, age : number, gender?: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lyun = new Human("Lynn", 18, "female");

//
const sayHi = (lyun : Human): string => {
    return `Hello ${lyun.name}, you are ${lyun.age}, you are a ${lyun.gender}`;
}

console.log(sayHi(lyun));

export {};