console.log('30DaysOfJavascript~externalJS')

function fromBeginToTheEnd () {
  let arr = []
  for ( let i = 0 ; i < 1000 ; i ++ ) {
    arr.push(i)
  }
}

/**
 * time: 从0项开始 >从末项开始
 */
function fromEndToBegin () {
  let arr = []
  for (let i = 1001 ; i > 1 ; i -- ) { 
    arr.push(i)
  }
}

function whileLoopFromEnd () {
  let arr = []
  let i = 1001
  while (i > 1) {
    i --
    arr.push(i)
  }
}

function whileLoopFromBegin () {
  let arr = []
  let i = 0
  while (i < 1001) {
    i ++
    arr.push(i)
  }
}

function doWhileFromBegin () {
  let i = 0,arr = []
  do {
    i ++
    arr.push(i)
  } while (i < 10 );
}

function doWhileFromEnd () {
  let i = 11,arr = []
  do {
    i --
    arr.push(i)
    console.log(('*'.repeat(i)))
  } while (i > 1 );
}

console.time('fromBeginToTheEnd')
fromBeginToTheEnd()
console.timeEnd('fromBeginToTheEnd')

console.time('fromEndToBegin')
fromEndToBegin()
console.timeEnd('fromEndToBegin')

console.time('whileLoopFromEnd')
whileLoopFromEnd()
console.timeEnd('whileLoopFromEnd')

console.time('whileLoopFromBegin')
whileLoopFromEnd()
console.timeEnd('whileLoopFromBegin')

console.time('doWhileFromBegin')
doWhileFromBegin()
console.timeEnd('doWhileFromBegin')

console.time('doWhileFromEnd')
doWhileFromEnd()
console.timeEnd('doWhileFromEnd')



/**
 * 浅拷贝object
 * 取keys
 * 取values
 * 将keys\values放进数组
 * 检查Object是否含有某属性
 */
const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

const copyPerson = Object.assign({},person)
console.log(copyPerson,"copyPerson")

const keys = Object.keys(copyPerson)
console.log(keys,"keys")
const values = Object.values(copyPerson)
console.log(values,"values")
const entries = Object.entries(copyPerson)
console.log(entries,'entries')

console.log(copyPerson.hasOwnProperty('age'))


/**
 * Set
 * 会自动去重
 */
 const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
 const setOfNumbers = new Set(numbers)
 
 console.log(setOfNumbers)

 const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const users = []
for (let [first,second,third] of students) {
    console.log(first,second,third)
    let obj = {
      name: first,
      skills: second,
      scores: third
    }
    users.push(obj)
}
console.log(users,'users')
