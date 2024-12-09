import React from 'react'

const ChatMessages = ({profileImg, diplayName, message}) => {
  console.log("profileImg",profileImg, diplayName, message)
  return (
    <div className='flex items-center gap-2'>
    <img className='w-6 my-2 rounded-full' src={profileImg} alt="user"/>
    <span className='text-xs font-semibold'>{diplayName}</span>
    <span className='text-xs font-semibold'>{message}</span>
    </div>
  )
}

export default ChatMessages