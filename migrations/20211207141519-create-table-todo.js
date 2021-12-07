'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('todos', {
       id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         allowNull: false
       },
       activity_group_id: {
         type: Sequelize.INTEGER,
         allowNull: false
       },
       title: {
         type: Sequelize.STRING,
         allowNull: false
       },
       comment: {
         type: Sequelize.TEXT,
         allowNull: false
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

     await queryInterface.addConstraint('todos', {
       type: 'foreign key',
       fields: ['activity_group_id'],
       name: 'CONSTRAINT_ACTIVITY_GROUP_ID',
       references: {
         table: 'activity_group',
         field: 'id'
       },
       onDelete: 'cascade'
     });

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('todos');

  }
};
