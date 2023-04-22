const express = require('express');
const router = express.Router()
const personalController = require('../controllers/personal-controller')

router.get('/', personalController.listPersonal)
router.post('/', personalController.createPersonal)
  
module.exports = router