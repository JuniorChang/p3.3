const knex = require('knex')({
    client: 'mysql',
    connection: {
      user: 'junior',
      password:'password',
      database:'coffee'
    }
  })
  const bookshelf = require('bookshelf')(knex)
  
  module.exports = bookshelf;