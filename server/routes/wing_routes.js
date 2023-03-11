const { wingMiddleware } = require("../middlewares/wing-middleware.js");
const { checkAdmin } = require('../middlewares/authMiddleware');
const { create,getAll,getWingLevels,update,destroy } = require("../controllers/wing_controller.js");

const router = require("express").Router();

router.post('/', checkAdmin, wingMiddleware, create);
router.get('/', getAll);
router.get('/levels/:id', getWingLevels);
router.patch('/:id', checkAdmin, update);
router.delete('/:id', checkAdmin, destroy);
module.exports = router;