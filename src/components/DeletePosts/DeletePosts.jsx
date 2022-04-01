import React from 'react'

const DeletePosts = ({ id }) => {

  const onClickPost = () => {
    deletePostFetchRequest(id)
  }

  const deletePostFetchRequest = (id) => {
    fetch('http://localhost:5500/posts/' + id, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
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
    <>
      <button type="button" onClick={() => onClickPost()}>Delete</button>
    </>
  )
}

export default DeletePosts