const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('toughts', 'root', 'toor', {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  sequelize.authenticate();
  console.log('Conectamos com sucesso')
} catch(error) {
  console.log(`Nao foi possivel conectar ${error}`)
  return;
}

module.exports = sequelize