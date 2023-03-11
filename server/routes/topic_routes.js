const router=require("express").Router();
const {checkAdmin}=require("../middlewares/authMiddleware");
const {createTopic,getTopics}=require("../controllers/topic_controller");

router.route("/").post(checkAdmin,createTopic);
router.route("/all").get(getTopics);
module.exports=router;