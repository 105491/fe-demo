interface SourceItem {
  id: number
  name: string
}

var arr:SourceItem[] = [
  { id: 1, name: '123' },
  { id: 1, name: '123' },
  { id: 1, name: '123' },
]

export function uniquePush<T>(sourceItem: T, targetArray: T[], ident: keyof T) {
  let targetIndex = targetArray.findIndex((obj) => obj[ident] === sourceItem[ident])
  if (targetIndex === -1) {
    targetIndex = targetArray.length
  }
  targetArray.splice(targetIndex, 1, sourceItem)
}
uniquePush<SourceItem>({ id: 1, name: 'dddd' }, arr, 'name')
