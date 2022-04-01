import { Image, Title } from '@mantine/core'
import { useDocumentTitle } from '@mantine/hooks'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styles from './index.module.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import NavbarApp from './components/NavbarApp/NavbarApp'
import NewPosts from './pages/NewPosts/NewPosts'
import Posts from './pages/Posts/Posts'

const App = () => {

  const [title, setTitle] = useState('Learn React')
  useDocumentTitle(title);

  return (
    <>
      <Title align="center" order={1} className={styles.title}>Welcome - Home Page</Title>
      <div className={styles.image}>
        <Image radius="md" src='https://c.tenor.com/4IxtijQfVnEAAAAM/baby-scream-yeah.gif' />
      </div>
    </>
  )
}

ReactDOM.render(
  <Router>
    <NavbarApp />
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/new' element={<NewPosts />} />
    </Routes>
  </Router>,
document.getElementById('root'))