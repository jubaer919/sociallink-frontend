import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { featchposts } from '../redux/posts/postSlice'


function Post() {
  const { posts, loading, error } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(featchposts())
  }, [dispatch])

  if (loading) return <div>Loading....</div>
  if (error) return <div>{error}</div>

  return (
    <div>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  )
}

export default Post
