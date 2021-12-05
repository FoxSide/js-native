const todolistId_1 = 'klhgkhjl234234'
const todolistId_2 = '345hbkbh345'


const todolists = [
  {
    id: todolistId_1,
    title: 'What to learn',
    filter: 'all',
    // tasks: [
    //   {id: 12, title: 'HTML', isDone: true},
    //   {id: 13, title: 'CSS', isDone: true},
    //   {id: 14, title: 'JS/TS', isDone: true}
    // ]
  },
  {
    id: todolistId_2,
    title: 'What to buy',
    filter: 'all',
    // tasks: [
    //   {id: 22, title: 'Milk', isDone: true},
    //   {id: 23, title: 'Bread', isDone: true},
    //   {id: 24, title: 'Sosige', isDone: true}
    // ]
  }
]

const tasks = {
  [todolistId_1]: [
    {id: 12, title: 'HTML', isDone: true},
    {id: 13, title: 'CSS', isDone: true},
    {id: 14, title: 'JS/TS', isDone: true}
  ],
  [todolistId_2]: [
    {id: 22, title: 'Milk', isDone: true},
    {id: 23, title: 'Bread', isDone: true},
    {id: 24, title: 'Sosige', isDone: true}
  ]
}
console.log(tasks[todolistId_1])