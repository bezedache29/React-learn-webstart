import React, { useEffect, useState } from 'react'
import { Card, Group, Image, SimpleGrid, Text, useMantineTheme } from '@mantine/core'
import DeletePosts from '../DeletePosts/DeletePosts'
import EditPosts from '../EditPosts/EditPosts'

const GetPosts = () => {

  const [postsData, setPostsData] = useState()
  const [loaded, setLoaded] = useState(false)
  const [change, setChange] = useState(false)

  useEffect(() => {
    if (change) {
      getPostsData()
      setChange(false)
    }
  }, [change])

  const getPostsData = async () => {
    const response = await fetch('http://localhost:5500/posts')
      .then((response) => response.json());
      setPostsData(response)
      setLoaded(true)
  };

  useEffect(() => {
    getPostsData()
  }, [setPostsData])

  const theme = useMantineTheme()

  const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7]

  return (
    <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}
    >
      {
      loaded && postsData.map(post => {
        return (
          <div style={{ width: 340, margin: 'auto' }} key={post._id}>
            <Card shadow="sm" p="lg">
              <Card.Section>
                <Image src="https://loremflickr.com/320/240/dog" height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                <Text weight={500}>{post.author}</Text>
              </Group>

              <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                {post.message}
              </Text>

              <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                <EditPosts post={post} status={setChange} />
                <DeletePosts post={post} status={setChange} />
              </Group>
            </Card>
          </div>
        )
      })
    }
    </SimpleGrid>
  )
}

export default GetPosts