const express = require('express');
const db = require('../../database/write.js');

const app = express();

module.exports = {
  writePost: (req, res) => {
    const { nickName, password, title, body } = req.body
    db.writePosts(nickName, password, title, body, (err, result) => {
      if (err) {
        res.status(400);
        console.log(err);
      }
      res.status(200);
      res.end();
    })
  },

  writeComment: (req, res) => {
    const { post_id, nickName, password, body } = req.body;
    db.writeComments(post_id, nickName, password, body, (err, result) => {
      if (err) {
        res.status(400)
        console.log(err);
      }
      res.status(200);
      res.end();
    })
  },

  writeReply: (req, res) => {
    let { comment_id, nickName, password, body } = req.body;
    db.writeReplys(comment_id, nickName, password, body, (err, result) => {
      if (err) {
        res.status(400);
        console.log(err);
      }
      res.status(200);
      res.end();
    })
  },

}