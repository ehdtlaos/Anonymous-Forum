import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WriteComment.css';

function WritePost({show, handleClose}) {
  const showHideWritePost = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideWritePost}>
      <div className="writePost">
        <section className="writePost_modal">
          <div className="writePost_inside_model" >
            <div className="writePost_title">
              Write Post
            </div>
            <div className="writeReviewButton_wrappers">
            <input type="submit" value="Submit" className="writeReviewButton" />
            <div className="writeReviewButton_divider" />
            <button type="button" className="writeReviewButton" onClick={handleClose}>Close</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default WritePost;