import React from 'react'

const Comment = ({info}) => {
  const {authorDisplayName, textDisplay, publishedAt, authorProfileImageUrl, likeCount} = info.snippet.topLevelComment.snippet;
  const {totalReplyCount} = info.snippet
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 my-2'>
      <img className='w-12 h-12 rounded-full'
        src={authorProfileImageUrl}
        alt="user"
      />
      <div className='px-3'>
        <p className='text-sm'>
          <strong>{authorDisplayName}</strong>
          {(publishedAt)}</p>
        <p className='text-sm'>{textDisplay}</p>
        <p className='text-xs font-semibold'>Like : {likeCount}</p>
      </div>
    </div>
  )
}

export default Comment
