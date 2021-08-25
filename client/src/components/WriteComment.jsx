import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WriteComment.css';

function WriteComment({show, post, handleClose}) {
  const showHideWriteComment = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideWriteComment}>
      <div className="writeComment">
        <section className="writeComment_modal">
          <div className="writeComment_inside_model" >
            <div className="writeComment_title">
              Write Comment
            </div>
            <div className="writeCommentButton_wrappers">
            <input type="submit" value="Submit" className="writeCommentButton" />
            <div className="writeCommentButton_divider" />
            <button type="button" className="writeCommentButton" onClick={handleClose}>Close</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default WriteComment;