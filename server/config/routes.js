const mongoose = require('mongoose');
const PrimaryObject = mongoose.model('PrimaryObject');
const mainController = require("../controllers/mainController.js")

module.exports = function (app) {
    app.get('/products/findAll', (req, res) => {
        mainController.find_all(req, res);
    })
    app.get('/products/findOne/:id', (req, res) => {
        mainController.find_by_id(req, res);
    })
    app.post('/products/create', (req, res) => {
        mainController.create(req, res);
    })
    app.put('/products/edit/:id', (req, res) => {
        mainController.update_by_id(req, res);
    })
    app.delete('/products/delete/:id', (req, res) => {
        mainController.delete_by_id(req, res);
    })
}
