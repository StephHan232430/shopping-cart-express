const express = require('express')
const exphbs = require('express-handlebars')
const port = process.env.PORT || 3000
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const app = express()

app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})

app.use('/', indexRouter)
app.use('/users', usersRouter)

// require('./routes')(app)

module.exports = app
