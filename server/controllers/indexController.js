'use strict';
import { Expense } from '../models';
import { fn, col } from 'sequelize';

module.exports = {
    getMonthlyExpenses: async function(req, res, next) {
        try {

            const result = await Expense.findAll({
                attributes: [
                    'month',
                    [ fn('sum', col('amount')), 'total' ],
                ],
                group: ['month'],
            });

            let response = result.map(data => {
                let dataValues = data.dataValues;
                return { month: dataValues.month.substr(0, 3), expense: dataValues.total }
            });

            res.send({
                data: response,
                message: 'success',
                status: 200
            });
            
        } catch (error) {
            console.log(error);
            res.send({
                message: "Oops! Something went wrong.",
                status: 500
            });
        }
    },

    getCategoryExpenses: function(req, res, next) {
        try {

            res.send({
                data: { user: 'test' },
                status: 200
            });
            
        } catch (error) {
            console.log(error);
            res.send({
                message: "Oops! Something went wrong.",
                status: 500
            });
        }
    }
}