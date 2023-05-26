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

// 作业成果
type Boy = {
  run: () => void
}
type Girl = {
  dance: () => void
}
function isBoy(person: Boy | Girl): person is Boy {
  return (person as Boy).run !== undefined;
}
const boy: Boy = {
  run: () => console.log('百米9秒')
}
function personAction(person: Boy | Girl) {
  if (isBoy(person)) {
    person.run()
  } else {
    person.dance()
  }
}

/* 
  2. 模仿例子实现一个类型提取，获取某个函数所有参数的类型
*/
// 例子：
// type FirstType<T extends unknown[]> = T extends [infer a, ...unknown[]] ? a : never;
// type first = FirstType<[1, 2]>;

// 作业成果
type GetFuncPropsType<T extends (...arg: unknown[]) => any> = T extends (...arg: infer a) => any ? a : never

// 测试
type propsArr = GetFuncPropsType<typeof func>
function func(aa: number, b: string): void { }

function test(...arg: propsArr): number {
  return arg[0]
}
test(2, '3')