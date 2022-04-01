import { Text } from '@mantine/core';
import React from 'react';
import SendPosts from '../../components/SendPosts/SendPosts';

const NewPosts = () => {
  return (
    <>
      <Text size="xl" align="center" weight={700} style={{ fontSize: 40 }}>Create a new post</Text>
      <SendPosts />
    </>
  );
};

export default NewPosts;