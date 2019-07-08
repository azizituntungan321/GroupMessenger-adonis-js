'use strict'

const Model = use('Model')

class Room extends Model {
  chat() {
    return this.hasMany('App/Models/Chat', 'id', 'room_id')
  }

  paticipant() {
    return this.hasMany('App/Models/Paticipant', 'id', 'room_id')
  }
}

module.exports = Room
