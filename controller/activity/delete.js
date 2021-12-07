const { Activity } = require('../../models')

module.exports = async (req, res) => {
    const id = req.params.id
    const activity = await Activity.findByPk(id)
    if(!activity){
        return res.status(404).json({
            message: 'data not found'
        })
    }

    const data = await Activity.destroy({
        where: { id: id }
    })

    return res.json({
        message: 'success'
    })
}