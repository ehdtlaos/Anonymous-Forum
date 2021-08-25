import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WriteReply.css'

function WriteReply({show, comment, handleClose}) {
  const showHideWriteReply = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideWriteReply}>
      <div className="WriteReply">
        <section className="WriteReply_modal">
          <div className="WriteReply_inside_model" >
            <div className="WriteReply_title">
              Write Reply
            </div>
            <div className="writeReplyButton_wrappers">
            <input type="submit" value="Submit" className="writeReplyButton" />
            <div className="writeReplyButton_divider" />
            <button type="button" className="writeReplyButton" onClick={handleClose}>Close</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default WriteReply;