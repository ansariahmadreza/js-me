const div = document.querySelector('#div')
const btn = document.querySelector('.btn')




function divmous() {

    console.log('divmous')
}


function btndel() {  /// تنظیم تابع  event 

    console.log('هعی روزگار :(')
    div.removeEventListener('mousemove', divmous)/// دقیقا برعکس  تنظیم event 

}

/// تنظیم رویداد روی قسمت های فراخوانی شده
btn.addEventListener('click', btndel)
div.addEventListener('mousemove', divmous)