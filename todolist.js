var todolist = [{ id: 1, name: 'emtahanat', isstat: true },
{ id: 2, name: 'sobh', isstat: false },
{ id: 3, name: 'varzesh', isstat: false }]


var todolistuser = prompt('1.add todo\n2.remove todo\n3.do status')


if (todolistuser === '1') {

    var addtodouser = prompt('add todo user:')





    var isall = todolist.some(function (items) {

        return items.name === addtodouser

    })

    console.log(isall)

    if (isall === true) {

        alert('لطفا وضعیت غیر تکراری ثبت کن')

    } else if (!isall) {
        var newtodo = [{
            id: todolist.length + 1,
            name: addtodouser,
            stat: 'off',
        }]
        todolist.push(newtodo)
        console.log(todolist)
    }
}

else if (todolistuser === '2') {

    addtodouser = prompt('inter todo:')

    var isindex = todolist.findIndex(function (items) {

        return items.name === addtodouser

    })

    console.log(isindex)

    if (isindex != -1) {

        todolist.splice(isindex, 1)
        console.log(todolist)


    } else {
        alert('محصول وجود ندارد')
    }



} else if (todolistuser === '3') {

    datatodo = prompt('inter todo:')

    todolist.forEach(function (items) {

        if (items.name === datatodo) {

            items.isstat = true


        }
    })

    console.log(todolist)

} else {

    alert('لطفا گزینه صحیح را وارد کنید')
}