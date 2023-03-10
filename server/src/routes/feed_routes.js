const router=require('express').Router();
const {createFeed,getAllFeeds,updateFeed,deleteFeed,upvoteFeed}=require('../controllers/feed_controller');
const {checkLogin,checkAdmin}=require('../middlewares/authMiddleware');

router.post('/',checkAdmin,createFeed);
router.delete('/:id',checkAdmin,deleteFeed);
router.patch('/:id',checkAdmin,updateFeed);
router.patch('/:id/upvote',checkLogin,upvoteFeed);
router.get('/all',checkLogin,getAllFeeds);

module.exports=router;
