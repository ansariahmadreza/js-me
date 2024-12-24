// (function() {

//     alert('سلام احمدرضا')

// }  )()


// (function() {

//     alert('سلام احمدرضا')

// } () )



var minute = +prompt('inter usermin:')// 1 minute
var second = +prompt('inter usersecond:') // 12 second


var totaltime = setInterval(function () {




  if (second === -1) {
    minute--
    second = 59

  }


  console.log('timer:', minute + ":" + second)
  second--


  if (minute === 0 && second === -1) {

    clearInterval(totaltime)


    console.log('زمان مورد نظر به پایان رسید')
  }





}, 1000)





