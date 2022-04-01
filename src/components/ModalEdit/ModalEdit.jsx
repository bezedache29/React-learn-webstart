import { Modal } from '@mantine/core'
import React, { useEffect } from 'react'
import UpdatePsots from '../UpdatePosts/UpdatePosts'

const ModalEdit = ({ opened, setOpened, post }) => {

  return (
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Edit post"
        withCloseButton={true}
      >
        <UpdatePsots post={post} />
      </Modal>
  )
}

export default ModalEdit