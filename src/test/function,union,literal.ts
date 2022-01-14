const functionTy = () => {
  // 함수
  const hello = (name?: string): string => {
    return `hello, ${name || "world"}`;
  };

  const hello2 = (name = "world") => {
    return `hello, ${name || "world"}`;
  };

  const result = hello();
  const result2 = hello2("hyebin");
  //console.log(result);
  //console.log(result2);

  // 전달받은 매개변수를 배열로 나타낼 수 있음(...nums);
  const add = (...nums: number[]) => {
    return nums.reduce((result, num) => result + num, 0);
  };

  console.log(add(1, 2, 3, 4));

  // Literal types

  const userName1 = "Bob"; // const처럼 변하지 않는 값 => 리터럴 문자열 값
  let userName2 = "Tom";

  type Job = "police" | "developer" | "teacher";

  interface User {
    name: string;
    job: Job;
  }

  const user: User = {
    name: "Bob",
    job: "developer",
  };

  // Union type

  interface Car {
    name: "car";
    color: string;
    start(): void;
  }

  interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
  }

  // 식별가능한 union type
  const getGift = (gift: Mobile | Car) => {
    if (gift.name === "car") {
      gift.start();
    } else {
      gift.call();
    }
  };

  // Intersection Types

  interface Car2 {
    name: string;
    start(): void;
  }

  interface Toy {
    name: string;
    color: string;
    price: number;
  }

  const toyCar: Toy & Car2 = {
    name: "타요",
    start() {},
    price: 1000,
    color: "blue",
  };
};

export default functionTy;
