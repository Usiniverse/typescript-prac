{
    type CoffeeCup = {
        shots: number;
        hasMilk? : boolean;
        hasSugar? : boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    // public : 스코프 밖에서도 접근 가능
    // private : 접근 불가능. class안에서만 사용
    // protected : 상속 class에서만 사용 가능
    // abstract : 추상적으로 구현. 객체 생성 불가능
    abstract class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance (object) level

        constructor(beans: number) {
            this.coffeeBeans = beans;
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans; 
        }

        clean() {
            console.log('cleaning the machine...');
        }

        private grindBeans(shots:number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up...');
        }

        protected abstract extract(shots:number): CoffeeCup;

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }


    class CaffeeLatteeMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans);
        }
        private steamMilk() : void {
            console.log('steaming some milk...');
        }
        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
            return {
                shots,
                hasMilk: true
            }
        }
    }


    class SweetCoffeeMaker extends CoffeeMachine {
        protected extract(shots: number): CoffeeCup {
            return {
                shots,
                hasSugar: true
            }
        }
    }

    const machines: CoffeeMaker[] = [
        new CaffeeLatteeMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CaffeeLatteeMachine(16, '1'),
        new SweetCoffeeMaker(16)
    ]
    machines.forEach(machine => {
        console.log('----------------------');
        machine.makeCoffee(1);
    })
}