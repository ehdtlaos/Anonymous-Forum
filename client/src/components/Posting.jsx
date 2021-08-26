import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Posting.css';
import Comment from './Comment.jsx'
import WriteComment from './WriteComment.jsx';
import WritePost from './WritePost.jsx';

function Posting() {
  const [currentPosting, setCurrentPosting] = useState(null);
  const [writeCommentShow, setWriteCommentShow] = useState(false);
  const [writePostShow, setWritePostShow] = useState(false);

  const viewPostComments = () => {
    writePostShow ? setWritePostShow(false) : setWritePostShow(true);
  }

  const viewWriteComments = () => {
    writeCommentShow ? setWriteCommentShow(false) : setWriteCommentShow(true);
  }

  const getPosting = async () => {
    try {
      const fetchPosting = await axios.get('/posting');
      setCurrentPosting(fetchPosting.data);
    } catch(e) {
      console.log('error when fetching posting data');
    }
  }

  useEffect(() => {
    getPosting();
  }, [])

  if (currentPosting !== null) {
    return (
      <div className="main_postings">
        <div className="main_write" onClick={() => {viewPostComments()}}>WRITE</div>
        <WritePost show={writePostShow} handleClose={viewPostComments} />
        {currentPosting.map((post) => (
          <div className="postings" key={post.post_id}>
            <div className="postings_name">{post.post_nick_name}</div>
            <div className="postings_time">{post.post_created ? post.post_created: 'Aug 25, 2021'}</div>
            <div className="postings_title">{post.post_title}</div>
            <div className="postings_body">{post.post_body}</div>
            <div className="postings_like">{post.post_upvote ? post.post_upvote: 0} likes</div>
            <div className="postings_comment">comment</div>
            <div className="postings_write"  onClick={() => {viewWriteComments()}}>write</div>
            <div className="postings_delete">delete</div>
            <Comment post={post.post_id} />
            <WriteComment show={writeCommentShow} post={post.post_id} handleClose={viewWriteComments} />
          </div>
        ))}
      </div>
    )
  } else {
    return (
      <div className="main_postings">loading...</div>
    )
  }
}

export default Posting;