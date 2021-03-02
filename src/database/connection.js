const Sequelize = require("sequelize");

const sequelize = new Sequelize("socialnetwork",'root','0000',{
    host:'127.0.0.1',
    dialect:"mysql",
    operatorsaliases:false});

module.exports=sequelize;
global.sequelize = sequelize;