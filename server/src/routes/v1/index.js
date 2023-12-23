const express = require('express');
const router = express.Router();

const {createUser} = require('../../controller/user-controller');
const {validateUserRequest} = require('../../middlewares/user-request-middleware');

router.post('/create', validateUserRequest,createUser);

module.exports = router;


