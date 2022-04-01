import { Button, Group, Modal } from '@mantine/core'
import React, { useState } from 'react'

const DeletePosts = ({ post, status }) => {

  const [modal, setModal] = useState(false)

  const onClickPost = () => {
    setModal(true)
    // deletePostFetchRequest(id)
  }

  const deletePost = () => {
    deletePostFetchRequest(post._id)
    setModal(false)
    status(true)
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
      <Button fullWidth color="red" type="button" onClick={() => onClickPost()}>Delete</Button>

      <Modal
        opened={modal}
        onClose={() => setModal(false)}
        title={'Delete post of ' + post.author + ' ?'}
      >
        <Group position="right">
          <Button onClick={() => deletePost()}>Yes</Button>
          <Button color="red" onClick={() => setModal(false)}>No</Button>
        </Group>
      </Modal>
    </>
  )
}

export default DeletePosts