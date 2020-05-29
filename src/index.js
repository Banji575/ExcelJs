import module from './module'
import './scss/index.scss'
console.log('index.js')

async function test (){
    await Promise.resolve('test async')
}

test().then(res=>console.log(res))