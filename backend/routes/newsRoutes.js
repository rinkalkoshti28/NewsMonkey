const express = require('express');
const router = express.Router();

const { getNewsByCategory } = require('../controller/newsController');

router.get("/api/news/:category", getNewsByCategory);

module.exports = router;
