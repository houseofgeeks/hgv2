const router=require("express").Router();
const {checkAdmin}=require("../middlewares/authMiddleware");
const {createSubtopic,addResource, getSubtopics}=require("../controllers/subtopic_controller");

router.route("/").post(checkAdmin,createSubtopic);
router.route("/addResource").patch(checkAdmin,addResource);
router.route("/getsubtopics/topicId").get(getSubtopics);
module.exports=router;