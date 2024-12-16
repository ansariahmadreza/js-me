var shop = [{ id: 1, name: 'pen', price: 5000 },
{ id: 2, name: 'book', price: 27500 },
{ id: 3, name: 'pencill', price: 24530 },
{ id: 4, name: 'laptop', price: 190000 },
{ id: 5, name: 'notebook', price: 324500 },
{ id: 6, name: 'table', price: 784000 },
{ id: 7, name: 'key', price: 985000 },
{ id: 8, name: 'oil', price: 65400 },
{ id: 9, name: 'glass', price: 53540 },
]
var Shoppingcart = [

    { id: 1, name: 'key', price: 985000 },
    { id: 2, name: 'oil', price: 65400 },
    { id: 3, name: 'glass', price: 53540 },
]

var userrequest = prompt('1.add product: \n 2.remove product:')  //منوی نمایش داده شده به کاربر برای انتخاب گزینه حذف یا اضافه کردن محصول

if (userrequest === '1') {  //بخش اضافه کردن محصول

    let productusername = prompt('inter name product:')

    var productdata;
    let isinshop = shop.some(function (product) {
        if (product.name == productusername) {
            productdata = product
            return true
        }
    })

    if (isinshop === true) { // قسمت اضافه کردن ابجکت جدید به ارایه
        let newproduct = [{
            id: 4,
            name: productdata.name,
            price: productdata.price,

        }]
        Shoppingcart.push(newproduct)

        console.log(Shoppingcart)
    } else {

        alert('همچین محصولی وجود ندارد')

    }

} else if (userrequest === '2') {   //بخش حذف محصول

    productusername = prompt('inter name product:')

    productdata;

    var productindex = Shoppingcart.findIndex(function (product) {

        return product.name === productusername


    })


    if (productindex === true) {
        Shoppingcart.splice(productindex, 1)
        console.log(Shoppingcart)
    }else{

        alert('محصول موجود نیست')
    }

} else {

    alert('لطفا گزینه صحیح را انتخاب کنید')
}
