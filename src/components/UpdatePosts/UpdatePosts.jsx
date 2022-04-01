import React, { useState } from 'react'

const UpdatePsots = ({ post }) => {

  const [author, setAuthor] = useState(post.author)
  const [message, setMessage] = useState(post.message)

  const onClickPost = () => {
    updatePostFetchRequest(post._id)
  }

  const data = {
    author: author,
    message: message
  }

  const updatePostFetchRequest = (id) => {
    fetch('http://localhost:5500/posts/' + id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response) => {
        if(response.error) {
          console.log(response.error)
        } else {
          console.log(response)
        }
    })
  }

  return (
    <div>
      <form action="">
        <label htmlFor="author">Author</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
        <br />
        <label htmlFor="message">Message</label>
        <input type="text"  value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button type="button" onClick={() => onClickPost()}>Update post</button>
      </form>
    </div>
  )
}

export default UpdatePsots