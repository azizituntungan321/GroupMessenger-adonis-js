'use strict'

const Schema = use('Schema')

class PaticipantSchema extends Schema {
  up() {
    this.create('paticipants', (table) => {
      table.increments()
      table.integer('room_id').unsigned().references('id').inTable('rooms')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down() {
    this.drop('paticipants')
  }
}

module.exports = PaticipantSchema
