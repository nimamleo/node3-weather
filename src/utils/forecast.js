const request = require('request')


function forecast(latitude , longitude , callback){
    const url = `http://api.weatherstack.com/current?access_key=aadf8720486177be844f8edb498e285d&query=${latitude},${longitude}`
    // console.log("forecast url:  "+ url);
    request({url, json:true} , (error , {body})=>{
        if (error) {
            callback('unable to connect to weather service' , undefined);
        }else if (body.error){
            callback('unable to find location ' , undefined);
        }else{
            callback(undefined , 'temperature is :  '+body.current.temperature+' C')
        }
    })


}



module.exports = forecast