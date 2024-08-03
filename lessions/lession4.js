//Functions
// 1) Declrative Function
function helloOne(){
    console.log("Hello One")
}
 helloOne()
//2) Anoymus Function
var hellowTwo= function(){
    console.log("Hello Two")
}
hellowTwo()
//3) ES6 Function or Arrow function 
var helloThree= ()=>{
    console.log("HelloThree")
}
helloThree()
//4) Function with Argument
function myName(name){
    console.log(name)

}
myName('SatheesKumar')
function myFullName(name, intial){
    console.log(name+" "+intial)
}
myFullName('Sathees Kumar','R')
//5)Function wit Return
function multiplyByTwo(num){
    var result=num*2
    return result
}
let myResult=multiplyByTwo(5)
console.log(myResult)
console.log(helper.weigt)
//6)Import function
import { total } from "../helper/helper1.js"
console.log(total)
// 7) Import everything
import * as helper from '../helper/helper1.js'
helper.calculation(2)
//getting particular variable value from other folder
console.log(helper.hight)