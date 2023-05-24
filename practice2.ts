// practice2.ts 作业 2
//
// type Fish = {
//   swim: () => void
// }
// type Dog = {
//   bark: () => void
// }
// function isFish(pet: Fish | Dog): pet is Fish {
//   return (pet as Fish).swim !== undefined;
// }
// const pet: Fish = {
//   swim: () => true
// }
// function petAction(pet: Fish | Dog ){
//   if (isFish(pet)) {
//     pet.swim();
//   } else {
//     pet.bark();
//   }
// }

// petAction(pet)
/* 
  1. 模仿上述例子，实现一个类型守卫函数
*/

interface Bird {
  fly: () => void;
}

interface Tiger {
  bite: () => void;
}

type Animal = Bird | Tiger;

function isTiger(animal: Animal): animal is Tiger {
  return "bite" in animal;
}

function animalAction(animal: Animal) {
  if (isTiger(animal)) {
    return animal.bite();
  } else {
    return animal.fly();
  }
}

const bigTiger: Tiger = {
  bite() {
    console.log("this is tiger");
  },
};

animalAction(bigTiger);

/* 
  2. 模仿例子实现一个类型提取，获取某个函数所有参数的类型
*/
// 例子：
type FirstType<T extends unknown[]> = T extends [infer a, ...unknown[]] ? a : never;
type first = FirstType<[1, 2]>;

function person(name: string, age: number, height: number) {}

type GetFnParams<T extends (...args: any) => any> = T extends (...args: infer R) => any
  ? R
  : never;

type PersonParams = GetFnParams<typeof person>;
