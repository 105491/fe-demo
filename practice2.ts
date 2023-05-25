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

type Shi = {
  fan: string,
  rou: string
}

type Code = {
  page: HTMLElement,
  iframe: DocumentFragment,
}

type Animal = {
  eat: () => Shi
}

type Gaolinwei = {
  writeCode: () => Code
}

function isPerson(person: Animal | Gaolinwei): person is Gaolinwei {
  return (person as Gaolinwei).writeCode !== undefined
}

const code: Code = {
  page: document.getElementById(''),
  iframe: document.createDocumentFragment(),
}

const person: Gaolinwei = {
  writeCode: () => code
}

const gaolinweiAction = (something: Animal | Gaolinwei) => {
  if(isPerson(something)) {
    something.writeCode()
  }else {
    something.eat()
  }
}

gaolinweiAction(person);

/* 
  2. 模仿例子实现一个类型提取，获取某个函数所有参数的类型
*/
// 例子：
// type FirstType<T extends unknown[]> = T extends [infer a, ...unknown[]] ? a : never;
// type first = FirstType<[1, 2]>;

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : number[]; 
type fn = () => string;
type fnReturnType = MyReturnType<fn>