const router = require("express").Router();
const { checkAdmin } = require("../middlewares/authMiddleware");
const {createLevel} = require("../controllers/level_controller");
router.route("/").post(checkAdmin, createLevel);
module.exports = router;