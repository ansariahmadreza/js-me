var num1 = +(prompt('inter firstnumber:'))
var num2 = +(prompt('inter second number:'))

useroperator = prompt('inter the oprator:\n 1. + \n 2. - \n 3. / \n 4. * \n 5.**')

if (useroperator === '1') {

    sum(num1, num2)


} else if (useroperator === '2') {

    tafriq(num1, num2)

} else if (useroperator === '3') {

    devide(num1, num2)

} else if (useroperator === '4') {

    zarb(num1, num2)

} else if (useroperator === '5') {

    power(num1, num2)

} else {
    alert('لطفا گزینه معتبر را وارد کنید')
}


function sum(num1, um2) {

    //return num1 + num2
    alert (num1 + num2)
}


function tafriq(num1, num2) {

    //return num1 - num2
    alert (num1 - num2)

}

function devide(num1, num2) {

    //return num1 / num2
    alert (num1 / num2)

}

function zarb(num1, num2) {

    //return num1 * num2
    alert (num1 * num2)

}


function power(num1, num2) {

    //return num1 ** num2
    alert (num1 ** num2)

}