const drop = document.querySelector('.drop')
const h1Elem = document.querySelectorAll('h1')


h1Elem.forEach(function (items) {

    items.addEventListener('dragstart', dragStartHandler)

});

drop.addEventListener('dragover', dropHandler)



h1Elem.forEach(function (items) {

    items.addEventListener('drag', dragHandler)

});


h1Elem.forEach(function (items) {

    items.addEventListener('dragend', dragEndHandler)

});

function dragHandler() {


    console.log('droghandler')
}


function dragEndHandler(){


    console.log('drogEndHandler')
}





let elemId;

function dragStartHandler(event) {


    console.log('drogStartHandler')
    event.dataTransfer.setData('elemId', event.target.id)
    elemId = event.dataTransfer.getData('elemId')

}


function dropHandler(event) {


    event.preventDefault()

    let targetId = elemId

    let targetElem = document.getElementById(targetId)
    event.target.append(targetElem)

    console.log('drop')
}


