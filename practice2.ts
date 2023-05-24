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

type 野蛮人 = {
  职业: '野蛮人',
  旋风斩: () => void
}
type 法师 = {
  职业: '法师',
  暴风雪: () => void
}
function 是野蛮人(角色: 野蛮人 | 法师): 角色 is 野蛮人{
  return 角色.职业 === '野蛮人';
}
function AOE(角色: 野蛮人 | 法师){
  if(是野蛮人(角色)){
    角色.旋风斩();
  } else {
    角色.暴风雪();
  }
}


/* 
  2. 模仿例子实现一个类型提取，获取某个函数所有参数的类型
*/
// 例子：
// type FirstType<T extends unknown[]> = T extends [infer a, ...unknown[]] ? a : never;
// type first = FirstType<[1, 2]>;


type ArgsTypes<T> = T extends (...args: infer P) => any ? P[number] : never
type X = ArgsTypes<(a: string, b: number) => boolean>