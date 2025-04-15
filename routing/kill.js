const express = require("express");
const logger = require("../utils/logger");
const router = express.Router();
const lc = require("../controllers/logoutController");

router.get("/", lc.killApplication);

module.exports = router;
