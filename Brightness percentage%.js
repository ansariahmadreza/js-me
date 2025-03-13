const rangeColor = document.querySelector('.rangeColor')
const inputchange = document.querySelector('.inputchange')


function changeRange(event) {
    rangeColor.style.filter = 'brightness(100%)'
    // rangeColor.style.filter = `brightness(${event.target.value}%)`;
    rangeColor.style.filter = 'brightness('+ event.target.value +'%)'
}


rangeColor.addEventListener('change', changeRange)