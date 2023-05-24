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
interface Circle {
  key: "circle";
  radius: number;
}

interface Square {
  key: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function isCircle(shape: Shape): shape is Circle {
  return shape.key === "circle";
}
function calculateArea(shape: Shape): number {
  if (isCircle(shape)) {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.sideLength * shape.sideLength;
  }
}
const pizza: Circle = {
  key: "circle",
  radius:8,
}
calculateArea(pizza)
/* 
  1. 模仿上述例子，实现一个类型守卫函数
*/


/* 
  2. 模仿例子实现一个类型提取，获取某个函数所有参数的类型
*/
// 例子：
// type FirstType<T extends unknown[]> = T extends [infer a, ...unknown[]] ? a : never;
// type first = FirstType<[1, 2]>;