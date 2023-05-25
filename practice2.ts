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

type Mike={
  byBike:() => void;
}

type Amy={
  driveCar:() => void;
}

function isAmy(people: Mike | Amy): people is Amy {
  return (people as Amy).driveCar !== undefined;
}

function meansOfTransportation(people: Mike | Amy){
  if(isAmy(people)){
    people.driveCar()
  }else {
    people.byBike()
  }
}

let mike:Mike={
  byBike:() => {
    console.log('骑自行车')
  }
}
meansOfTransportation(mike)

/* 
  2. 模仿例子实现一个类型提取，获取某个函数所有参数的类型
*/
// 例子：
// type FirstType<T extends unknown[]> = T extends [infer a, ...unknown[]] ? a : never;
// type first = FirstType<[1, 2]>;

type InferParameters<T extends Function> = T extends (...args: infer R) => any ? R : never;
type inferTest = InferParameters<((arg1: string, arg2: number) => void)>; // [string, number]

let arrTest:inferTest=['1',1];