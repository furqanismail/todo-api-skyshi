'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('activity_group', {
         id: {
             type: Sequelize.INTEGER,
             autoIncrement: true,
             primaryKey: true,
             allowNull: false,
         },
         title: {
             type: Sequelize.STRING,
             allowNull: false,
         },
         email: {
             type: Sequelize.STRING,
             allowNull: false,
         },
         comment: {
             type: Sequelize.STRING,
             allowNull: false,
         },
         created_at: {
             type: Sequelize.DATE,
             allowNull: false,
         },
         updated_at: {
             type: Sequelize.DATE,
             allowNull: false
         }

     });

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('activity_group');

  }
};
