const express = require('express');
const db = require('../../database/delete.js');

const app = express();

module.exports = {
  deletePost: (req, res) => {
    const { post_id } = req.params;
    const { passwordId } = req.body;
    db.deletePost(post_id, passwordId, (err, result) => {
      if (err) {
        res.status(400);
        console.log(err);
      }
      res.status(200);
      console.log('updated');
      res.end();
    })
  },

  deleteComment: (req, res) => {
    const { comment_id } = req.params;
    const { passwordId } = req.body;
    db.deleteComment(comment_id, passwordId, (err, result) => {
      if (err) {
        res.status(400)
        console.log(err);
      }
      res.status(200);
      console.log('updated');
      res.end();
    })
  },

  deleteReply: (req, res) => {
    const { reply_id } = req.params;
    const { passwordId } = req.body;
    db.deleteReply(reply_id, passwordId, (err, result) => {
      if (err) {
        res.status(400);
        console.log(err);
      }
      res.status(200);
      console.log('updated');
      res.end();
    })
  },

}