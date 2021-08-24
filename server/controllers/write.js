const express = require('express');
const db = require('../../database/database.js');

const app = express();

module.exports = {
  writePost: (req, res) => {
    db.writePosts((err, result) => {
      if (err) {
        res.status(400);
        console.log(err);
      }
      res.status(200);
      res.send(result);
    })
  },

  writeComment: (req, res) => {
    const { post_id } = req.params;
    db.writeComments(post_id, (err, result) => {
      if (err) {
        res.status(400)
        console.log(err);
      }
      res.status(200);
      res.send(result);
    })
  },

  writeReply: (req, res) => {
    let { comment_id } = req.params;
    db.writeReplys(comment_id, (err, result) => {
      if (err) {
        res.status(400);
        console.log(err);
      }
      res.status(200);
      res.send(result);
    })
  },

}