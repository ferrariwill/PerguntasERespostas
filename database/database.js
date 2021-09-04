const  sequelize  = require("sequelize");
const connection = new sequelize('guiaperguntas','root','Wa020612',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = connection;