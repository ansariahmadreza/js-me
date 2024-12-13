var ages = [{ id: 1, name: 'ali', age: 20 }, { id: 2, name: 'ahmadreza', age: 2 }, { id: 3, name: 'reza', age: 19 }]

var isall = ages.every(function (user) {

    return user.age > 18


})

console.log(isall)

if (isall ) {
    console.log('شما اجازه ایجاد تماس گروهی را دارید')
} else {
    console.log('شما اجازه تماس گروهی را ندارید')
}