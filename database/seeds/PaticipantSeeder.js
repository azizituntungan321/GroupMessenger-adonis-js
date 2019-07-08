'use strict'

const Factory = use('Factory')

class PaticipantSeeder {
  async run() {
    await Factory
      .model('App/Models/Paticipant')
      .createMany(1)
  }
}

module.exports = PaticipantSeeder
