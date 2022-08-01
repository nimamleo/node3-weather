const request = require('request')


function geocode(address , callback){
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibmltYW1sZW8iLCJhIjoiY2w2YWZxMHNwMDAyeTNjbDc2NDl2bHQzdCJ9.nG98KslYFQXutssOJUt4mw&limit=1`
    // console.log('geocode url:  ' ,url);
    request({url , json:true} , (error , {body})=>{
        if (error) {
            callback('unable to connect to locatipns service' , undefined);
        }else if (body.features.length ==0){
            callback('unable to find location please try again' , undefined);
        }else{
            callback(undefined , {
                latitude  :  body.features[0].center[1],
                longitude :  body.features[0].center[0],
                location  :  body.features[0].place_name
            })
        }
    })
}


module.exports = geocode