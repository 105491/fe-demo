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

type Human = {
  name: string;
  BMI: () => number;
};
type Animal = {
  name: string;
  sun: () => string;
};
function isHuman(pet: Human | Animal): pet is Human {
  return (pet as Human).BMI !== undefined;
}
const father: Human = {
  name: 'father',
  BMI: () => 65 / Math.pow(1.75, 2),
};
const cat: Animal = {
  name: 'cat',
  sun: () => '跑',
};
function petAction(pet: Human | Animal) {
  if (isHuman(pet)) {
      console.log('human--', pet.name, pet.BMI());
      return pet.BMI();
  } else {
      console.log('animal--', pet.name, pet.sun());
      return pet.sun();
  }
}
petAction(father);
petAction(cat);

/*
  2. 模仿例子实现一个类型提取，获取某个函数所有参数的类型
*/
// 例子：
// type FirstType<T extends unknown[]> = T extends [infer a, ...unknown[]] ? a : never;
// type first = FirstType<[1, 2]>;

type HumanFn<T extends Function> = T extends (...options: infer A) => void ? A : never
type first = HumanFn<((age: number, name: string) => void)>