const { Pool, Client } = require("pg");
const { password } = require('../config.js');
const { ADMINPW } = require('../server/config.js')

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "storyTellingWeb",
  password: password,
  port: 5432,
});

const deletePost = async (post_id, callback) => {
  const queryString = `UPDATE post SET post_delete = true where post_id = ${post_id};`
  await pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    }
    callback(null, res.rows);
  });
};

const deleteComment = async (comment_id, callback) => {
  const queryString = `UPDATE comment SET comment_delete = true where comment_id = ${comment_id};`
  await pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    }
    callback(null, res.rows);
  })
}

const deleteReply = async (reply_id, callback) => {
  const queryString = `UPDATE commentreply SET reply_delete = true where reply_id = ${reply_id};`
  await pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    }
    callback(null, res.rows);
  })
}

module.exports = {
  deletePost: deletePost,
  deleteComment: deleteComment,
  deleteReply: deleteReply,
}