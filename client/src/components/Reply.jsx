import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import './Reply.css';
import DeleteReply from './DeleteReply.jsx';

function Reply({id}) {
  const [currentReply, setCurrentReply] = useState(null);
  const [deleteReplyShow, setDeleteReplyShow] = useState(false);
  const [currentReplyId, setReplyCommentId] = useState(null);

  const viewDeleteReply = (id) => {
    deleteReplyShow ? setDeleteReplyShow(false) : setDeleteReplyShow(true);
    setReplyCommentId(id);
  }

  const getReply = async (comment_id) => {
    try {
      const fetchReply = await axios.get(`/posting/${comment_id}/reply`);

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

  if (currentReply !== null && currentReply !== 'none') {
    return (
      <div className="reply_main">
        {currentReply.map((reply) => (
          (reply.comment_id === id) ? (
          <div className="replies" key={reply.reply_id}>
            <div className="reply_name">{reply.reply_nick_name}</div>
            <div className="reply_date">{reply.reply_created ?moment(reply.reply_created).format("MMM Do YY"): 'Aug 24, 2021'}</div>
            <div className="reply_body">{reply.reply_body}</div>
            <div className="reply_like">{reply.reply_like ?? 0} likes</div>
            <div className="reply_dislike">{reply.reply_dislike ?? 0} dislikes</div>
            <div className="reply_delete" onClick={() => {viewDeleteReply(reply.reply_id)}}>Delete</div>
            <DeleteReply show={deleteReplyShow} handleClose={viewDeleteReply} replyId={currentReplyId}/>
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