const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(methodOverride('X-HTTP-Method'))
app.use(methodOverride(function (req, res) {
  if (req.body && '_method' in req.body) {
    const method = req.body._method
    // remove from body
    delete req.body._method
    // return method
    return method
  }
}))

app.get('/', (req, res, next) => {
   res.render('index')
})

// delete method added to express!
app.delete('/', (req, res, next) => {
  res.send(`Hi =)`)
})

app.listen(3001, () => {
   console.log('server started')
})
