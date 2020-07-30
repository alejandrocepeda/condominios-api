const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const bcrypt = require('bcrypt')
const AuthService = require('../../../services/authService')
const boom = require('@hapi/boom')

const basicOptions = {
  usernameField: 'username',
  passwordField: 'password'
}

passport.use(new BasicStrategy(
  basicOptions,
  async (username, password, done) => {
    const authService = new AuthService()

    try {
      const user = await authService.login(username)

      if (!user) {
        return done(boom.unauthorized(), false)
      }

      
      if (!(await bcrypt.compare(password, user.password))) {
        return done(boom.unauthorized(), false)
      }
      

      return done(null,user)
    } catch (error) {
      return done(error)
    }
  }
))
