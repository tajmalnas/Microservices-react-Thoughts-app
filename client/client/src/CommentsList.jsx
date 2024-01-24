/* eslint-disable react/prop-types */
const CommentsList = ({comments}) => {

    const renderComments = comments.map(comment => {
        return (
          comment.status==="approved" && <li  className="ml-4" key={comment.id}>{comment.content}</li>
          || comment.status==="rejected" && <li className="ml-4 text-red-500" key={comment.id}>This comment has been rejected</li>
          || comment.status==="pending" && <li className="ml-4 text-gray-400" key={comment.id}>This comment is awaiting moderation</li>
        )
    })
    
  return (
    <ul className="mb-4">
        {renderComments}
    </ul>
  )
}

export default CommentsList