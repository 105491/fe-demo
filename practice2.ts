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
interface A1 {
  m1: 'one',
  m2: number
}

interface A2 {
  m1: 'two',
  m3: string
}

function getObjectKey(params: A1 | A2):string {
  const { m1 } = params

  switch (m1) {
    case 'one':
      return String((params as A1).m2)
    case 'two':
      return (params as A2).m3
  }
}


/* 
  2. 模仿例子实现一个类型提取，获取某个函数所有参数的类型
*/
// 例子：
// type FirstType<T extends unknown[]> = T extends [infer a, ...unknown[]] ? a : never;
// type first = FirstType<[1, 2]>;
type GetReturnValue<X> = X extends () => infer Value ? Value : never;

type AType = GetReturnValue<() => string>
type BType = GetReturnValue<() => number>