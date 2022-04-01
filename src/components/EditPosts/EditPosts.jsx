import { Button, Group, Modal, TextInput } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useForm } from '@mantine/form'

const EditPosts = ({ post, status }) => {

  const [modal, setModal] = useState(false)
  const [author, setAuthor] = useState(post.author)
  const [message, setMessage] = useState(post.message)
  const [data, setData] = useState(null)

  const form = useForm({
    initialValues: {
      author,
      message
    },
  });

  const updatePost = (values) => {
    setData(values)
  }

  useEffect(() => {
    if (data !== null) {
      updatePostFetchRequest(post._id)
      setModal(false)
      status(true)
    }
  }, [data])

  const updatePostFetchRequest = (id) => {
    fetch(`http://localhost:5500/posts/${id}`, {
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
    <>
      <Button fullWidth type="button" onClick={() => setModal(true)}>Edit</Button>

      <Modal
        opened={modal}
        onClose={() => setModal(false)}
        title={'Update post of ' + post.author + ' ?'}
      >
        <form action="" onSubmit={form.onSubmit((values) => updatePost(values))}>
          <TextInput 
            required 
            label="Author" 
            onChange={(e) => setAuthor(e.target.value)} 
            value={author} 
            {...form.getInputProps('author')}
          />
          <TextInput 
            required 
            label="Message" 
            onChange={(e) => setMessage(e.target.value)} 
            value={message} 
            {...form.getInputProps('message')}
          />
          <Group position="right" style={{ marginTop: 10 }}>
            <Button type="submit">Yes</Button>
            <Button color="red" onClick={() => setModal(false)}>No</Button>
          </Group>
        </form>
      </Modal>
    </>
  )
}

export default EditPosts