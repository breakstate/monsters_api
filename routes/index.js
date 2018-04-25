const { Router } = require('express');
const router = Router();

const monsters = require('./monsters');
const habitats = require('./habitats');
const lives = require('./lives');
const app = require('../app');

router.use('/mosters', monsters);
router.use('/habitats', habitats);
router.use('/lives', lives);

module.exports = router; 
