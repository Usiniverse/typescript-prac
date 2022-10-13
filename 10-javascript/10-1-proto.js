 const x = {};
 const y = {};
 console.log(x);
 console.log(y);
 console.log(x.toString());
 console.log(x.__proto__ === y.__proto__);

 const array = [];
 console.log(array);

 function CoffeeMachine(beans) {
  this.beans = beans;
  // 만들어지는 인스턴스마다 포함되기 때문에 인스턴스 레벨이라고 부름
  this.makeCoffee = (shots) => {
    console.log('making...');
  }
 }

 // prototype member
 CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log('making...');
 }

 const machine1 = new CoffeeMachine(10);
 const machine2 = new CoffeeMachine(20);

 console.log(machine1);
 console.log(machine2);

 function LatteMachine(milk) {
  this.milk = milk
 }
 LatteMachine.prototype = Object.create(CoffeeMachine.makeCoffee)

 const latteMachine = new LatteMachine(123);
 console.log(latteMachine);

 latteMachine.makeCoffee();

 // 프로토타입은 상속 / 코드의 재사용에 사용한다.