// practice2.ts 作业 2
// 
type Fish1 = {
  swim: () => void
}
type Dog1 = {
  bark: () => void
}
function isFish(pet: Fish | Dog): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
const pet1: Fish = {
  swim: () => true
}
function petAction(pet: Fish | Dog ){
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.bark();
  }
}

petAction(pet1)
/* 
  1. 模仿上述例子，实现一个类型守卫函数
*/
type Tomato = {
  color: string;
  weight: number;
  subjects: string;
};

type Volume = {
  width: number;
  length: number;
  height: number;
};

function isArea(quantity: Tomato | Volume): quantity is Tomato {
  return (quantity as Tomato).color !== undefined
}

function getArea(quantity: Tomato | Volume) {
  if (isArea(quantity)) {
    return quantity.color + quantity.weight+quantity.subjects;
  } else {
    return quantity.width * quantity.length * quantity.height;
  }
}

const tomato: Tomato = { color: 'red', weight: 10,subjects:'Magnoliopsida' };
const volume: Volume = { width: 3, length: 5, height:10 };

/* 
  2. 模仿例子实现一个类型提取，获取某个函数所有参数的类型
*/
// 例子：
type FirstType<T extends unknown[]> = T extends [infer a, ...unknown[]] ? a : never;
type first = FirstType<[1, 2]>;
const a: first = 1

type paramsType<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

function exampleFn(arg1: number, arg2: string, arg3: boolean, arg4:null): void {
  console.log(arg1, arg2, arg3, arg4);
}

type ExampleParams = paramsType<typeof exampleFn>;

const params: ExampleParams = [1, 'test', true, null];