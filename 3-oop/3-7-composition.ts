{
    // 상속의 문제 : 깊이가 깊어질 수록 복잡해짐
    // 부모 변경 시 자식 class에 영향을 미침
    // 1개만 상속 가능.
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
    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance (object) level

        constructor(
            beans: number, 
            private milk: milkFrother, 
            private sugar: sugarProvider
        ) {
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

        private extract(shots:number): CoffeeCup {
            console.log(`pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false,
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }
    }

    interface milkFrother {
        makeMilk(cup: CoffeeCup) : CoffeeCup;
    }

    interface sugarProvider {
        addSugar(cup: CoffeeCup) : CoffeeCup;
    }

    // 싸구려 우유 거품기
    class CheapMilkSteamer implements milkFrother {
        private steamMilk() : void {
            console.log('steaming some milk...');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk : true,
            };
        }
    }
    class FancyMilkSteamer implements milkFrother {
        private steamMilk() : void {
            console.log('Fancy steaming some milk...');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk : true,
            };
        }
    }
    class ColdMilkSteamer implements milkFrother {
        private steamMilk() : void {
            console.log('Cold steaming some milk...');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk : true,
            };
        }
    }

    class NoMilk implements milkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    // 설탕 제조기
    class candySugarMixer implements sugarProvider {
        private getSuger() {
            console.log('Getting some sugar from candy');
            return true;
        }
        
        addSugar(cup: CoffeeCup) : CoffeeCup {
            const sugar = this.getSuger();
            return {
                ...cup,
                hasSugar: sugar,
            }
        }
    }
    class SugarMixer implements sugarProvider {
        private getSuger() {
            console.log('Getting some sugar from Jar!!!');
            return true;
        }
        
        addSugar(cup: CoffeeCup) : CoffeeCup {
            const sugar = this.getSuger();
            return {
                ...cup,
                hasSugar: sugar,
            }
        }
    }
    class NoSugar implements sugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }


    // milk
    const CheapMilkmaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();

    // sugar
    const candySugar = new candySugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();

    //
    const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
    const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

    const latteMachine = new CoffeeMachine(12, CheapMilkmaker, noSugar);
    const ColdLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);

    const sweetLatteMachine = new CoffeeMachine(12, CheapMilkmaker, candySugar);
}