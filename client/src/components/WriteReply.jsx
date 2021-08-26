import React, { useState } from 'react';
import axios from 'axios';
import './WriteReply.css'

function WriteReply({show, comment, handleClose}) {
  const [nickName, setNickName] = useState(null);
  const [password, setPassword] = useState(null);
  const [body, setBody] = useState(null);

  const showHideWriteReply = show ? "modal display-block" : "modal display-none";

  const updateBody = (e) => {
    setBody(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const updateNickname = (e) => {
    setNickName(e.target.value)
  }

  const createReply = async () => {
    try {
      const reply = {
        nickName: nickName,
        password: password,
        body: body
      }
      await axios.post(`/write/reply/${comment}`, reply);
      console.log('successfully created a post')
    } catch(e) {
      console.log('error when creating posting data');
    }
  }

  return (
    <div className={showHideWriteReply}>
      <div className="writeReply">
        <section className="writeReply_modal">
          <div className="writeReply_inside_model" >
            <div className="writeReply_title">
              Write Reply
            </div>


            <form onSubmit={createReply}>
            <div className="writeReplyNickName">
              <label htmlFor="writReplyNickName_input" className="writeReplyNickName_label">
               What is your nickname *:
              </label>
              <input type="text" name="writeNickname" onChange={updateNickname} placeholder="Example: Corey" maxLength="60" id="writeReplyNickName_input" required />
            </div>

            <div className="writeReplyPassword">
              <label htmlFor="writReplyPassword_input" className="writeReplyPassword_label">
               What is your Password *:
              </label>
              <input type="password" name="writeReplyPassword" onChange={updatePassword} placeholder="Password to delete your reply" maxLength="60" id="writeReplyPassword_input" required />
            </div>

          <div className="writeReplyBody">
            <label className="writeReplyBody_label" htmlFor="writeReplyBody_input">
              Reply Body *:
            </label>
            <textarea type="text" name="replyBody" id="writeReplyBody_input" onChange={updateBody} maxLength="1000" placeholder="Example: He speaks Chinese and did his skit in Chinese. Someone find that link!" required />
          </div>



            <div className="writeReplyButton_wrappers">
            <input type="submit" value="Submit" className="writeReplyButton" />
            <div className="writeReplyButton_divider" />
            <button type="button" className="writeReplyButton" onClick={handleClose}>Close</button>
            </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default WriteReply;