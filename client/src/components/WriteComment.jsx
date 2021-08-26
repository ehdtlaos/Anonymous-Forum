import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WriteComment.css';

function WriteComment({show, post, handleClose}) {
  const [nickName, setNickName] = useState(null);
  const [password, setPassword] = useState(null);
  const [body, setBody] = useState(null);

  const showHideWriteComment = show ? "modal display-block" : "modal display-none";

  const updateBody = (e) => {
    setBody(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const updateNickname = (e) => {
    setNickName(e.target.value)
  }


  return (
    <div className={showHideWriteComment}>
      <div className="writeComment">
        <section className="writeComment_modal">
          <div className="writeComment_inside_model" >
            <div className="writeComment_title">
              Write Comment
            </div>



            <div className="writeCommentNickName">
              <label htmlFor="writCommentNickName_input" className="writeCommentNickName_label">
               What is your nickname *:
              </label>
              <input type="text" name="writeNickname" onChange={updateNickname} placeholder="Example: Brian" maxLength="60" id="writeCommentNickName_input" required />
            </div>

            <div className="writeCommentPassword">
              <label htmlFor="writCommentNickPassword_input" className="writeCommentPassword_label">
               What is your Password *:
              </label>
              <input type="password" name="writeCommentPassword" onChange={updatePassword} placeholder="Password to delete your post" maxLength="60" id="writeCommentPassword_input" required />
            </div>
          <div className="writeCommentBody">
            <label className="writeCommentBody_label" htmlFor="writeCommentBody_input">
              Post Body *:
            </label>
            <textarea type="text" name="postBody" id="writeCommentBody_input" onChange={updateBody} maxLength="1000" placeholder="Example: Brian is off to grocery store!" required />
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