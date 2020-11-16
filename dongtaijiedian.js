const oList=document.querySelector("#list1")
const oliElement=document.createElement("li")
const oTextNode=document.createTextNode("swife")
oliElement.appendChild(oTextNode)
// oliElement.textContent='swife'
// oList.append(oliElement)
oList.appendChild(oliElement)
oList.prepend(oliElement)


// //插入成第二个节点
// oList.firstElementChild.after(oliElement)
// //插入倒数第二个子节点
// oList.lastElementChild.before(oliElement)
// //删除最后的子节点(自己删除自己)
// oList.lastElementChild.remove()
// //替换javascript子节点
// oList.lastElementChild.previousElementSibling.replaceWith(oliElement)


oList.lastElementChild.classList.add('list1')
oList.lastElementChild.previousElementSibling.classList.add('list')
oList.lastElementChild.classList.add('list1')
oList.addEventListener('mouseover',(Event) =>{
    Event.target.classList.toggle('list1')
})