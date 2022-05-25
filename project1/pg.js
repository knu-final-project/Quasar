// 주석 알아요 

const { resolve } = require("core-js/fn/promise")

/*
긴주석
입니다
네
*/

// 출력
console.log('hello world!')
console.error('error is...')


//변수선언
var v1 = 1
let l1 = 2
const c1 = 3
console.log('var', v1,l1,c1)

// 데이터 형식
let a = 3 // 숫자
a = -3.3 //  소숫점 숫자
a = "문자"
a = "쌍따옴표"
a = "33"
a = Number(a)

console.log('data', a)
console.log('data','type',typeof a)

let b = 1
let c = a+b + 'more'
a = null

console.log(c)

console.log(a)

let u

console.log('type', typeof u)


// 조건 
const ca = 4, cb = 5
if  (ca > cb) console.log('con','good')
else if (ca == cb) console.log('con', 'equal')
else console.log('con','bad')

// array 배열

const ar = [1,2,3]
console.log('ar', ar)
console.log('ar',ar.pop(), ar)
console.log('ar',ar.shift(), ar)
console.log('ar',ar.push(1), ar)
console.log('ar',ar.unshift(0),ar)
console.log('ar',ar.indexOf(2)) //값의 인덱스 찾기

// function

function sum(a,b)
{
  return a+b
}

console.log('func', 'sum', sum(1,2))

const multi = (a, b) => {
  return a * b
}

console.log('func','multi',multi(3,4))


// object : JSON...
const obj = {
  a: 1,
  b: '한글',
  c:[1,2,3],
  d:{
    a : 2,
    b: null
  },
  e: function(){
    console.log('obj','func')
    return 'good func'
  }
}

console.log('obj',obj)
console.log(obj.a)

obj.a = 123

console.log('obj',obj.a)


const obj2 = obj

console.log('obj',obj2)
obj.a = 44
console.log('obj')
const obj3 = Object.assign({}, obj)

obj3.a = 55


// 반복문 iteratior

const ts = []
for (let i = 0; i < 3; i++ )
{
  ts.push(i)
}
console.log('it',ts)


for (let i  = 0 ; i  < ts.length ; i++ )
{
  ts[i] += 'add'
}
console.log('it',ts)

let str = ''
for (const t of ts) {
  str += t + 'of'
}
console.log('it',str)


str = ''

//ts.forEach 는 알고만있자잉

const result = ts.map((t,i) => {
  return {
    name: '${i} n', value : t
  }
  
})

console.log('it', result)



//spread 
/*
spread -> 생소하지만 지금은 많이 쓰인다.
*/
const sums = [4,5]
console.log('sp',...sums)

console.log('sp',sum(...sums))

const as = [1,2,3]
const bs = [4,5,6]

let cs = as.concat(bs)
console.log('sp',cs)


cs = [...as,...bs]

console.log('sp',cs)


const o1 = {a:1,b:2}

const o2 = {...o1}
o2.a = 33
console.log('sp',o2)
console.log('sp',o1)


// promise

const foo1 = () => {
  console.log('pr', 'job1')
  setTimeout(() => {
    console.log('pr','job2')

  }, 1000)
  console.log('pr','job3')
}
foo1()


const pr = new Promise((resolve) => {
  setTimeout(() => {
    resolve('job2')
  }, 1000)
  
})