// import React, { useState } from "react";
// import "./App.css";

// function Comment() {
//   const [comment, setComment] = useState("");
//   const [arr, setArr] = useState([]);

//   const handleForm = (e) => {
//     e.preventDefault();
//     if (comment.trim()) {
//       setArr([...arr, { text: comment }]);
//       setComment("");
//     }
//   };

//   return (
//     <div className="comment-container">
//       <form onSubmit={handleForm} className="comment-form">
//         <h1> COMMENT</h1>
//         <textarea
//           placeholder="Enter your comment..."
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           className="comment-input"
//         ></textarea>
//         <br />
//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </form>

//       {arr.length > 0 && (
//         <div className="comment-list">
//           <h2>Comments:</h2>
//           {arr.map((ele, i) => (
//             <div key={i} className="comment-item">
//               <p>{ele.text}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Comment;
