Array

type Student = {
    passed: boolean;
}

const student: Student[] = [{ passed: true }, { passed: true }, { passed: true }];
const result = student.every(student => { // every : 모두 true일 경우 true 리턴
    return student.passed;
});

class Animal {
}

class Cat extends Animal {
    isCat: boolean = true;
}
class Dog extends Animal {
    isDog: boolean = false;
}

const animals : Animal[] = [ new Cat(), new Cat(), new Cat() ];
function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isCat !== undefined;
}
console.log(animals.every<Cat>(isCat));


console.log(result);