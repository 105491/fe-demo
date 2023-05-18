interface Aaa<T, U> {
    id: T,
    uname: U,
}

let bb: Aaa<number, string>[] = [
    { id: 1, uname: "123" },
    { id: 2, uname: "1234" },
    { id: 3, uname: "1234" },
]
function uniquePush<T, U>(sourceItem: Aaa<T, U>, targetArray: Aaa<T, U>[], ident: keyof Aaa<T,U>) {
    let targetIndex = targetArray.findIndex(obj => obj[ident] === sourceItem[ident])
    if (targetIndex === -1) {
        targetIndex = targetArray.length;
    }
    targetArray.splice(targetIndex, 1, sourceItem);
    return targetArray
}
const abb = uniquePush({ id: 1, uname: "12"}, bb, 'id')
console.log('abb：',abb)