const audio = document.querySelector('.myAudio')// تگ audio
const btnPlay = document.querySelector('.playMusic')// دکمه پخش
const btnPause = document.querySelector('.btnPause') // دکمه پاز کردن
const showMusicTime = document.querySelector('.durElem') // زمان کل موزیک به ثانیه
const showTime = document.querySelector('.showCurrentTime')  // زمان فعلی موزیک به ثانیه
const backRate = document.querySelector('.playBackRate')  /// سرعت پخش
const p = document.querySelector('#timeMusic') // تگ p برای نشان دادن زمان موزیک




///پخش موزیک
btnPlay.addEventListener('click', function playAudio() {


    audio.play()
    console.log('play shod :)')


    setInterval(function () {


        if(audio.currentTime < 10){

        p.innerHTML = '00'+':0' + Math.floor(audio.currentTime)

        }else{

        p.innerHTML = '00'+':' + Math.floor(audio.currentTime)

        }

        }, 1000)

})

/// توقف موزیک
btnPause.addEventListener('click', function () {


    audio.pause()
    console.log('pause shod :(')
})

/// زمان کل پخش موزیک
showMusicTime.addEventListener('click', function () {


    console.log(audio.duration)

})

/// زمان فعلی موزیک
showTime.addEventListener('click', function () {

    console.log(Math.floor(audio.currentTime))


})

///سرعت پخش
backRate.addEventListener('click', function () {


    audio.playbackRate = 2
    console.log('music speed:2px')


})