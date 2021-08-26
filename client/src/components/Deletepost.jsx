import React, { useState } from 'react';
import axios from 'axios';
import './DeletePost.css';

function WritePost({show, handleClose, postId}) {
  const [password, setPassword] = useState(null);

  const showHideWritePost = show ? "modal display-block" : "modal display-none";

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  console.log(password);
  console.log(postId);
  const deletePosting = async () => {
    try {
      const post = {
        passwordId : password
      }
      await axios.put(`/delete/post/${postId}`, post);
      console.log('successfully deleted a post')
    } catch(e) {
      console.log('error when deleting a post');
    }
  }


  return (
    <div className={showHideWritePost}>
      <div className="deletePost">
        <section className="deletePost_modal">
          <div className="deletePost_inside_model" >
            <div className="deletePost_title">
              Delete Post
            </div>
          <form onSubmit={deletePosting}>
            <div className="deletePostPassword">
              <label htmlFor="deletePostNickPassword_input" className="deletePostPassword_label">
               Password *:
              </label>
              <input type="password" name="deletePassword" onChange={updatePassword} placeholder="Password to delete your post" maxLength="60" id="deletePostPassword_input" required />
            </div>

            <div className="deletePostButton_wrappers">
            <input type="submit" value="Submit" className="deletePostButton" />
            <div className="deletePostButton_divider" />
            <button type="button" className="deletePostButton" onClick={handleClose}>Close</button>
            </div>
          </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default WritePost;