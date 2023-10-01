const router = require("express").Router();

const { createUser, loginUser, getUser, updateUser, updatePassword } = require("../controllers/user_controller");
const { checkLogin } = require("../middlewares/authMiddleware");
const { route } = require("./project_routes");

// router.route('/register').post(upload.single("image"),createUser);
router.post("/register", createUser);
router.route("/login").post(loginUser);
router.get("/getuser/:id",getUser)
router.put("/updateuser/:id",checkLogin,updateUser)
router.put("/updatepassword/:id",checkLogin,updatePassword)

module.exports = router;
