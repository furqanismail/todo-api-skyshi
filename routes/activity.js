const express = require('express')
const router = express.Router()

const activityController = require('../controller/activity')

router.post('/', activityController.create)
router.get('/', activityController.list)
router.put('/:id', activityController.update)
router.delete('/:id', activityController.destroy)

module.exports = router