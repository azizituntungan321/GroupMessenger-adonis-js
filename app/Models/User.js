'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  tokens() {
    return this.hasMany('App/Models/Token')
  }

  chats() {
    return this.hasMany('App/Models/Chat', 'id', 'user_id')
  }

  paticipants() {
    return this.hasMany('App/Models/Paticipant', 'id', 'user_id')
  }

}

module.exports = User
