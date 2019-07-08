'use strict'

const Route = use('Route')

Route.group(() => {
  Route.get('/authentic', 'AuthController.auth').middleware('auth')
  Route.post('/login', 'AuthController.login')

  Route.get('/room/:id', 'RoomController.show')
  Route.get('/room/:id/:room', 'RoomController.showLastMessage')

  Route.get('/chat/:id', 'ChatController.show')
  Route.post('/chat', 'ChatController.store')
  Route.delete('chat/:id', 'ChatController.destroy')

  Route.get('/paticipant/:id', 'PaticipantController.show')
}).prefix('api/v1')
