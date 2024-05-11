const express = require("express");

const router = express.Router();

const { postUser, getUser } = require("../controller/userController");

router.route("/postUser").post(postUser);
router.route("/:userId").get(getUser);

module.exports = router;
