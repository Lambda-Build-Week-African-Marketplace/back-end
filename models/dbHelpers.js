// const knex = require('knex')
// const config = require('../knexfile.js')
// const db = knex(config.development)

const db = require('../dbConfig')

module.exports = {
    addUser,
    findById
}

async function addUser(user) {
    const [id] = await db('users').insert(user)
    return findById(id)
}

function findById(id) {
    return db('users')
      .where({ id })
      .first();
  }