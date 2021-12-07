const { Activity } = require('../../models')

module.exports = async (req, res) => {
    const data = await Activity.findAll()

    return res.json({
        data: data
    })
}