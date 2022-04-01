import React from 'react'
import ReactDOM from 'react-dom'
import GetPosts from './components/GetPosts/GetPosts'
import SendPosts from './components/SendPosts/SendPosts'

const App = () => {

  return (
    <>
      <GetPosts />
      <h1>créer post</h1>
      <SendPosts />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))