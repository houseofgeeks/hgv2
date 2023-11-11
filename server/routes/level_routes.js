const router = require("express").Router();
const { checkAdmin } = require("../middlewares/authMiddleware");
const {createLevel, getLevelsByWingId, getParticularLevel} = require("../controllers/level_controller");
router.route("/").post(checkAdmin, createLevel);
router.route("/getlevelbywingid/:wingId").get(getLevelsByWingId);
router.route("/getparticularlevel/:levelId").get(getParticularLevel);
module.exports = router;