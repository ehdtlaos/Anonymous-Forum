// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './WritePost.css';

// function WritePost({show, handleClose}) {
//   const [nickName, setNickName] = useState(null);
//   const [password, setPassword] = useState(null);
//   const [body, setBody] = useState(null);

//   const showHideWritePost = show ? "modal display-block" : "modal display-none";

//   const updateBody = (e) => {
//     setBody(e.target.value);
//   }

//   const updatePassword = (e) => {
//     setPassword(e.target.value)
//   }

//   const updateNickname = (e) => {
//     setNickName(e.target.value)
//   }


//   return (
//     <div className={showHideWritePost}>
//       <div className="writePost">
//         <section className="writePost_modal">
//           <div className="writePost_inside_model" >
//             <div className="writePost_title">
//               Write Post
//             </div>

//             <div className="writePostNickName">
//               <label htmlFor="writPostNickName_input" className="writePostNickName_label">
//                What is your nickname *:
//               </label>
//               <input type="text" name="writeNickname" onChange={updateNickname} placeholder="Example: Ubin" maxLength="60" id="writePostNickName_input" required />
//             </div>

//             <div className="writePostPassword">
//               <label htmlFor="writPostNickPassword_input" className="writePostPassword_label">
//                What is your Password *:
//               </label>
//               <input type="password" name="writePassword" onChange={updatePassword} placeholder="Password to delete your post" maxLength="60" id="writePostPassword_input" required />
//             </div>

//             <div className="writePostTitle">
//               <label htmlFor="writPostTitle_input" className="writePostTitle_label">
//                What is your title *:
//               </label>
//               <input type="text" name="writeTitle" onChange={updateNickname} placeholder="Example: Ubin is late again" maxLength="250" id="writePostTitle_input" required />
//             </div>

//           <div className="writePostBody">
//             <label className="writePostBody_label" htmlFor="writePostBody_input">
//               Post Body *:
//             </label>
//             <textarea type="text" name="postBody" id="writePostBody_input" onChange={updateBody} maxLength="1000" placeholder="Example: She missed morning kickoff!" required />
//           </div>



//             <div className="writePostButton_wrappers">
//             <input type="submit" value="Submit" className="writePostButton" />
//             <div className="writePostButton_divider" />
//             <button type="button" className="writePostButton" onClick={handleClose}>Close</button>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }

// export default WritePost;