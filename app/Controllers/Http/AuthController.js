'use strict'
const User = use('App/Models/User')
class AuthController {

  async login({ request, response, auth }) {
    const email = request.input('email')
    const password = request.input('password')
    let user = await User.findBy('email', email)
    try {
      await auth.attempt(email, password)
      let accessToken = await auth.withRefreshToken().generate(user)
      response.send({
        'status': true,
        'message': 'Login success!',
        'user': user,
        'accessToken': accessToken
      })
    } catch (error) {
      response.send({
        'status': false,
        'message': 'Login failed, invalid username or password!'
      })
    }
  }

  async auth({ request, response, auth }) {
    try {
      let decode = await auth.getUser()
      response.send({ id: decode.id, username: decode.username, message: 'User verified' })
    } catch (error) {
      response.send({ message: 'User not verified' })
    }
  }
}

module.exports = AuthController
