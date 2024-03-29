const express = require('express')

const { port } = require('./config.js')

const app = express()
app.use(express.json())
app.disable('x-powered-by')

/*
app.all("*",function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","*");
  res.header("Access-Control-Allow-Methods","*");
  if (req.method.toLowerCase() == 'options')
    res.sendStatus(200);
  else
    next();
})
*/

let api = express.Router()
app.use('/api', api)

api.use('/login', require('./controllers/login.js'))
api.use('/deck', require('./controllers/deck.js'))
api.use('/template', require('./controllers/template.js'))
// api.use('/test', require('./controllers/test.js'))

app.listen(port, () => {
  console.log('# API server started!')
})
