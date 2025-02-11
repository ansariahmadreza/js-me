document.addEventListener('scroll', navMe)
const navFlex = document.getElementById('flex')
const a = document.querySelectorAll('.a')

function navMe() {

    if (document.documentElement.scrollTop > 0) {

        navFlex.setAttribute('class', 'colornav')


        a.forEach(function (item) {

            item.setAttribute('class', 'colortext')


        })


    }
    else if (document.documentElement.scrollTop === 0) {

        navFlex.classList.remove('colornav')


        a.forEach(function (item) {

            item.classList.remove('colortext')

        })


    }






}













// document.addEventListener('scroll', scrollMe)


// function scrollMe(event) {
//     console.log('scrollLeft' + ' ' + document.documentElement.scrollLeft)
//     console.log('scrollTop' + ' ' + document.documentElement.scrollTop)
//      console.log(event)
// }