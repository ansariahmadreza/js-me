var Cityoforigin = {

    fars: ['shiraz', 'noorabad', 'fasa'],
    kerman: ['bam', 'jiroft', 'baft'],
    tehran: ['tehran', 'varamin', 'damavand'],
    bosheher: ['kangan', 'bosheher'],
}


var city = prompt(' your employeename:')

var usercity = Cityoforigin[city]


usercity.forEach(function(city){

    console.log(city)
    
});



