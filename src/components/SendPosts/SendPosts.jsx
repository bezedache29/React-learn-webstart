import React, { useState } from 'react'

const SendPosts = () => {

  const [author, setAuthor] = useState()
  const [message, setMessage] = useState()

  const onClickPost = () => {
    createPostFetchRequest()
  }

  const data = {
    author: author,
    message: message
  };

  const createPostFetchRequest = () => {
    fetch('http://localhost:5500/posts', {
      method: 'post',
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
        <button type="button" onClick={() => onClickPost()}>Create post</button>
      </form>
    </div>
  )
}

export default SendPosts