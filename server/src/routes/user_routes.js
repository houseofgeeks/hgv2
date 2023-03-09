const router = require('express').Router();

const {createUser,loginUser}=require('../controllers/user_controller');




router.route('/register').post(createUser);



router.route('/login').post(loginUser);




module.exports = router;