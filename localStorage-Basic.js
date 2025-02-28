const setLocalStorageMe = document.querySelector('#setLocalStorage')
const getLocalStorageMe = document.querySelector('#getLocalStorage')
const clearLocalStorageMe = document.querySelector('#clearLocalStorage')


setLocalStorageMe.addEventListener('click', setLocalStorage)
getLocalStorageMe.addEventListener('click', getLocalStorage)
clearLocalStorageMe.addEventListener('click', clearLocalStorage)



function setLocalStorage() {

    let names = localStorage.setItem('names', JSON.stringify(['qoli', 'hasan', 'ali', 'ahmadreza']))



}


function getLocalStorage() {

    let localName = JSON.parse(localStorage.getItem('names'))

    console.log(localName)

    // console.log(typeof localName)

}

function clearLocalStorage() {

    localStorage.clear()

}
