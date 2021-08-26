import React, { useState } from 'react';
import axios from 'axios';
import './DeleteReply.css';

function DeleteReply({show, handleClose, replyId}) {
  const [password, setPassword] = useState(null);

  const showHideReplyComment = show ? "modal display-block" : "modal display-none";

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const deleteReply = async () => {
    try {
      const post = {
        passwordId : password
      }
      await axios.put(`/delete/reply/${replyId}`, post);
      console.log('successfully deleted a post')
    } catch(e) {
      console.log('error when deleting a post');
    }
  }

  return (
    <div className={showHideReplyComment}>
      <div className="deleteReply">
        <section className="deleteReply_modal">
          <div className="deleteReply_inside_model" >
            <div className="deleteReply_title">
              Delete Reply
            </div>
          <form onSubmit={deleteReply}>
            <div className="deleteReplyPassword">
              <label htmlFor="deleteReplyPassword_input" className="deleteReplyPassword_label">
               Password *:
              </label>
              <input type="password" name="deletePassword" onChange={updatePassword} placeholder="Password to delete your Reply" maxLength="60" id="deleteReplyPassword_input" required />
            </div>

            <div className="deleteReplyButton_wrappers">
            <input type="submit" value="Submit" className="deleteReplyButton" />
            <div className="deleteReplyButton_divider" />
            <button type="button" className="deleteReplyButton" onClick={handleClose}>Close</button>
            </div>
          </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DeleteReply;