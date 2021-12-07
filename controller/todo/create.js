const { Todo } = require('../../models')
const Validator = require('fastest-validator')
const v = new Validator

module.exports = async (req, res) => {
    const schema = {
        title: 'string|empty:false',
        activity_group_id: 'string|empty:false',
        comment: 'string|empty:false'
    }

    const validate = v.validate(req.body, schema)

    if(validate.length){
        return res.status(404).json({
            message: validate
        })
    }

    const data = {
        title: req.body.title,
        activity_group_id: req.body.activity_group_id,
        comment: req.body.comment
    }

    const createTodo = await Todo.create(data)

    return res.json({
        data: {
            id: createTodo.id
        }
    })
}
