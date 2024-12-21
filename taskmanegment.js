var taskmanegment = [{ id: 1, name: 'akbar', task: 'reading' },
{ id: 2, name: 'hasan', task: 'sport' },
{ id: 3, name: 'arman', task: 'search' },
{ id: 4, name: 'ali', task: 'sleep' }]




//Add new task section

var username = prompt(' your user name:') //Get username
var usertask = prompt(' your user task:') //Giving a new task

// بخش تغییر وظیفه کارمندان
taskmanegment.forEach(function (items) {   //Searches among employees to find the entered name.

    if (items.name === username) {  //If the employee name exists, perform the next operation.

        items.task = usertask  //Changing the task of the employee


    } 

})
if( taskmanegment != username) {  //If the employee's name did not exist

    alert('The persons name is not listed among the employees.')
}

console.log(taskmanegment)


//اضافه کردن کارمند جدید به بقیه کارمندان

var username = prompt(' your user name:')
var usertask = prompt(' your user task:')



var istast = taskmanegment.some(function (items) {

    if (items.name === username) {
        return true

    }

})



if (istast === true) {

    alert('نام وارد شده موجود است')

} else if (istast === false) {

    var newuser = [{
        id: taskmanegment.length + 1,
        name: username,
        task: usertask,
    }]
    taskmanegment.push(newuser)
}
console.log(taskmanegment)





////// code teacher


var tasksarray = {

    ali: ['html', 'js', 'css'],
    amin: ['react', 'vue', 'angular'],
    mohammad: ['seo', 'link bulding'],
    amir: ['admin', 'content'],
}

var newtaskname = prompt(' your task name:')
var employeename = prompt(' your employeename:')

var employeetask = tasksarray[employeename]


console.log(employeetask)

employeetask.push(newtaskname)


console.log(tasksarray)