const mainContainer=document.querySelector('.main-container')
const containers=document.querySelectorAll('.container')
const container1=document.querySelector('.container-1')

const lis=document.querySelectorAll('li')

mainContainer.addEventListener('mouseenter',()=>{
    mainContainer.classList.add('active')
    lis.forEach((li,index)=>{
        
        setTimeout(() => {
            
            sloweffect1(li)
        }, index*150);
    })
})
mainContainer.addEventListener('mouseleave',()=>{
    mainContainer.classList.remove('active')
    lis.forEach((li,index)=>{
        
        setTimeout(() => {
            
            sloweffect2(li)
        }, index*150);
    })
})

function sloweffect1(li){
    li.classList.add('ac')
}
function sloweffect2(li){
    li.classList.remove('ac')
}
