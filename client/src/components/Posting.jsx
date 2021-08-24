import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Posting.css';
import Comment from './Comment.jsx'

function Posting() {
  const [currentPosting, setCurrentPosting] = useState(null);

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
        {currentPosting.map((post) => (
          <div className="postings" key={post.post_id}>
            <div className="postings_name">{post.post_nick_name}</div>
            <div className="postings_time">{post.post_created ? post.post_created: 'Aug 25, 2021'}</div>
            <div className="postings_title">{post.post_title}</div>
            <div className="postings_body">{post.post_body}</div>
            <div className="postings_like">like: {post.post_upvote ? post.post_upvote: 0}</div>
            <div className="postings_comment">comment</div>
            <Comment post={post.post_id} />
          </div>
        ))}
      </div>
    )
  } else {
    return (
      <div>loading...</div>
    )
  }
}

export default Posting;