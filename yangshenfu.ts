type Aarr = {
    id: number,
    uname: string
}

const arr:Aarr[] =  [{ id: 1, uname: '123' }, { id: 2, uname: '1234' }, { id: 3, uname: '1234' }];

interface uniqueFun<T> {
    (sourceItem: T, targetArray: T[], ident: keyof T):void
}
const uniquePush1: uniqueFun<Aarr> = (sourceItem,targetArray,ident) => {
    let targetIndex = targetArray.findIndex(obj => obj[ident] === sourceItem[ident])
    if (targetIndex === -1) {
        targetIndex = targetArray.length;
    }
    targetArray.splice(targetIndex, 1, sourceItem);
    console.log('targetArray: ',targetArray)
}

uniquePush1({ id: 3, uname: "12"}, arr, 'id')