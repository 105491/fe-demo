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
// const dog: Dog = {
//   bark: () => 'chenjiaping'
// }
// function petAction(pet: Fish | Dog ){
//   if (isFish(pet)) {
//     console.log(pet.swim());
//   } else {
//     console.log(pet.bark());
//   }
// }

// // petAction(pet)
// petAction(dog)
/* 
  1. 模仿上述例子，实现一个类型守卫函数
*/

type Student = {
  study: () => string;
}

type Teacher = {
  teach: () => string;
}

const job: Student = {
  study: () => '我是学生，我非常热爱学习'
}

const job2: Teacher = {
  teach: () => '我是老师，我非常喜欢教书'
}

function isStudent(job: Student | Teacher): job is Student {
  return (job as Student).study !== undefined
}

function jobAction(job: Student | Teacher) {
  if(isStudent(job)) {
    console.log(job.study());
  } else {
    console.log(job.teach());
  }
}

jobAction(job)
jobAction(job2)
/* 
  2. 模仿例子实现一个类型提取，获取某个函数所有参数的类型
*/
// 例子：
// type FirstType<T extends unknown[]> = T extends [infer a, ...unknown[]] ? a : never;
// type first = FirstType<[1, 2]>;


function test (val1: string, val2: number) {
  console.log(val1, '-', val2);
}

type funParamsType<T extends (...args: any) => any> = T extends (...args: infer P) => any 
                                                      ? P 
                                                      : never;
type result = funParamsType<typeof test>
