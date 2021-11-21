const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 120,
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 85
  },
  {
    name: "Michel",
    age: 20,
    isMarried: false,
    scores: 89
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100
  }
]

// веренуть массив имён

const getName = st => st.name
const test = students.map(getName)
console.log(test)

function map (array, fn) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    result[i] = fn(array[i])
  }
  return result
}

console.log(map(students, getName))

// филтруем по возрасту 21+

const filterAge = students.filter(st => st.age >= 21)
console.log(filterAge)

function filter(array, fn) {
  const result = []
  for ( let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      result.push(array[i])
    }
  }
  return result
}

console.log(filter(students, st => st.age >= 21))

// поиск вхождения "Боб"

function find(array, fn) {
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      return array[i]
    }
  }
}

console.log(find(students, st => st.name === 'Bob'))

//изменение определённого значение ключа в об.

console.log(students.map(st => ({...st, isStudent: true})))

console.log(students.map(st => {
  if(st.name === 'John') {
    return {...st, isMarried: true}
  } else {
    return st
  }
}))