import React from 'react'

const VideoCard = ({info}) => {
  console.log("info",info)
  const {snippet, statistics} = info;
  const {channelTitle, title, thumbnails} = snippet
  return (
    <div className='shadow-lg m-4 w-80'>
      <img className='rounded-lg'
      src={thumbnails.high.url}
      alt='video not found'
      />
     <ul>
      <li className='font-bold py-2'>{title}</li>
      <li>{channelTitle}</li>
      <li>{statistics.viewCount}</li>
     </ul>
    </div>
  )
}

export default VideoCard