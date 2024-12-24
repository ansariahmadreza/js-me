var users = [

    { id: 1, name: 'ali', password: 1380 },
    { id: 2, name: 'amir', password: 12345 },
    { id: 3, name: 'amin', password: 0 },
    { id: 4, name: 'babak', password: 10 },

]

var username = prompt("inter username:")

var isallname = users.some(function (items) {

    return items.name === username


})


if (isallname === true) {


    var userpass = +prompt('inter password:')

    var isallpass = users.some(function (items) {


        return items.password === userpass

    })




    if (isallpass) {

        alert('رمز عبور وارد شده صحیح است')



    } else if (isallpass === false) {


        alert('رمز عبور وارد شده صحیح نمیباشد')

        username = prompt("inter username:")


        var isall = users.find(function (person) {

            return person.name === username

        })

        if (isall) {
            console.log("your password:", isall.password)

        } else {
            alert('داری راهو اشتباه میری')
        }
    }


} else {

    alert(' نام کاربری وارد شده یافت نشد')
}
