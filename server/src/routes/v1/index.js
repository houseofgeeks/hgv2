const express = require('express');
const router = express.Router();

const {createUser} = require('../../controller/user-controller');
const upload = require('../../config/multer.config');
const {validateUserRequest} = require('../../middlewares/user-request-middleware');

router.post('/create', upload.single('image') ,validateUserRequest,createUser);

module.exports = router;


