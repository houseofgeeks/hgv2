const router = require("express").Router();
const { checkAdmin,checkLogin } = require("../middlewares/authMiddleware");
const { create, submitAssignment,verifyAssignment } = require("../controllers/assignment_controller.js");
const { assignmentMiddleware } = require("../middlewares/assignment-middleware.js");

router.post('/', checkAdmin, create);
router.post('/submit/:id',checkLogin ,assignmentMiddleware, submitAssignment);
router.post('/verify/:id',checkAdmin, verifyAssignment);
module.exports = router;