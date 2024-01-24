import PostCreate from "./PostCreate"
import PostList from "./PostList"

const App = () => {
  return (
    <div className="bg-gray-100 h-full min-h-screen overflow-x-hidden">
      <div className="w-screen pt-4 flex mb-4 justify-center">
        <PostCreate/>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center w-screen">
        <PostList/>
      </div>
    </div>
  )
}

export default App