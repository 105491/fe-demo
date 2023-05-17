interface aObj<T,R> {
    id: T
    uname:R
}
var a: aObj<number,string>[] =[{id:1,uname:"123"},{id:2,uname:"1421"},{id:3,uname:"1234"},{id:4,uname:"1234"}]
export function uniquePush<T,R>(sourceItem: aObj<T ,R>, targetArray: aObj<T,R>[], ident: string): void{
    // targetArray.forEach(res=>{
    //     console.log(res,"res+++")
    // })
    let targetIndex:number = targetArray.findIndex(obj => obj[ident] === sourceItem[ident]);
    if (targetIndex === -1) {
        targetIndex = targetArray.length;
    }
    console.log(targetIndex,"targetIndex")
    targetArray.splice(targetIndex,1,sourceItem);
    console.log(targetArray,"targetArray")
}
uniquePush<number,string>({id:4,uname:'dddd'},a,'id')