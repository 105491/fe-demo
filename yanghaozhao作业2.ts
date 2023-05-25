type aType = {
  cns: () => void,
    avalue:number
}
type bType = {
  select: () => void
}
function isAType(cInit: aType | bType): cInit is aType{
  return (cInit as aType).cns !== undefined;
}
const cInit: aType = {
    cns: () => {console.log(123321)},
    avalue:1
}
function petAction(cInit: aType | bType ){
  if (isAType(cInit)) {
    cInit.cns();
  } else {
    cInit.select();
  }
}

petAction(cInit)