let divElem = document.querySelector('div')
let scrollElem = document.querySelector('.scroll')

window.document.addEventListener('scroll', function () {
    let totalScroll = document.documentElement.scrollHeight - window.innerHeight //// ارتفاع کل منهای ارتفاع قسمت سفید رنگ
    let result = (document.documentElement.scrollTop / totalScroll) * 100

    scrollElem.style.width = result.toFixed(2) + "%"
    
    console.log("درصد اسکرول شده از صفحه" + " " + result.toFixed(1))

})
