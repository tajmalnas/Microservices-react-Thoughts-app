import { useState } from "react"
import axios from 'axios'
const PostCreate = () => {

    const [title, setTitle] = useState('')

    const submitPost = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/posts', {
            title
        })
        setTitle('')
    }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-4 max-w-md w-full">
        <h1 className="text-xl font-semibold mb-4">Thoughts</h1>
        <p className="text-gray-600 mb-6">Enter your Thoughts Fearlessly</p>
        <div className="mb-4">
            <input type="text" onChange={(e)=>setTitle(e.target.value)} className="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500" />
        </div>
        <button onClick={submitPost} className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">Submit</button>
    </div>
  )
}

export default PostCreate