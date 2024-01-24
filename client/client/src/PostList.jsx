import axios from 'axios'
import { useEffect, useState } from 'react'
import CommentCreate from './CommentCreate'
import CommentsList from './CommentsList'

const PostList = () => {

    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts')
        console.log(res.data)
        setPosts(res.data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const renderPosts = Object.values(posts).map(post => {
        return (
            <div key={post.id} className="bg-white p-8 rounded-lg shadow-lg ml-4 mt-4 mb-4">
                <h1 className="text-xl font-semibold mb-4">{post.title}</h1>
                <hr/>
                <h3 className="text-xl font-semibold mb-4 mt-4">Comments</h3>
                <CommentsList comments = {post.comments}/>
                <CommentCreate fetchPosts={fetchPosts} postId={post.id}/>
            </div>
        )
    })

  return (
    <div className='flex flex-row justify-center items-center flex-wrap'>
        {renderPosts}
    </div>
  )
}

export default PostList