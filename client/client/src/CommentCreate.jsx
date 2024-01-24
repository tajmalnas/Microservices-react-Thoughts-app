/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react"

const CommentCreate = ({postId}) => {

    const [comment, setComment] = useState('');

    const addComment = async (event) => {
        event.preventDefault();
        console.log(comment)
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content: comment
        })
    }

  return (
    <div>
        <div className="mb-4">
            <input type="text" onChange={(e)=>setComment(e.target.value)} className="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500" />
        </div>
        <button onClick={addComment} className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-4 focus:outline-none">Add comment</button>
    </div>
  )
}

export default CommentCreate