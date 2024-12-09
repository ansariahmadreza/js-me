var users = [{id:1, name: 'ali', family: 'ahmadi', phon: 3542, age: 20, email: 'ahmadreza.an200@gnail.com' },
{id:2, name: 'ahmadreza', family: 'ans', phon: 2471, age: 23, email: 'an200@gnail.com' },
{id:3, name: 'reza', family: 'armani', phon: 1342, age: 13, email: 'an200@gnail.com' },
]





var username = prompt('user name:')
var userfamily = prompt('user family:')
var useremail = prompt('user email:')
var userage = Number(prompt('user age:'))
var userphon = Number(prompt('user phon:'))





if (isNaN(userage)) {
    alert('لطفا سن را به درستی وارد کنید')
} else if (isNaN(userphon)) {
    alert('لطفا شماره تلفن را به درستی وارد کنید')
} else if (username.length < 3 || username.length > 10) {

    alert(' اسم را به درستی وارد کنید')
} else {
    var newuser = {
        id: 4,
        name: username,
        family: userfamily,
        phon: userphon,
        age: userage,
        email: useremail
    }


    console.log(newuser)
    users.push(newuser)
}

// console.log(users)

users.forEach(function(users){

console.log(users)

})