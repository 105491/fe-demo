// var a = [{id: 1, uname: '123'}, {id: 2, uname: '1234'}, {id: 3, uname: '1234'}]

// export function uniquePush(sourceItem, targetArray, ident) {
//   let targetIndex = targetArray.findIndex(obj => obj[ident] === sourceItem[ident]);
//   if (targetIndex === -1) {
//     targetIndex = targetArray.length;
//   }

//   targetArray.splice(targetIndex, 1, sourceItem);
// };

// uniquePush({id: 1, uname: 'dddd'}, a, 'id');

/* 
  使用 ts 改写上述 js 代码
  1. 完成后的函数支持相应的类型提示
  2. 函数要通过泛型支持不同类型的元组去重 push
  3. 要对实例中的元数据进行类型定义
*/
export function demo (){
  console.log('test start')
}


type aT = {
  id:number;
  uname:string;
}

const a:aT[] = [{id: 1, uname: '123'}, {id: 2, uname: '1234'}, {id: 3, uname: '1234'}];

type Item = {[K in string | number]: string | number}
function uniquePush<T>(sourceItem:T,targetArray: T[], ident: keyof T):void;
function uniquePush<T extends Item, U extends T>(sourceItem: U, targetArray: U[], ident: keyof T): void {
  let targetIndex = targetArray.findIndex((obj: any) => obj[ident] === sourceItem[ident]);
  if (targetIndex === -1) {
    targetIndex = targetArray.length;
  }
  targetArray.splice(targetIndex, 1, sourceItem);
}
