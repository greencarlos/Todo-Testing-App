import React, {useState} from 'react'

const PostForm = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [userId, setUserId] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()

    const postData =  {
      title,
      body,
      userId: parseInt(userId, 10),

    }

    try {
      setIsLoading(true)
      const response = await fetch('<https://jsonplaceholder.typicode.com/posts>', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const data = await response.json()
      console.log(data)
    } catch(error) {
      console.error('Error posting data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) return <p>Loading...</p>

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor="body">Body:</label>
      <input id="body" value={body} onChange={(e) => setBody(e.target.value)} />

      <label htmlFor="userId">User ID:</label>
      <input id="userId" type="number" value={userId} onChange={(e) => setUserId(e.target.value)} />

      <button type="submit">Submit Post</button>
    </form>
  )
}

export default PostForm
