const router = require('express').Router();
const controller = require('./controllers');

router.get('/posting', controller.posting.getPosting);
router.get('/posting/:post_id/comment', controller.posting.getPostComment);
router.get('/posting/:comment_id/reply', controller.posting.getPostCommentReply);

router.put(`/delete/post/:post_id`, controller.delete.deletePost)
router.put(`/delete/comment/:comment_id`, controller.delete.deleteComment)
router.put(`/delete/reply/:reply_id`, controller.delete.deleteReply)

router.post(`/write/post`, controller.write.writePost)
router.post(`/write/comment/:post_id`, controller.write.writeComment)
router.post(`/write/reply/:comment_id`, controller.write.writeReply)

module.exports = router;