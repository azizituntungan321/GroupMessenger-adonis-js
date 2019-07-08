'use strict'

const Chat = use('App/Models/Chat')
const Database = use('Database')

class ChatController {

  async store({ request, response }) {
    const chat = new Chat()
    try {
      chat.user_id = request.input('userId')
      chat.room_id = request.input('roomId')
      chat.chat = request.input('chat')
      await chat.save()
      response.send({
        message: 'Success save data!'
      })
    } catch (error) {
      response.send({
        message: 'Cannot save data!'
      })
    }
  }

  async show({ params, request, response, view }) {
    const { id } = params
    const room = await Database
      .select('chats.id', 'Chats.user_id', 'chats.chat', 'chats.created_at', 'chats.updated_at', 'users.username')
      .table('chats')
      .innerJoin('rooms', 'rooms.id', 'chats.room_id')
      .innerJoin('users', 'users.id', 'chats.user_id')
      .where({
        'chats.room_id': id
      })
      .orderBy('chats.id', 'desc')
    if (room.length > 0) {
      response.send({
        message: 'Data found!',
        data: room
      })
    } else {
      response.send({
        message: 'Data not found!'
      })
    }
  }

  async destroy({ params, request, response }) {
    try {
      const { id } = params
      const chat = await Chat.find(id)
      await chat.delete()
      response.send({
        message: 'Success delete data!'
      })
    } catch (error) {
      response.send({
        message: 'Cannot delete data!'
      })
    }
  }
}

module.exports = ChatController
