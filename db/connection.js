const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('comissao_node','gelado', '@Gelado077', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
})

try {
    sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso.');
} catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
}
module.exports = sequelize;