const hbs = require('hbs')
const path = require('path')
const express = require('express')

const port = process.env.PORT || 5000
const app = express()
const viewsPath = path.join(__dirname, '../template/views')
const publicDirectoryPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname , "../template/partials")


app.set('views' , viewsPath) 
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))
 

app.get('', (req, res) => {
    res.render('index',{
        title:'home',
        name:'nima'
    })
})

app.get('/about' , (req, res)=>{
    res.render('about' , {
        title:'about' , 
        name:'nima'
    }) 
})

app.get('/help' , (req, res)=>{
    res.render('help' , {
        title:'about' , 
        helptext:'how can i help you?',  
        name:'nima'
    }) 
})
app.get('/help/*' , (req, res)=>{
    res.render('404' , {
        error:'help ariticle not found' 
    })
})

app.get('/weather', (req, res) => {
    // console.log(req.query.address);
    if (!req.query.address) {
        return res.send({
            error:'add address property '
        })
    }
    res.send({
        location:req.query.address,
        info:info

    })
})

app.get('*' , (req, res)=>{
    res.render('404' , {
        error:'page not found'
    })
})

app.listen(port, () => {
    console.log('Server is up on port '+port)
})