import React, { useEffect, useState } from 'react'
import { useForm } from '@mantine/form'
import { Button, TextInput } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

const SendPosts = () => {

  const [author, setAuthor] = useState('')
  const [message, setMessage] = useState('')
  const [data, setData] = useState(null)

  let navigate = useNavigate();

  const form = useForm({
    initialValues: {
      author,
      message
    },
  });

  const createPost = (values) => {
    setData(values)
  }

  useEffect(() => {
    if (data !== null) {
      createPostFetchRequest()
    }
  }, [data])

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
          navigate("/posts")
        }
    })
  }

  return (
    <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
      <form action="" onSubmit={form.onSubmit((values) => createPost(values))}>
        <TextInput required label="Author" onChange={(e) => setAuthor(e.target.value)} value={author} {...form.getInputProps('author')} />
        <TextInput required label="Message" onChange={(e) => setMessage(e.target.value)} value={message} {...form.getInputProps('message')} />
        <Button style={{ marginTop: 10 }} type="submit">Create Post</Button>
      </form>
    </div>
  )
}

export default SendPosts