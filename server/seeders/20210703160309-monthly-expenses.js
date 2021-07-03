'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
    */

    var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    var categories = ['Accomadation', 'Food', 'Clothing', 'Electricity', 'Medicine', 'Entertainment', 'Other'];

    let data = [];

    for (let i = 0; i < months.length; i++) {
      var month = months[i];
      categories.forEach(category => {
        data.push({
          month: month, 
          category: category, 
          amount:  this.getRandomInt(100, 20000),
          createdAt: new Date(),
          updatedAt: new Date()
        })
      });
    }

    await queryInterface.bulkInsert('expenses', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },

  getRandomInt: (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
};
