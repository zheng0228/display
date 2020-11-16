const oButton1=document.querySelector('#myButton1')
const callback=function(){
    console.log('click')
}
//也可以直接写 oButton1.addEventListener('click',() =>{console.log('click')}) 但是不能重复使用
oButton1.addEventListener('click',callback)
//oButton1.onclick=callback() 只能用一次
//oButton1.addEventListener('click',() =>{console.log('click2')}) 可以添加多个事件监听器，而且都可以执行
// oButton1.addEventListener('click',() =>{console.log('click')})
// oButton1.addEventListener('click',() =>{console.log('click2')})
// oButton1.addEventListener('click',() =>{console.log('click3')})
// oButton1.removeEventListener('click',()=>{console.log('click2')})
oButton1.onclick=callback
oButton1.onclick=callback2
oButton1.onclick=null
oButton1.addEventListener('click',callback)
oButton1.addEventListener('click',callback2)
oButton1.removeEventListener('click',callback2)

