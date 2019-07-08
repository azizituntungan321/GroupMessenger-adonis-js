'use strict'

const Factory = use('Factory')
Factory.blueprint('App/Models/Chat', (faker) => {
  return {
    chat: faker.sentence(),
  }
})

Factory.blueprint('App/Models/Room', (faker) => {
  return {
    name: faker.sentence(),
  }
})

Factory.blueprint('App/Models/User', (faker) => {
  return {
    username: 'caca',
    email: 'caca@gmail.com',
    password: '1',
  }
})

Factory.blueprint('App/Models/Paticipant', (faker) => {
  return {
    room_id: 1,
    user_id: 1,
  }
})

Factory.blueprint('App/Models/User', (faker) => {
  return {
    username: faker.username()
  }
})
