import React from 'react'
import GetPosts from '../../components/GetPosts/GetPosts'
import styles from './Posts.module.css'

const Posts = () => {
  return (
    <div className={styles.container}>
      <GetPosts />
    </div>
  )
}

export default Posts