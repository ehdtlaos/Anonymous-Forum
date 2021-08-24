import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Reply.css';

function Reply({id}) {
  const [currentReply, setCurrentReply] = useState(null);
  console.log(id);
  const getReply = async (comment_id) => {
    try {
      const fetchReply = await axios.get(`/posting/${comment_id}/reply`);
      console.log(fetchReply);
      if (fetchReply.data !== undefined) {
        setCurrentReply(fetchReply.data);
      } else{
        setCurrentReply('none');
      }
    } catch(e) {
      console.log('error when fetching reply data');
    }
  }

  useEffect(() => {
    getReply(id)
  }, [])

  console.log(currentReply);

  if (currentReply !== null && currentReply !== 'none') {
    return (
      <div className="reply_main">
        {currentReply.map((reply) => (
          (reply.comment_id === id) ? (
          <div className="replies" key={reply.reply_id}>
            <div className="reply_name">{reply.reply_nick_name}</div>
            <div className="reply_date">{reply.reply_created ?? 'Aug 24, 2021'}</div>
            <div className="reply_body">{reply.reply_body}</div>
            <div className="reply_like">Like: {reply.reply_like ?? 0}</div>
            <div className="reply_dislike">Dislike: {reply.reply_dislike ?? 0}</div>
          </div>
          ) : null
        ))}
      </div>
    )
  } else {
    return null;
  }
}

export default Reply;