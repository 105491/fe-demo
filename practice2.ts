// practice2.ts 作业 2
// 
// type Fish = {
//   swim: () => void
// }
// type Dog = {
//   bark: () => void
// }
// function isFish(pet: Fish | Dog): pet is Fish {
//   return (pet as Fish).swim !== undefined;
// }
// const pet: Fish = {
//   swim: () => true
// }
// function petAction(pet: Fish | Dog ){
//   if (isFish(pet)) {
//     pet.swim();
//   } else {
//     pet.bark();
//   }
// }

// petAction(pet)
/* 
  1. 模仿上述例子，实现一个类型守卫函数
*/
type boy = {
    sex:'男',
    age: number,
  }
  type girl = {
    sex:'女',
    age: number
  }
  const stu:boy={
    sex:'男',
    age:12
  }
  
  function isBoy(stu: boy | girl): stu is boy {
    return stu.sex === '男'
  }
  function speech(stu: boy | girl){
    if(isBoy(stu)){
      console.log('我是一个'+stu.age+'岁的男同学')
    }else{
      console.log('我是一个'+stu.age+'的女同学')
    }
  }
  speech(stu)
  /* 
    2. 模仿例子实现一个类型提取，获取某个函数所有参数的类型
  */
  // 例子：
  // type FirstType<T extends unknown[]> = T extends [infer a, ...unknown[]] ? a : never;
  // type first = FirstType<['1',2]>;