'use strict'

const Factory = use('Factory')

class ChatSeeder {
  async run() {
    await Factory
      .model('App/Models/Chat')
      .createMany(15)
  }
}

module.exports = ChatSeeder
