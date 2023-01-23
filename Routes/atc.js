const router = require('express').Router();
const { atcUtil } = require('../Utils/atc');

router.get("/atc", atcUtil);

module.exports = router;