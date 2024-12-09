import React from 'react'

const MostPopularVideo = ({info}) => {
  const {snippet, statistics} = info;
  const {channelTitle, title, thumbnails} = snippet
  return (
    <div className='flex m-4 mb-2 mt-2'>
      <div className='w-40 m-2 flex-none'>
        <img className='rounded-lg'
          src={thumbnails.high.url}
          alt='video not found'
        />
      </div>
     <ul>
        <li className='font-sans font-bold py-2 text-sm'>{title}</li>
        <li className='text-xs font-sans font-semibold pb-1'>{channelTitle}</li>
        <li className='text-xs font-sans font-semibold'>{statistics.viewCount}</li>
     </ul>
     <div className='p-4'>
     </div>
    </div>
  )
}

export default MostPopularVideo