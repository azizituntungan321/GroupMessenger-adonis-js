'use strict'

const Paticipant = use('App/Models/Paticipant')
const Database = use('Database')

class PaticipantController {

  async show({ params, request, response, view }) {
    const { id } = params
    const room = await Database
      .select('paticipants.id','users.username', 'users.email')
      .table('paticipants')
      .innerJoin('rooms', 'rooms.id', 'paticipants.room_id')
      .innerJoin('users', 'users.id', 'paticipants.user_id')
      .where({
        'paticipants.room_id': id
      })
    if (room.length > 0) {
      response.send ({
        message: 'Data found!',
        data: room
      })
    } else {
      response.send ({
        message: 'Data not found!'
      })
    }
  }

}
module.exports = PaticipantController
