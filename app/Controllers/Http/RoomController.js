'use strict'

const Room = use('App/Models/Room')
const Database = use('Database')

class RoomController {

  async show({ params, request, response, view }) {
    const { id } = params
    const member = await Database
      .select('paticipants.room_id', 'paticipants.user_id', 'rooms.name')
      .table('paticipants')
      .innerJoin('rooms', 'rooms.id', 'paticipants.room_id')
      .innerJoin('users', 'users.id', 'paticipants.user_id')
      .where({
        'users.id': id
      })
      .orderBy('paticipants.id','desc')

    if (member.length > 0) {
      response.send({
        message: 'Data found!',
        data: member
      })
    } else {
      response.send({
        message: 'Data not found!'
      })
    }
  }

  async showLastMessage({ params, request, response, view }) {
    const { id, room } = params
    const member = await Database
      .select('chats.chat', 'chats.created_at', 'chats.updated_at')
      .table('chats')
      .innerJoin('rooms', 'rooms.id', 'chats.room_id')
      .innerJoin('users', 'users.id', 'chats.user_id')
      .where({
        'chats.user_id': id,
        'chats.room_id': room
      })
      .orderBy('chats.id', 'desc')
      .limit(1)

    if (member.length > 0) {
      response.send ({
        message: 'Data found!',
        data: member
      })
    } else {
      response.send ({
        message: 'Data not found!'
      })
    }
  }

}

module.exports = RoomController
