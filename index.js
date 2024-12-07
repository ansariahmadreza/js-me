var users = [{ id: 1, name: 'ahmadreza', family: 'ansari', age: 23 ,email:'ahmadreza.an2001@gmail.com'},
{ id: 2, name: 'hamid', family: 'hamidi', age: 18,email:'ahmadreza.an2001@outlook.com' }]

var username = prompt('user name:')
var userfamily = prompt('user family:')
var useremail = prompt('user email:')
var userage = Number(prompt('user age:'))



if (username.length < 3 || username.length > 10) {

    alert('لطفا بین 3 تا 10 کاراکتر وارد کنید')

} else if (userfamily.length < 3 || userfamily.length > 15) {

    alert('لطفا بین 3 تا 10 کاراکتر وارد کنید')
} else if (userage > 100) {
    alert('لطفا عدد زیر100 وارد کنید')
}

else {
    var newuser = {
        id: 4,
        name: username,
        family: userfamily,
        age: userage,
        email: useremail,

        
    }

    console.log(newuser)
    users.push(newuser)
}



console.log(users)


