import { uniquePush, Item } from './practice';
type Arr = Item [];
let arr: Arr = [];
let item: Item = {
    id: 1,
    uname: '123'
}
uniquePush(item, arr, 'id');