const express = require("express");

const router = express.Router();

const {
    getWorldUsers
} = require("../controllers/userController");

const {
    protect
} = require("../middlewares/authMiddleware");

router.get(
    "/world",
    protect,
    getWorldUsers
);

module.exports = router;