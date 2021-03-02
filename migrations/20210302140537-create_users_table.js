'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('users', {
  id:{
      type:Sequelize.INTEGER(11),
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
  },
  //userId >>> forign key
  userId:Sequelize.INTEGER(11),
  username:{
      type:Sequelize.STRING(35),
      allowNull:false,
      unique:true
  },
  passwd:{
      type:Sequelize.STRING(20),
      allowNull:false
  },
    createdAT:Sequelize.DATE,
    updatedAT:Sequelize.DATE,
  })

  },

  down: async (queryInterface, Sequelize) => {
 
  return queryInterface.dropTable('users');
     
  }
};
