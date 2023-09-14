const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Funcionario = sequelize.define('Funcionario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sobrenome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salario: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    comissao: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    qtd_vendas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});
module.exports = Funcionario;