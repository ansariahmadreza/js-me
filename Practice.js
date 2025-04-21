let btn = document.querySelector('.btn')


// btn.addEventListener('mousedown',function(){
//     console.log('mousedown')
// })



// btn.addEventListener('mouseenter',function(){
//     console.log('mouseenter')
// })

// btn.addEventListener('mouseleave',function(){
//     console.log('mouseleave')
// })

btn.addEventListener('mousemove', function () {
    console.log('mousemove')
})


// btn.addEventListener('mouseout',function(){
//     console.log('mouseout')
// })

// btn.addEventListener('mouseover',function(){
//     console.log('mouseover')
// })


// btn.addEventListener('mouseup',function(){
//     console.log('mouseup')
// })

document.body.insertAdjacentHTML('beforeend', '<div>salam</div>')


let objet = { id: 1, name: 'ahmadreza', age: 23, family: 'ansari' }


delete objet.age

console.log(objet)