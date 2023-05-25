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
type Cat = {
  eatFish: () => void
}
type Bird = {
  fly: () => void
}
function isBird(pet: Cat | Bird): pet is Bird {
  return (pet as Bird).fly !== undefined;
}
function petAction(pet: Cat | Bird ){
  if (isBird(pet)) {
    pet.fly();
  } else {
    pet.eatFish();
  }
}
let pet1:Bird = {
  fly: ()=>{
    console.log('i can fly');
  }
}
petAction(pet1)
/* 
  2. 模仿例子实现一个类型提取，获取某个函数所有参数的类型
*/
// 例子：
// type FirstType<T extends unknown[]> = T extends [infer a, ...unknown[]] ? a : never;
// type first = FirstType<[1, 2]>;
 