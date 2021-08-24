import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Posting() {
  const [currentPosting, setCurrentPosting] = useState(null);

  const getPosting = async () => {
    try {
      const fetchPosting = await axios.get('/posting');
      setCurrentPosting(fetchPosting.data);
    } catch(e) {
      console.log('error when fetching posting data')
    }
  }

  useEffect(() => {
    getPosting();
  }, [])

  if (currentPosting !== null) {
    return (
      <div>
        {currentPosting.map((post) => (
          <div key={post.id}>
            <div>{post.post_nick_name}</div>
            <div>{post.post_title}</div>
            <div>{post.post_created ? post.post_created: 'Aug 25, 2021'}</div>
            <div>{post.post_body}</div>
            <div>{post.post_upvote ? post.post_upvote: 0}</div>
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