const router = require('express').Router();
const controller = require('./controllers');
const { ADMINPW } = require('./config.js');

router.get('/posting', controller.posting.getPosting);
router.get('/posting/:post_id/comment', controller.posting.getPostComment);
router.get('/posting/:comment_id/reply', controller.posting.getPostCommentReply);

router.put(`/delete/${ADMINPW}/post/:post_id`, controller.admin.deletePost)
router.put(`/delete/${ADMINPW}/comment/:comment_id`, controller.admin.deleteComment)
router.put(`/delete/${ADMINPW}/reply/:reply_id`, controller.admin.deleteReply)

router.post(`write/post/`, controller.write.writePost)
router.post(`write/comment/:post_id`, controller.write.writeComment)
router.post(`write/reply/:comment_id`, controller.write.writeReply)

module.exports = router;