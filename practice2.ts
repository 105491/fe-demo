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

  type BigDemo = {
    big: () => void
  }
  type SmallDemo = {
    small: () => void
  }
  function isBigOrSmall(pet: BigDemo | SmallDemo): pet is BigDemo | SmallDemo {
    return (pet as BigDemo).big !== undefined || (pet as SmallDemo).small !== undefined;
  }


/* 
  2. 模仿例子实现一个类型提取，获取某个函数所有参数的类型
*/
// 例子：
// type FirstType<T extends unknown[]> = T extends [infer a, ...unknown[]] ? a : never;
// type first = FirstType<[1, 2]>;

type getFunctionDemo<T extends (...args: any[]) => any> = T extends (...args: infer A) => any ? A : never;
function testFunction(a: string, b: number, c: boolean) {
  return b + 666666; 
}
type TestFuncArgs = getFunctionDemo<typeof testFunction>; 