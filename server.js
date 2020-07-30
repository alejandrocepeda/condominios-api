'use strict'
console.log("Server")
const express = require('express')
const app = express()
const { config } = require('./config/index')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const chalk = require('chalk')
const bodyParser = require('body-parser')
//const cookieParser = require('cookie-parser')
//const passport = require('passport')
//const session = require('express-session')
//const MongoStore = require('connect-mongo')(session)

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({limit: '900mb', extended: true}));
app.use(bodyParser.json({limit: '900mb'}))

/*
app.use(session({
  secret:"test",
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    url: `${config.mongoDBConnection}`
  }),
  cookie:{
    maxAge: 2592000000
  }
}))

app.use(cookieParser());
app.use(passport.initialize())
app.use(passport.session())
*/

app.use(morgan('tiny'))
app.use(cors(require('./config/corsOptions')))

app.use(helmet())
app.disable('x-powered-by')
app.use(helmet.xssFilter())
app.use(require('./app.js'))

const server = app.listen(config.port, () => {
  console.log(chalk.green(`Server up on port ${config.port}`))
})

const sockets = require('./components/socket')
sockets.connect(server)