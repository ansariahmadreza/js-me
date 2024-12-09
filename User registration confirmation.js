// var  scores=[12,15,20,8,32,30]
// console.log(scores.includes(12,2))


username = prompt('user name:')

var users = ['ali', 'hasan', 'reza', 'arman']

var islogin = users.includes(username)


if (islogin === true) {

    alert('کاربری با این مشخصات در سایت وجود دارد')
} else {

    alert('باید ثبت نام کنید')

}