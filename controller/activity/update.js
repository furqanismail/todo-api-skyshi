const { Activity } = require('../../models')
const Validator = require('fastest-validator')
const v = new Validator

module.exports = async (req, res) => {
    const schema = {
        title: 'string',
        email: 'string',
        comment: 'string'
    }

    const validate = v.validate(req.body, schema)

    if(validate.length){
        return res.status(404).json({
            message: validate
        })
    }

    const id = req.params.id
    const activity = await Activity.findByPk(id)
    if(!activity){
        return res.status(404).json({
            message: 'data not found'
        })
    }

    const data = {
        title: req.body.title,
        email: req.body.email,
        comment: req.body.comment
    }

    await activity.update(data)

    return res.json({
        data: {
            id: activity.id
        }
    })
}
