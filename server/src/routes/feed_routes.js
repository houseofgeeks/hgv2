const router=require('express').Router();
const {createFeed,updateFeed,deleteFeed,getAllFeeds,upVoteFeed}=require('../controllers/feed_controller');
const {checkLogin,checkAdmin}=require('../middlewares/authMiddleware');

router.post('/',checkAdmin,createFeed);
router.patch('/:id',checkAdmin,updateFeed);
router.delete('/:id',checkAdmin,deleteFeed);
router.patch('/:id/upvote',checkLogin,upVoteFeed);
router.get('/all',checkLogin,getAllFeeds);

module.exports=router;
