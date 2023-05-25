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


type Vue = {
  id: string,
  getVue: () => void
}

type React = {
  id: number,
  getReact: () => void
}

function isVue(frame: Vue | React): frame is Vue {
  return typeof (frame as Vue).id === 'string';
}

const frame: Vue = {
  id: "Vue",
  getVue: () => console.log("Hello Vue")
}

function getFrame(frame: Vue | React) {
  if (isVue(frame)) {
    frame.getVue()
  } else {
    frame.getReact()
  }
}

getFrame(frame);


/* 
  2. 模仿例子实现一个类型提取，获取某个函数所有参数的类型
*/
// 例子：
// type FirstType<T extends unknown[]> = T extends [infer a, ...unknown[]] ? a : never;
// // type first = FirstType<[1, 2]>;

type paramType<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A[number] : never;
type param = paramType<(name: string, id: number, obj: Object) => any>