import React from 'react'
import PhotoGet from './endepoints/PhotoGet'
import PhotoPost from './endepoints/PhotoPost'
import TokenPost from './endepoints/TokenPost'
import UserPost from './endepoints/UserPost'

const Api = () => {
  return (
    <div>
        <h2>UserPost</h2>
        <UserPost/>
        <h2>TokenPost</h2>
        <TokenPost/>
        <h2>PhotoPost</h2>
        <PhotoPost/>
        <h2>PhotoGet</h2>
        <PhotoGet />
    </div>
  )
}

export default Api
