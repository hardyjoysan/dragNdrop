'use strict';

module.exports = {
    getIndex: function(req, res, next) {
        res.send({
            data: { user: 'test' },
            status: 200
        });
    }
}