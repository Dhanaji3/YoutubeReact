import React, { useEffect, useState } from "react";
import { VIDEOS } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(VIDEOS);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return (
          <Link key={video.id} to={"watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default Body;
