const btn=document.querySelector('.btn')/// دکمه پریدن به نقطه صفر
const btn2=document.querySelector('.btn2')/// دکمه اسکرول100تایی به پایین




btn.addEventListener('click',function(event){   /// تنظیم event کلیک 

window.scrollTo(0,0)  //در صورت کلیک روی دکمه با نقطه صفر صفحه میره


console.log(event.target.dataset)  /// dataset های عنصر که تنظیم شدن
})


btn2.addEventListener('click',function(){  /// تنظیم event روی دکمه btn2

window.scrollBy(0,500) /// درصورت کلیک صفحه هر500 تا 500 به سمت پایین اسکرول میشه


})