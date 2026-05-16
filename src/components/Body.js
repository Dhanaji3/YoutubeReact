import React, { useEffect, memo, useState } from 'react';
import { VIDEOS } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const Body = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetch(VIDEOS);
      if (!data.ok) throw new Error('Failed to fetch videos');
      const json = await data.json();
      setVideos(json.items || []);
    } catch (err) {
      setError(err.message);
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-red-600 text-lg mb-4">Error: {error}</p>
        <button
          onClick={getVideos}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4">
      {videos.map((video) => (
        <Link key={video.id} to={'watch?v=' + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default memo(Body);
