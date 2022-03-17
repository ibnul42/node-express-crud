const express = require("express");
const router = express.Router();
const { setUser } = require("../controllers/userController");

router.post("/", setUser);

module.exports = router;
