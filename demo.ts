// string 字符串
const s: string = 'a'
// number 数字
const n: number = 1
// bool 布尔值
const b: boolean = true
// null
const nu: null = null
// undefined
const ul: undefined = undefined

interface IGameInfo {
  // 只读属性： 不可在对象初始化外赋值
  readonly name: string
  saleTime: string
  price: string
  platform: 'switch' | 'xbox' | 'playstation'
  // 可选属性
  type?: string
  // 任意属性
  [key: string]: any
}

let zelda: IGameInfo = {
  // 缺少 name 属性会报错
  saleTime: '2023/05/12',
  price: '$180',
  platform: 'switch',
  // type 为可选属性，
}

// 只读属性：二次修改会报错
zelda.name = 'zeleda2'

zelda.type = 'rpg'



// 数组类型
// 类型+方括号
type Arr1 = number[]
// 数组泛型
type Arr2 = Array<string | number | Record<string,number>>
// 元组
type Arr3 = [string, number, null, string]
// 接口
interface Arr4 {
  [key: number]: number
}

const arr1:Arr1 = [1, 2, 3, 4, 5]
const arr2:Arr2 = [1, 2, '3', '4', {a:1}];
const arr3:Arr3 = [1, 2, null, '4'];
const arr4:Arr4 = ['string', ()=>null, {}, []];

// type or interface
type Nnt = string | number
type Nnt = number

interface IFfn {
  a: number
}
interface IFfn {
  b: string
}

const ffn: IFfn = {
  a: 1,
  b: '2'
}
// 类型别名 与 类型断言
// 通过type关键字定义了IObjArr的别名类型
type ObjArr = Array<{
  key:string;
  [objKey:string]:any;
}>
function keyBy<T extends ObjArr>(objArr:Array<T>) {
  // 未指定类型时，result类型为{}
  const result = objArr.reduce((res,val,key)=>{
    res[key] = val;
    return res;
  },{})
  // 通过as关键字，断言result类型为正确类型
  return result as Record<string,T>;
}


//函数类型
function funaa (a) {
  return a;
}

const fundd = (x, y) => x * y

function funa (a: string): string {
  return a;
}

const fund = (x: number, y: number ): number => x * y

interface Ifun {
  (x: string, y: string ): string
}

const fune: Ifun = (x, y) => x + y

// 函数重载
declare function funb (a: string, b: string): string
declare function funb (a: string, b?: number): number
funb('1','2')

// 有一个实现签名 + 一个或多个重载签名合成
// 但外部调用函数重载定义的函数时，只能调用重载签名，不能调用实现签名
// 调用重载签名的函数时，会根据传递的参数来判断你调用的是哪一个函数
// 只有一个函数体，只有实现签名配备了函数体，所有的重载签名都只有签名， 没有配备函数体
function func(a: number): number
function func(a: number): string
function func(a: number, b: string ):number | string
function func(a: number, b?: string ):number | string {
  return a + b;
}

func(1)

type MessageType = 'image' | 'vedio' | string

type Message = {
    id: number,
    type: MessageType,
    sendMessage: string
}

let message:Message[]  = [
    {
        id: 1,
        type: 'image',
        sendMessage: '塞尔达是天'
    },
]
function getMessage(type: number):Message 
function getMessage(type: MessageType, readNum: number):Message[] 
function getMessage (type: any, readNum: number = 2 ):Message | Message[] | undefined {
    if(typeof type === "number") {
      return  message.find((v)=> v.id === type)
    } else {
      return  message.filter((v)=> v.type === type).splice(0, readNum)
    }
}

// 将这个函数返回的值转换成我们一直定义函数的返回值
console.log(getMessage("image", 3));


// 空类型, 表示无赋值
type EmptyFunction = () => void
// 任意类型，是所有类型的子类型
type AnyType = any
// 枚举类型：支持枚举值到枚举名的正、反向映射
enum EnumExample {
  add = '+',
  mult = '*'
}
EnumExample['add'] === '+'
EnumExample['+'] === 'add';
enum ECorlor { Mon,Tue,Wed,Thu,Fri,Sat,Sun }
ECorlor['Mon'] === 0;
ECorlor[0] === 'Mon'
// 泛型
type NumArr = Array<number>


// 泛型类型
function getRepeatArr(target){
  return new Array(100).fill(target);
}
type GetRepeatArr = (target:any) => any []
// 不预先指定具体的类型，而在使用的时候再指定类型的一种特性
type GetRepeatArrR<T> = (target:T) => T[];

// 泛型接口&多泛型
interface IX<T,U> {
  key:T;
  val:U;
}

// 泛型类
class Man<T> {
  instance:T;
}
// 泛型别名
type TypeArr<T> = Array<T>;

// 泛型约束：限制泛型必须符合字符串
type GetRepeatStringArr = <T extends string>(target:T) => T[]
const getstrArr:GetRepeatStringArr = (target) => new Array(100).fill(target)
// 报错：类型“number"的参数不能赋给类型“"string”的参数
getstrArr(123)

// 泛型参数默认类型
type GetRepeatArr1<T = number> = (target:T) => T[]
const getRepeatArr1: GetRepeatArr1 = (target) => new Array(100).fill(target)
// 报错：类型“string"的参数不能赋给类型“number"的参数
getRepeatArr1('123');




