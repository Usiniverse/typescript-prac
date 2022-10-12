interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('full time!');
  }
  workFullTime() {

  }
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('part time!');
  }
  workPartTime() {

  }
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 좋지 않다.
function payBad(employee: Employee) : Employee { 
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const yushin = new FullTimeEmployee();
const bob = new PartTimeEmployee();
yushin.workFullTime();
bob.workPartTime();

const yushinAfterPay = pay(yushin);
const bobAfterPay = pay(bob);

const obj = {
  name: 'yushin',
  age: 32,
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, 'name'));
