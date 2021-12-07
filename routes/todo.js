const express = require('express')
const router = express.Router()

const todoController = require('../controller/todo')

router.post('/', todoController.create)
router.get('/', todoController.list)
router.put('/:id', todoController.update)
router.delete('/:id', todoController.destroy)

module.exports = router