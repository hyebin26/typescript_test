const genericTy = () => {
  // Generic

  const getSize = (arr: number[]): number => {
    return arr.length;
  };

  const genericGetSize = <T>(arr: T[]): number => {
    return arr.length;
  };

  getSize([1, 2, 3, 4]); // 4
  //getSize(["hello","my","world",]); // 해결하기 위해 generic 사용
  // 유니온 타입을 해서도 해결할 수 있지만 더 많은 타입이 들어올 수 도 있으므로
  genericGetSize<string>(["hello", "my", "world"]);
  genericGetSize<string | number>(["hello", 3, "world"]);

  interface Mobile<T> {
    name: string;
    price: number;
    option: T;
  }

  const samsung: Mobile<string> = {
    name: "samsung",
    price: 15000,
    option: "not apple",
  };

  const m1: Mobile<{ color: string; coupon: boolean }> = {
    name: "m1",
    price: 15000000,
    option: {
      color: "black",
      coupon: false,
    },
  };

  interface User {
    name: string;
  }

  interface Book {
    price: number;
  }

  interface Car {
    name: boolean;
  }

  const car: Car = { name: true };
  const user: User = { name: "hyebin" };
  const book: Book = { price: 15000 };

  const getName = <T extends { name: string }>(data: T): string => {
    return data.name;
  };

  getName(user);
  //   getName(book);
  //   getName(car);
};

export default genericTy;
