const router=require("express").Router();
const {checkAdmin}=require("../middlewares/authMiddleware");
const {createSubtopic,addResource}=require("../controllers/subtopic_controller");

router.route("/").post(checkAdmin,createSubtopic);
router.route("/addResource").patch(checkAdmin,addResource);
module.exports=router;