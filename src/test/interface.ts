export const interfaceTy = () => {
  type Score = "A" | "B" | "C" | "F";
  console.clear();

  interface student {
    age: number;
    name: string;
    gender?: string;
    [grade: number]: Score;
    readonly birthYear: number;
  }

  const hyebin: student = {
    age: 2,
    name: "hyebin",
    1: "A",
    300: "B",
    birthYear: 30,
  };

  hyebin.age = 30;
  hyebin.gender = "male";
  // hyebin.birthYear = 30

  interface Add {
    (num1: number, num2: number): number;
  }

  const add: Add = (x, y) => {
    return x + y;
  };

  interface isAdult {
    (age: number): boolean;
  }

  const check: isAdult = (age) => {
    return age > 19;
  };

  // 인터페이스로 클래스 정의 => implements

  interface Car {
    color: string;
    wheels: number;
    start(): void;
  }

  class Bmw implements Car {
    color;
    wheels = 4;
    constructor(c: string) {
      this.color = c;
    }
    start() {
      console.log("..go");
    }
  }

  const b = new Bmw("green");
  console.log(b);
  b.start();

  // extends => 인터페이스 확장
  interface Benz extends Car {
    door: number;
    stop(): void;
  }

  const benz: Benz = {
    door: 4,
    stop() {
      console.log("...stop");
    },
    wheels: 4,
    color: "black",
    start: () => {
      console.log("..start");
    },
  };

  console.log(benz);
  benz.start();
};
