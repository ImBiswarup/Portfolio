const express = require('express');
const messageController = require('../controllers/Message');

const router = express.Router();

router.post('/api/contact', messageController.postMessage);

module.exports = router;
