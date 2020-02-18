const Todo = require('../models').todo

//Get All Data
exports.index = (req, res) => {
    Todo.findAll().then(todos=>res.send(todos))
}

//Find One Data
exports.show = (req, res) => {
    Todo.findOne({where: {id: req.params.id}}).then(todo=>res.send(todo))
}

exports.store = (req, res) => {
    Todo.create({...req.body, created_by:req.user.userId}).then(todo=> {
        res.send({
            message: "success",
            todo
        })
    })
}

//Update Data
exports.update = (req, res) => {
    Todo.update(
        req.body,
        {where: {id: req.params.id}
    })
    .then(todo => {
        res.send({
            message: "Success",
            todo
        })
    })
}

//Delete data
exports.destroy = (req, res) => {
    Todo.destroy({where: {id: req.params.id}
    })
    .then(todo => {
        res.send({
            message: "Success",
            todo
        })
    })
}