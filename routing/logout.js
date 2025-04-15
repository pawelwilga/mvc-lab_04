const express = require("express");
const router = express.Router();
const lc = require("../controllers/logoutController");

router.get("/", lc.getLogoutView);

module.exports = router;
