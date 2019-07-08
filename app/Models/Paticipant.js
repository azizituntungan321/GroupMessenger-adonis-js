'use strict'

const Model = use('Model')

class Paticipant extends Model {
  room() {
    return this.belongsTo('App/Models/Room')
  }

  user() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Paticipant
