import React from 'react'
import "./Cover.css"
import coverVideo from "../../media/coverVideo.mp4"

export const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={coverVideo} autoPlay loop muted />
        <h1>Name Last Name</h1>
        <p>Developer | Designer | Content Creator | Enterprenaur</p>
    </div>
  )
}
