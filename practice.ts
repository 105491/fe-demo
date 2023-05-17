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
interface AType<T,U> {
  id:T;
  uname:U;
}
type _Arr1 = Array<AType<number,string>>
const a:_Arr1 = [{id: 1, uname: '123'}, {id: 2, uname: '1234'}, {id: 3, uname: '1234'}]
function uniquePush(sourceItem: AType<number,string>, targetArray: Array<AType<number,string>>, ident: string) {
  let targetIndex = targetArray.findIndex(obj => obj[ident] === sourceItem[ident]);
  if (targetIndex === -1) {
    targetIndex = targetArray.length;
  }

  targetArray.splice(targetIndex, 1, sourceItem);
};
uniquePush({id: 1, uname: 'dddd'}, a, 'id');
export function demo (){
  console.log('test start')
}