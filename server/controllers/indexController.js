'use strict';

module.exports = {
    getMonthlyExpenses: function(req, res, next) {
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