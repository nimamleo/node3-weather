const $ = document

let form = $.querySelector('form')
let input = $.querySelector('input')
let btn = $.querySelector('button')
let p1 = $.querySelector('.p1')
let p2 = $.querySelector('.p2')

let info = {}

async function weather(location){
    
}

btn.addEventListener('click' , (e)=>{
    e.preventDefault()
    const location  = input.value
    fetch(`http://api.weatherstack.com/current?access_key=aadf8720486177be844f8edb498e285d&query=${location}`)
    .then(i=>i.json())
    .then(i=>{
        if (i.error) {
            p1.textContent = i.error
        } else {
            p1.textContent = i.location.name
            p2.textContent = i.current.temperature
        }
    })
    .catch(e=>console.log('error'))
    
})


// weather()
