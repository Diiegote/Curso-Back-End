'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     return queryInterface.addColumn("tasks","userId",{
      type:Sequelize.INTEGER,
      references:{
        model:{
          tableName:"Users"
        },
        key:"id"
      }
    })//recibe tres argumentos,primero el nombre de una tabla existente,segundo el campo que se va a agregar, tercero el tipo de dato que se agregara
  },

  async down (queryInterface, Sequelize) {
  return queryInterface.removeColumn("tasks","userId"); // recibe dos argumentos, el primero el nombre de la tabla y segundo que tabla se eliminara
  }
};
