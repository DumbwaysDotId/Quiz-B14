const connection = require('../db')

exports.index = (req, res) => {
    connection.query("SELECT * FROM todos", (err, rows) =>{
        if (err) throw err

        res.send(rows)
    })
}

exports.show = (req, res) => {
    connection.query(`SELECT * FROM todos WHERE id=${req.params.id}`, (err, rows) => {
        if (err) throw err

        res.send(rows[0])
    })
}

exports.insert =  (req, res) => {
    const { title, isDone } =  req.body   
    
    connection.query(`INSERT INTO todos (title, isDone) VALUES('${title}', '${isDone}')`, (err) => {
        if (err) throw err
    })
    res.send({
        success: true,
        data: req.body
    })
}

exports.update =  (req, res) => {
    const id = req.params.id
    const index = id - 1
    const data = req.body
    todos[index] = {...todos[index], ...data}
    res.send(todos[index])
}

exports.destroy = (req, res) => {
    const id = req.params.id
    const index = id - 1
    todos.splice(index, 1)
    res.send({"status": "Success","data":todos})
}


