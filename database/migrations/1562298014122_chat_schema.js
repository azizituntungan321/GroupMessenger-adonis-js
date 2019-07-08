'use strict'

const Schema = use('Schema')

class ChatSchema extends Schema {
  up() {
    this.create('chats', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('room_id').unsigned().references('id').inTable('rooms')
      table.string('chat', 300).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('chats')
  }
}

module.exports = ChatSchema
