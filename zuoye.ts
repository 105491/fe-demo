// var a = [{id: 1, uname: '123'}, {id: 2, uname: '1234'}, {id: 3, uname: '1234'}]

//  export function uniquePush(sourceItem, targetArray, ident) {
//   let targetIndex = targetArray.findIndex(obj => obj[ident] === sourceItem[ident]);
//   if (targetIndex === -1) {
//     targetIndex = targetArray.length;
//   }

//   targetArray.splice(targetIndex, 1, sourceItem);
// };

// uniquePush({id: 1, uname: 'dddd'}, a, 'id');
// console.log(a);

/* 
  使用 ts 改写上述 js 代码
  1. 完成后的函数支持相应的类型提示
  2. 函数要通过泛型支持不同类型的元组去重 push
  3. 要对实例中的元数据进行类型定义
*/

interface IItem {
  id: number;
  name: string;
};

let sourceItem: IItem = {
  id: 1, 
  name: 'sss',
};

let targetArray: IItem[] = [
  {id: 1, name: '11'}, 
  {id: 2, name: '22'}, 
  {id: 3, name: '33'},
];

function uniquePush<T, S extends keyof T>(sourceItem: T, targetArray: T[], ident: S) {
  let targetIndex = targetArray.findIndex(obj => obj[ident] === sourceItem[ident]);
  if (targetIndex === -1) {
    targetIndex = targetArray.length;
  }
  targetArray.splice(targetIndex, 1, sourceItem);
};

uniquePush(sourceItem, targetArray, 'name');
console.log(targetArray);
