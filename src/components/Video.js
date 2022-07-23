import React from 'react'
import ReactPlayer from 'react-player'

function Video() {
  return (
    <div className='videoPlayer'>
       <ReactPlayer width='70rem' height='35rem' controls url="https://www.youtube.com/watch?v=7sDY4m8KNLc&ab_channel=Codevolution"/>
    </div>
  )
}

export default Video