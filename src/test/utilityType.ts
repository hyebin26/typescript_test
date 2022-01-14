// Utility Types
export const utilityTy = () => {
  // keyof
  interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
  }

  type UserKey = keyof User; // id | name | age | gender

  const uk: UserKey = "id"; // "hello" 키에 없어서 불가

  // Partial<T> 프로퍼티를 모두 옵션으로 바꿔줌

  interface User2 {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
  }

  const admin: Partial<User2> = {
    id: 1,
    name: "admin",
  };

  //Required<T> 모든 프로퍼티를 필수로 만듬

  interface User3 {
    id?: number;
    name?: string;
    age?: number;
    gender?: "m" | "f";
  }

  // const user3: Required<User3> = {
  //   id: 20,
  // };

  // Readonly<T>

  interface User4 {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
  }

  const user4: Readonly<User4> = {
    id: 1,
    name: "hyebin",
    age: 20,
    gender: "m",
  };

  //user4.age = 13; 불가

  // Record<K,T> k는 key T는 type

  interface Score {
    1: "A" | "B" | "C" | "F";
    2: "A" | "B" | "C" | "F";
    3: "A" | "B" | "C" | "F";
    4: "A" | "B" | "C" | "F";
  }

  type Grade = 1 | 2 | 3 | 4;
  type Good = "A" | "B" | "C" | "F";

  const score: Record<Grade, Good> = {
    1: "A",
    2: "B",
    3: "C",
    4: "F",
  };

  // Pick<T,K> type에서 K프로퍼티만 골라서 사용

  interface User5 {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
  }

  const admin2: Pick<User, "id" | "name"> = {
    id: 0,
    name: "Bob",
  };

  // Omit<T,K> 특정 프로퍼티를 생략할 수 있음

  interface User6 {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
  }

  const admin3: Omit<User6, "age" | "gender"> = {
    id: 0,
    name: "Bob",
  };

  // Exclude<T1,T2> 타입1에서 타입2을 제외하고 사용하는 방법
  // Omit과 다른점은 Omit은 프로퍼티생략하고 Exclude는 타입을 제외함

  type T1 = string | number | boolean;
  type T2 = Exclude<T1, number | boolean>;

  // NonNullable<Type> null,undefined을 제외한 타입을 생성함

  type T3 = string | null | undefined | void;
  type T4 = NonNullable<T3>;
};
