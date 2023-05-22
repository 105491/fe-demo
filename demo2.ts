// 联合类型 （union types）
type GameRegion = 'Asia' | 'America' | 'Europe'
type Age = 18 | 19 | 20 | 21

// 交叉类型 （intersection types）
type one = number;
type two = string | number;
type three = one & two

type Atype = {a: number}
type Btype = {b: string}
let AB: Atype | Btype = {a: 1}
let AandB: Atype & Btype = {a: 1, b: 'string'}


// 类型保护和类型守卫 （type guard）
interface A {a:1, a1:2}
interface B {b:1, b1:2}

function log(arg:A | B){
  // 报错:类型“A | B”上不存在属性“a”。类型“B”上不存在属性“a”
  // 结论：访问联合类型时，处于程序安全，仅能访问联合类型中的交集部分
  if(arg.a){
    console.log(arg.a1)
  } else {
    console.log(arg.b1);
  }
}


// 断言函数：定义一个函数，它的返回值是一个类型谓词，生效范围为子作用域
function getIsA(arg: A | B): arg is A {
  // if((arg as A).a) {
  //   return true;
  // } else {
  //   return false;
  // }

  // return (arg as A).a !== undefined;
  return !!(arg as A).a;

}
function log2(arg:A | B) {
  if (getIsA(arg)) {
    console.log(arg.a1)
  } else {
    console.log(arg.b1);
  }
}
// another
type Fish = {
  swim: () => void
}
type Dog = {
  bark: () => void
}

function isFish(pet: Fish | Dog): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
const pet: Fish = {
  swim: () => true
}
function petAction(pet: Fish | Dog ){
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.bark();
  }
}

petAction(pet)


// 高级类型 
// 索引类型 
interface Person {
  name: string
  age: number
}
type PersonKey = keyof Person // "name" | "age"

// 条件类型
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";

// 自定义运算符类型
type Nullable<T> = T | null
type NotNullable<T> = T extends null ? never : T

// 函数返回值类型
function funaa(a): void {
  if (a == 1) {
    console.log(a + 2);
  }
}

function errorFun(a): never{
  throw new Error(a);
}

let funee: (x: number, y: number) => number = (x, y) => x + y


// 其他类型
type IDelayCall =<T extends ()=> any>(func:T)=> ReturnType<T>
type IReturnType<T extends (...args:any)=>any> = T extends (...args:any)=>infer R? R: any
//关键字【extends】跟随泛型出现时，表示类型推断，其表达可类比三元表达式
//如T===判断类型？类型A：类型B
//关键字【infer】出现在类型推荐中，表示定义类型变量，可以用于指代类型
//如该场景下，将函数的返回值类型作为变量，使用新泛型表示，使用在类型推荐命中的结果中
