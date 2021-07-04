'use strict';
import { Expense } from '../models';
import { fn, col } from 'sequelize';

module.exports = {
    getMonthlyExpenses: async function(req, res, next) {
        try {

            // Fetch expenses from database
            const result = await Expense.findAll({
                attributes: [
                    'month',
                    [ fn('sum', col('amount')), 'total' ],
                ],
                group: ['month'],
            });

            // Altering month name for front end visibility
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
    }
}