import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Comment.css';
import Reply from './Reply.jsx';

function Comment({post}) {
  const [currentComment, setCurrentComment] = useState(null);

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

  console.log(currentComment);

  if (currentComment !== null && currentComment !== 'none') {
    return (
      <div className="comment_main">
        {currentComment.map((comments) => (
          (comments.post_id === post) ? (
          <div className="comments" key={comments.comment_id}>
            <div className="comments_name">{comments.comment_nick_name}</div>
            <div className="comments_date">{comments.comment_created ?? 'Aug 24, 2021'}</div>
            <div className="comments_body">{comments.comment_body}</div>
            <div className="comments_like">Like: {comments.comment_like ?? 0}</div>
            <div className="comments_dislike">Dislike: {comments.comment_dislike ?? 0}</div>
            <div className="comments_reply">Reply</div>
            <Reply id={comments.comment_id} />
            <div className="comments_write">write</div>
            <div className="comments_delete">delete</div>
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