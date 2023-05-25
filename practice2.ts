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

type BatMan = {
  money: () => void
}
type SuperMan = {
  power: () => void
}
function isBat(hero: BatMan | SuperMan): hero is BatMan {
  return (hero as BatMan).money !== undefined;
}
const hero: BatMan = {
  money: () => console.log('I am rich')
}
function heroAction(hero: BatMan | SuperMan ){
  if (isBat(hero)) {
    hero.money();
  } else {
    hero.power();
  }
}

// petAction(pet)
/* 
  1. 模仿上述例子，实现一个类型守卫函数
*/


/* 
  2. 模仿例子实现一个类型提取，获取某个函数所有参数的类型
*/
// 例子：
// type FirstType<T extends unknown[]> = T extends [infer a, ...unknown[]] ? a : never;
// type first = FirstType<[1, 2]>;