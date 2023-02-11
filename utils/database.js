const Sequelize = require('sequelize');


const sequelize = new Sequelize('booking', 'root', 'Anshika@root', {
    dialect: 'mysql',
    host: 'localhost'
  });

module.exports=sequelize