import React, { useState } from 'react';
import axios from 'axios';
import './DeleteComment.css';

function DeleteComment({show, handleClose, commentId}) {
  const [password, setPassword] = useState(null);

  const showHideDeleteComment = show ? "modal display-block" : "modal display-none";

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const deleteComments = async () => {
    try {
      const post = {
        passwordId : password
      }
      await axios.put(`/delete/comment/${commentId}`, post);
      console.log('successfully deleted a post')
    } catch(e) {
      console.log('error when deleting a post');
    }
  }

  return (
    <div className={showHideDeleteComment}>
      <div className="deleteComment">
        <section className="deleteComment_modal">
          <div className="deleteComment_inside_model" >
            <div className="deleteComment_title">
              Delete Post
            </div>
          <form onSubmit={deleteComments}>
            <div className="deleteCommentPassword">
              <label htmlFor="deleteCommentPassword_input" className="deleteCommentPassword_label">
               Password *:
              </label>
              <input type="password" name="deletePassword" onChange={updatePassword} placeholder="Password to delete your Comment" maxLength="60" id="deleteCommentPassword_input" required />
            </div>

            <div className="deleteCommentButton_wrappers">
            <input type="submit" value="Submit" className="deleteCommentButton" />
            <div className="deleteCommentButton_divider" />
            <button type="button" className="deleteCommentButton" onClick={handleClose}>Close</button>
            </div>
          </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DeleteComment;