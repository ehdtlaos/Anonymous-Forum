const express = require('express');
const db = require('../../database/database.js');

const app = express();

module.exports = {
  getPosting: (req, res) => {
    let {page, count} = req.query;
    if (page === undefined) {
      page = 0;
    };
    if (count === undefined) {
      count = 10;
    };
    db.getPost(page, count, (err, result) => {
      if (err) {
        res.status(400);
        console.log(err);
      }
      res.status(200);
      res.send(result);
    })
  },

  getPostComment: (req, res) => {
    const { post_id } = req.params;
    db.getPostComment(post_id, (err, result) => {
      if (err) {
        res.status(400)
        console.log(err);
      }
      res.status(200);
      res.send(result);
    })
  },

  getPostCommentReply: (req, res) => {
    let { comment_id } = req.params;
    db.getPostCommentReply(comment_id, (err, result) => {
      if (err) {
        res.status(400);
        console.log(err);
      }
      res.status(200);
      res.send(result);
    })
  },

}