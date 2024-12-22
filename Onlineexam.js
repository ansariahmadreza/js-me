var Onlineexam = [{ id: 1, title: 'وضعیت هوا چطور است؟؟', theanswer: 'خوب است' },
{ id: 2, title: ' زابل کجاست؟ ', theanswer: 'سیستان و بلوچستان' },
{ id: 3, title: ' خونه چطور است؟ ', theanswer: 'خوب است' },
{ id: 4, title: 'من چند سالمه؟', theanswer: '23سال' },
{ id: 5, title: 'ایران کجاست؟؟', theanswer: 'غرب اسیا' },
]

var totalscore = 0

var Questionyou;




Onlineexam.forEach(function (items) {

    Questionyou = prompt(items.title + '?').toLocaleLowerCase()
    if (Questionyou === items.theanswer) {

        console.log(true)
        totalscore++

    }else{

        alert('پاسخ وارد شده اشتباه است')
    }



})

console.log(totalscore)
