var userbasket = [{ id: 1, name: 'pen', price: 5000 },
{ id: 2, name: 'book', price: 27500 },
{ id: 3, name: 'pencill', price: 24530 },
{ id: 4, name: 'laptop', price: 190000 },
{ id: 5, name: 'notebook', price: 324500 },
{ id: 6, name: 'table', price: 784000 },
]

//code me
post = 1000

var sum = 0


var userbasketmap = userbasket.map(function (item) {


    if (item.price < 100000) {

        sum += item.price + post
        return sum

    }

})

console.log(sum)

var userbasketfilter = userbasket.filter(function (product) {


    return product.price > 100000


})

console.log(userbasketfilter)
console.log('هزینه پست برای محصولات بالای 100 هزار تومان رایگان است')









//code pc


var filteredproduct = userbasket.filter(function (items) {


    return items.price < 100000


})

var postcast = filteredproduct.length * 1000

var sum = 0

filteredproduct.forEach(function (product) {

    sum += product.price


})

var totalprice=postcast + sum


console.log(totalprice)