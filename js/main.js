let box = document.querySelector('.box')
let boxtwo = document.querySelector('.box-two')
let submit = document.querySelector('.submit')
let button = document.querySelectorAll('.button li button')
let parg = document.querySelector('.pr span')
let two = document.querySelector('.two')
let back = document.querySelector('.back')


submit.addEventListener('click', ((e)=>{
    box.classList.add('hitting')
    boxtwo.classList.add('show')
}))

button.forEach((one) =>{
    one.addEventListener('click', (e) =>{
        parg.innerHTML = one.innerHTML
        
        

    })
})

    let array = Array.from(button)
    two.innerHTML = array.length


    back.onclick = function(){
        box.classList.remove('hitting')
        boxtwo.classList.remove('show')
    }