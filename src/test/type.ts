{
  let car: string = "bmw";
  // let car = "bmw"; 스트링으로 인식 타임추론
  // car = 3;

  let age: number = 30;
  let isAdult: boolean = true;
  let a: number[] = [1, 2, 3];
  let b: Array<string> = ["hello", "world"];

  // 튜플 (Tuple)
  let c: [string, number];

  c = ["z", 1];
  c[0].toLocaleLowerCase();
  //c[1].toLocaleLowerCase(); => X

  // void, never
  function sayHello(): void {
    console.log("hello");
  } // 리턴 X

  function showError(): never {
    throw new Error();
  }

  function infLoop(): never {
    while (true) {
      //do something
    }
  }

  // enum 비슷한 값들 끼리 묶어준 것

  enum Os {
    window = "window",
    ios = "ios",
    andriod = "andriod",
  }
  let myOs: Os; // Os값만 들어갈 수 있음

  // null, undefined
  let d: null = null;
  let e: undefined = undefined;
}
