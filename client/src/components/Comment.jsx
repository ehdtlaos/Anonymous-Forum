import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Comment.css';
import Reply from './Reply.jsx';
import WriteReply from './WriteReply.jsx';
import moment from 'moment';

function Comment({post, show}) {
  const [currentComment, setCurrentComment] = useState(null);
  const [writeReplyShow, setWriteReplyShow] = useState(false);
  const [comment_key, setComment_key] = useState(null);

  console.log(comment_key)

  const viewReplyComments = (id) => {
    setComment_key(id);
    writeReplyShow ? setWriteReplyShow(false) : setWriteReplyShow(true);
  }

  const getComment = async (id) => {
    try {
      const fetchComment = await axios.get(`/posting/${id}/comment`);
      if (fetchComment !== undefined) {
        setCurrentComment(fetchComment.data);
      } else{
        setCurrentComment('none');
      }
    } catch(e) {
      console.log('error when fetching comment data');
    }
  }

  useEffect(() => {
    getComment(post)
  }, [])

  useEffect(() => {
    if (show === true) {
      for (let i = 0; i < currentComment.length; i++) {
        if (post === currentComment[i].post_id) {
          currentComment[i].comment_show = true;
        }
      }
    }
  }, [show])

  if (currentComment !== null && currentComment !== 'none') {
    return (
      <div className="comment_main">
        {currentComment.map((comments) => (
          (comments.post_id === post) ? (
          <div className="comments" key={comments.comment_id}>
            <div className="comments_name">{comments.comment_nick_name}</div>
            <div className="comments_date">{comments.comment_created ? moment(comments.comment_created).format("MMM Do YY"): 'Aug 24, 2021'}</div>
            <div className="comments_body">{comments.comment_body}</div>
            <div className="comments_like">{comments.comment_like ?? 0} likes</div>
            <div className="comments_dislike">{comments.comment_dislike ?? 0} dislikes</div>
            <div className="comments_reply" >Reply</div>
            <Reply id={comments.comment_id} />
            <div className="comments_write" onClick={() => {viewReplyComments(comments.comment_id)}}>write</div>
            <div className="comments_delete">delete</div>
            <WriteReply handleClose={viewReplyComments} show={writeReplyShow} comment={comment_key} />
          </div>
          ) : null
        ))}
      </div>
    )
  } else {
    return null;
  }
}

export default Comment;