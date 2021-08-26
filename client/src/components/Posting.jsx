import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import './Posting.css';
import Comment from './Comment.jsx'
import WriteComment from './WriteComment.jsx';
import WritePost from './WritePost.jsx';
import DeletePost from './DeletePost.jsx';

function Posting() {
  const [currentPosting, setCurrentPosting] = useState(null);
  const [writeCommentShow, setWriteCommentShow] = useState(false);
  const [writePostShow, setWritePostShow] = useState(false);
  const [commentId, setCommentId] = useState(null);
  const [deletePostShow, setDeletePostShow] = useState(false);
  const [postId, setPostId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const toLeft = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  const toRight = () => {
    if (currentPosting.length > 0)
    setCurrentPage(currentPage + 1)
  }

  const viewDeletePost = (id) => {
    deletePostShow ? setDeletePostShow(false) : setDeletePostShow(true);
    setPostId(id);
  }

  const viewPostComments = () => {
    writePostShow ? setWritePostShow(false) : setWritePostShow(true);
  }

  const viewWriteComments = (id) => {
    writeCommentShow ? setWriteCommentShow(false) : setWriteCommentShow(true);
    setCommentId(id);
  }

  const getPosting = async () => {
    try {
      const fetchPosting = await axios.get(`/posting/?page=${currentPage}&count=10`);
      setCurrentPosting(fetchPosting.data);
    } catch(e) {
      console.log('error when fetching posting data');
    }
  }

  useEffect(() => {
    getPosting();
  }, [])

  useEffect(() => {
    getPosting();
  }, [currentPage])

  if (currentPosting !== null) {
    return (
      <div className="main_postings">
        <div className="notice_together">
          <div className="notice">
            Notice*: Anonymous Forum is still under a development.
            Functionalities that are still under development: like, dislike, search, clickable page number
          </div>
        </div>
        <div className="main_together">
        <div className="main_before" onClick={() => {
          toLeft()
        }}>Left</div>
        <div className="main_write" onClick={() => {viewPostComments()}}>WRITE</div>
        <div className="main_after" onClick={() => {
          toRight()
        }}>Right</div>
        </div>
        <WritePost show={writePostShow} handleClose={viewPostComments} />
        {currentPosting.map((post) => (
          <div className="postings" key={post.post_id}>
            <div className="postings_name">{post.post_nick_name}</div>
            <div className="postings_time">{post.post_created ?moment(post.post_created).format("MMM Do YY") : 'Aug 25, 2021'}</div>
            <div className="postings_title">{post.post_title}</div>
            <div className="postings_body">{post.post_body}</div>
            <div className="postings_like">{post.post_upvote ? post.post_upvote: 0} likes</div>
            <div className="postings_comment">comment</div>
            <div className="postings_write"  onClick={() => {viewWriteComments(post.post_id)}}>write</div>
            <div className="postings_delete" onClick={() => {viewDeletePost(post.post_id)}}>delete</div>
            <Comment post={post.post_id} />
            <WriteComment show={writeCommentShow} post={commentId} handleClose={viewWriteComments} />
            <DeletePost show={deletePostShow} handleClose={viewDeletePost} postId={postId}/>
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