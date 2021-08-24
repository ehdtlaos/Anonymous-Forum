const { Pool, Client } = require("pg");
const { password } = require('../config.js');

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "MVP",
  password: password,
  port: 5432,
});

const getPost = async (page, count, callback) => {
  const queryString = `SELECT post_id, post_nick_name, post_title, post_body, post_img, post_created, post_upvote FROM post WHERE post_delete = false ORDER BY post_id DESC LIMIT ${count} OFFSET ${count * page};`
  await pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    }
    callback(null, res.rows);
  });
};

const getPostComment = async (post_id, callback) => {
  const queryString = `SELECT comment_id, post_id, comment_nick_name, comment_body, comment_like, comment_dislike, comment_created FROM comment WHERE comment_delete = false AND post_id = ${post_id}`
  await pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    }
    callback(null, res.rows);
  })
}

const getPostCommentReply = async (comment_id, callback) => {
  const queryString = `SELECT reply_id, comment_id, reply_nick_name, reply_body, reply_created, reply_like, reply_dislike FROM commentreply WHERE reply_delete = false AND comment_id = ${comment_id}`;
  await pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    }
    callback(null, res.rows);
  })
}

module.exports = {
  getPost: getPost,
  getPostComment: getPostComment,
  getPostCommentReply: getPostCommentReply,
}