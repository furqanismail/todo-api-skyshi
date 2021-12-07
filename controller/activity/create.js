const { Activity } = require('../../models')
const Validator = require('fastest-validator')
const v = new Validator

module.exports = async (req, res) => {
    const schema = {
        title: 'string|empty:false',
        email: 'string|empty:false',
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
        email: req.body.email,
        comment: req.body.comment
    }

    const createActivity = await Activity.create(data)

    return res.json({
        data: {
            id: createActivity.id
        }
    })
}
