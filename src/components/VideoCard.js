import React, { memo } from 'react';
import { formatViewCount, truncateText } from '../utils/helpers';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const viewCount = statistics?.viewCount || 0;

  return (
    <div className="shadow-lg m-4 w-80 rounded-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
      <img
        className="w-full h-48 object-cover"
        src={thumbnails?.high?.url || 'https://via.placeholder.com/320x180'}
        alt={title}
        loading="lazy"
      />
      <div className="p-3">
        <h3 className="font-bold py-2 text-sm line-clamp-2 hover:text-blue-600">
          {truncateText(title, 60)}
        </h3>
        <p className="text-gray-600 text-xs mb-1">{channelTitle}</p>
        <p className="text-gray-500 text-xs">
          {formatViewCount(viewCount)} views
        </p>
      </div>
    </div>
  );
};

export default memo(VideoCard);
