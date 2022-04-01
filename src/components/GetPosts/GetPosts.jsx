import { Button, Group, Modal } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import DeletePosts from '../DeletePosts/DeletePosts';
import UpdatePsots from '../UpdatePosts/UpdatePosts';

const GetPosts = () => {

  const [postsData, setPostsData] = useState()
  const [loaded, setLoaded] = useState(false)
  const [opened, setOpened] = useState(false)

  const getPostsData = async () => {
    const response = await fetch('http://localhost:5500/posts')
      .then((response) => response.json());
      setPostsData(response)
      setLoaded(true)
  };


  useEffect(() => {
    getPostsData()
  }, [setPostsData])


  return (
    <div>
      {loaded && postsData.map(post => {
        return(
          <div key={post._id}>
            <p>{post.author}</p>
            <p>{post.message}</p>
            <p>{post.date}</p>
            <UpdatePsots post={post} />
            <Modal 
              opened={opened}
              onClose={() => setOpened(false)}
              title="Are you sure ?"
              withCloseButton={true}
            >
              <DeletePosts id={post._id} />
            </Modal>
            <Group position="left">
              <Button onClick={() => setOpened(true)}>Delete Post</Button>
            </Group>
          </div>
        )
      })}
    </div>
  )
}

export default GetPosts