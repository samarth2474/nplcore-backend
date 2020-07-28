
var express =  require('express')
var cors = require('cors')

const app = express()
app.use(cors())
const fs = require('fs')
const dict = {} 
for (a=0;  a<1001; a++) {
    const data =fs.readFileSync(`${__dirname}/wikipages/${a}.json`, 'utf-8')
    const dataObj = JSON.parse(data);
    let year = dataObj.time_published.slice(0,4)
    if (!dict[year]) {
        dict[year] = 1
    } else {
        dict[year] +=1
    }
    
    
}

 const keys = Object.keys(dict)
 const values = Object.values(dict)

 console.log(keys)
 console.log(values)


app.get('/timeseries',(req, res)=>{
    // console.log(req.query.upper)
    // console.log(req.query.lower)
    res.send(dict)
    
        
})

app.get('/timeseries/keys',(req, res)=>{
    
    res.send(keys)
    
        
})

app.get('/timeseries/values',(req, res)=>{
    
    res.send(values)
    
        
})


app.listen(3000)