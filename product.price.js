var products = [{ id: 1, nameproduct: 'apple', Productprice: 215 },
{ id: 2, nameproduct: 'grape', Productprice: 1245 },
{ id: 3, nameproduct: 'Banana', Productprice: 4578 },
{ id: 4, nameproduct: 'phone', Productprice: 4578000 },
{ id: 5, nameproduct: 'laptop', Productprice: 4000 },
{ id: 6, nameproduct: 'smartphon', Productprice: 1274 },
{ id: 7, nameproduct: 'miband', Productprice: 190000 },
{ id: 8, nameproduct: 'book', Productprice: 100000 },
{ id: 9, nameproduct: 'pen', Productprice: 150000 }, ]


var userbasket = [{ id: 1, nameproduct: 'smartphone', Productprice: 1274 },
{ id: 2, nameproduct: 'pen', Productprice: 150000 },
{ id: 3, nameproduct: 'book', Productprice: 100000 },
]



var userproduct = prompt('ENTER YOUR  PRODUCT:')
var priceuser = Number(prompt('ENTER YOUR  PRODUCT:'))



var isinshop = products.some(function (product) {
    return product.nameproduct == userproduct
})


if (isinshop === true) {

    var newproduct=[{
        id:4,
        nameproduct:userproduct,
        Productprice:priceuser,

    }]

    
    userbasket.push(newproduct)
    //console.log(userbasket)


var sum=0

    userbasket.forEach(function(product){
        sum+= priceuser
        
    })

    console.log(userbasket)
    alert(sum)
} else {

    console.log('محصول وجود ندارد')
}