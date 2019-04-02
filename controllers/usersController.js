const db = require("../models");

// Defining methods for the usersController
module.exports = {
    signup: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    login: function (req, res) {
        db.User
            .findById(req.body.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    logout: function (req, res) {
        
    }
}