const $ = document

const input = $.querySelector('input')
const btn = $.querySelector('button')
const p1 = $.querySelector('.p1')
const p2 = $.querySelector('.p2')





btn.addEventListener('click' , (e)=>{
    e.preventDefault()
    console.log(input.value);
    fetch(`/weather?address=${input.value}`)
    .then(i=>i.json())
    .then(i=>{
        if (i.error) {
            p1.textContent = i.error
            p2.innerHTML = ''
        } else {
            console.log(i);
            p1.textContent = i.location
            p2.textContent = i.forecast
        }
    })
})