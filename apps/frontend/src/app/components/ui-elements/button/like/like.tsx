"use client";

import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const LikeButton = ({ initialLikes = 0 }) => {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };


  return (
    <div className="flex space-x-4">
      <div className="flex items-center space-x-1">
        <Heart
          className="w-5 h-5 text-red-400 hover:text-red-600 active:text-red-700 cursor-pointer transition-colors"
          onClick={handleLike}
        />
        <span className="text-sm text-red-600">{likes}</span>
      </div>
    </div>
  );
};

export default LikeButton;