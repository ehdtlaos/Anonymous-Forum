const { Pool, Client } = require("pg");
const { password } = require('../config.js');

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "MVP",
  password: password,
  port: 5432,
});

const writePosts = async (callback) => {
  const queryString = ``
  await pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    }
    callback(null, res.rows);
  });
};

const writeComments = async (post_id, callback) => {
  const queryString = ``
  await pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    }
    callback(null, res.rows);
  });
};

const writeReplys = async (comment_id, callback) => {
  const queryString = ``
  await pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    }
    callback(null, res.rows);
  });
};

module.exports = {
  writePosts: writePosts,
  writeComments: writeComments,
  writeReplys: writeReplys,
}