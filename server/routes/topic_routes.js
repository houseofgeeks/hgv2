const router=require("express").Router();
const {checkAdmin}=require("../middlewares/authMiddleware");
const {createTopic,getTopics, getTopicsByLevel}=require("../controllers/topic_controller");

router.route("/").post(checkAdmin,createTopic);
router.route("/all").get(getTopics);
router.route("/gettopicsbylevel/levelId").get(getTopicsByLevel);
module.exports=router;