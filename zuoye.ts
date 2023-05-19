interface Item {
  id: number;
  uname: string;
  [key: string]: number | string;
}

const a:Item[] = [{id: 1, uname: '123'}, {id: 2, uname: '1234'}, {id: 3, uname: '1234'}]

export function uniquePush<T>(sourceItem: T, targetArray: T[], ident: keyof T) {
  let targetIndex = targetArray.findIndex(obj => obj[ident] === sourceItem[ident]);
  if (targetIndex === -1) {
    targetIndex = targetArray.length;
  }

  targetArray.splice(targetIndex, 1, sourceItem);
};
export function Push<T extends Item,U extends string >(targetArray: T[], ident: U) {
  for(let i = 0; i < targetArray.length; i++){
    for(let j = i + 1; j < targetArray.length; j++){
      if(targetArray[i][ident] === targetArray[j][ident]){
        targetArray.splice(j,1);
        j--;
      }
    }   
  }
};
uniquePush({id: 1, uname: 'dddd'}, a, 'id');
Push( a, 'uname')

/* 
  使用 ts 改写上述 js 代码
  1. 完成后的函数支持相应的类型提示
  2. 函数要通过泛型支持不同类型的元组去重 push
  3. 要对实例中的元数据进行类型定义
*/
export function demo (){
  console.log('test start')
}
