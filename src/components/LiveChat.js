import React, { useEffect, useState } from 'react'
import { LIVECHAT, LIVEMESSAGES } from '../utils/constant'
import { useSearchParams } from 'react-router-dom'
import ChatMessages from './ChatMessages';

const LiveChat = () => {
  const [searchParam] =useSearchParams();
  const [liveChatId, setLiveChatId] =useState(null)
  const [message,setMessage] = useState([])
  useEffect(()=>{
    getLiveChat()
  },[])
  const getLiveChat = async()=>{
    const data = await fetch(LIVECHAT.replace("VIDEO_ID", searchParam.get('v')))
    const json = await data.json()
    const activeLiveChatId = json.items[0]?.liveStreamingDetails?.activeLiveChatId
    setLiveChatId(activeLiveChatId)
    console.log("json444444444", json)
  }
  useEffect(()=>{
    if(!liveChatId) return ;
    const interval = setInterval(getChannelComments,1000)
    return ()=>clearInterval(interval)
    // getChannelComments();
  },[liveChatId])
   const getChannelComments = async()=>{
    const data = await fetch(LIVEMESSAGES.replace("CHANNEL_ID", liveChatId))
    const json = await data.json()
    setMessage(json.items)
    console.log("**************", json)
  }
  return (
    <div>
      {message && message.map((msg)=>{
       return <ChatMessages profileImg={msg.authorDetails.profileImageUrl} diplayName={msg.authorDetails.displayName} message={msg.snippet.displayMessage}/>
      })}
    </div>
  )
}

export default LiveChat