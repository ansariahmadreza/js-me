const div = document.querySelector('#div')
const p = document.querySelector('.p')

// div.addEventListener('touchmove', mm)
div.addEventListener('touchstart', mm)
//div.addEventListener('touchend', mm)

function touchcontroller() {

    div.style.display = 'none'
    p.innerHTML = 'salam'

    let img = new Image(); // ایجاد عنصر <img> جدید
    img.src = 'images/2.jpg'; // تنظیم مسیر تصویر
    document.body.appendChild(img); // اضافه کردن به صفحه

}





