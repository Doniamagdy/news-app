const express = require('express')
const path = require('path') 
const request = require('request')

const url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=2163131ce88d4e1284d1def669d74abf "
 console.log(url)
request({url,json:true},(error,response)=>{
  app.get('/Homepage',(req,res)=>{
  if(error){
    res.render('error',{
      title:'Error'
        })
       } else{
        res.render('index',{ 
          title:response.body.articles[0].title,
          description:response.body.articles[0].description,
          image:response.body.articles[0].urlToImage
            })
         
              }
            })    
          })
  



 const app = express()
 const port = 3000


console.log(path.join(__dirname, '../public'))

 const publicCirectory= (path.join(__dirname, '../public'))
 app.use( express.static(path.join(publicCirectory)))


 app.set('view engine', 'hbs');


//  app.get('/Homepage',(req,res)=>{
//   res.render('index',{
//     name:'donia'
  
//   })
//  })



 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

 //app.get('/', (req, res) => {
 // res.send('Home page')
// })

// app.get('/About_us', (req, res) => {
//   res.send('About us page')
// })

