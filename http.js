const { error } = require('console')
const http = require('http')
const { request } = require('https')


const url = `http://api.weatherstack.com/current?access_key=aadf8720486177be844f8edb498e285d&query=${latitude},${longitude}`


http.request(url , (res)=>{
    let data = ''

    res.on('data' , (chunk)=>{
        data = data + chunk.toString()
    })

    res.on('end' , ()=>{
        const body = JSON.parse(data)
        console.log(body);
    })
})


request.on('error' , (error)=>{
    console.log(error);
})


request.end()