import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import MostPopularVideo from './MostPopularVideo';
import { MAXVIDEOS } from '../utils/constant';
import Comments from './Comments';
import LiveChat from './LiveChat';

const Watch = () => {
  const [searchParam] = useSearchParams();
  console.log("search param", searchParam.get("v"));
  const [videos,setVideos] = useState([])
  useEffect(()=>{
    getVideos();
  },[]) 
  const getVideos = async() =>{
    const data = await fetch(MAXVIDEOS);
    const json = await data.json();
    console.log("json",json)
    setVideos(json.items);
  }
  return (
    <div className='flex'>
    <div className='p-2 m-2'>
      <iframe width="640" height="360" src={"https://www.youtube.com/embed/"+ searchParam.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <Comments vId={searchParam.get("v")} />
    </div>
    <div>
    <LiveChat />
      {
        videos.map((video)=>{
         return <Link key={video.id} to={"?v="+video.id} ><MostPopularVideo  info={video} /></Link> 
        })
      }</div>
    </div>
  )
}

export default Watch