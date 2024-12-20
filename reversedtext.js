var userbasket = [{ id: 1, name: 'pen', price: 5000 },
{ id: 2, name: 'book', price: 27500 },
{ id: 3, name: 'pencill', price: 24530 },
{ id: 4, name: 'laptop', price: 190000 },
{ id: 5, name: 'notebook', price: 324500 },
{ id: 6, name: 'table', price: 784000 },
]

// var sum=20

// console.log(Array.isArray(userbasket))



// console.log(Array.isArray(sum))


// console.log(userbasket.slice(''))
// console.log(userbasket.indexOf(''))
// console.log(userbasket.lastIndexOf(''))
// console.log(userbasket.reverse(''))

//var sum=username.split("    ")








var username = prompt('inter your name:')

var reversedText = username.split('').reverse().join('')


if (username === reversedText) {

    alert('معکوس متن یکسان است')


} else if (username != reversedText) {


    alert('معکوس متن یکسان نیست')


} else {

    alert('نه بازم اشتباه کردی')

}








