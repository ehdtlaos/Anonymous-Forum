const { Pool, Client } = require("pg");
const { password } = require('../config.js');

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "MVP",
  password: password,
  port: 5432,
});

const writePosts = async (nickName, password, title, body, callback) => {
  const queryString = `INSERT INTO post (post_nick_name, post_password, post_title, post_body, post_created) VALUES ('${nickName}', '${password}', '${title}', '${body}', NOW())`
  await pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    }
    callback(null, 'success');
  });
};

const writeComments = async (post_id, nickName, password, body,  callback) => {
  const queryString = `INSERT INTO comment (post_id, comment_nick_name, comment_password, comment_body, comment_created) VALUES ('${post_id}', '${nickName}', '${password}', '${body}', NOW())`
  await pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    }
    callback(null, 'success');
  });
};

const writeReplys = async (comment_id, nickName, password, body, callback) => {
  const queryString = `INSERT INTO commentreply (comment_id, reply_nick_name, reply_password, reply_body, reply_created) VALUES ('${comment_id}', '${nickName}', '${password}', '${body}', NOW())`
  await pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    }
    callback(null, 'success');
  });
};

module.exports = {
  writePosts: writePosts,
  writeComments: writeComments,
  writeReplys: writeReplys,
}