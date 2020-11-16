const oList=document.querySelector('#list1')
//ul的第二个元素子节点
 const oli=oList .firstElementChild.nextElementSibling
//  oli.cssText='border:1px solid red'
//float ==> cssFloat
//background-color  =>  backgroundColor
oli.style.backgroundColor='red'
oli.style.border='1px solid blue'

const comStyle=window.getComputedStyle(oli)//只读
console.log(comStyle)
console.log(comStyle.borderStyle)
