'use strict'

const Factory = use('Factory')

class RoomSeeder {
  async run() {
    await Factory
      .model('App/Models/Room')
      .createMany(2)
  }
}

module.exports = RoomSeeder
