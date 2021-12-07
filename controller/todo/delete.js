const { Todo } = require('../../models')

module.exports = async (req, res) => {
    const id = req.params.id
    const todo = await Todo.findByPk(id)
    if(!todo){
        return res.json({
            message: 'data not found'
        })
    }

    const data = await Todo.destroy({
        where: { id: id }
    })

    return res.json({
        message: 'delete success'
    })
}