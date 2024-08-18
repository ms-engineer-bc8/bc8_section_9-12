"use client";

import React, { useState } from 'react';
import { Star } from 'lucide-react';

const FavoriteButton = ({ initialFavorites = 0 }) => {
  const [favorites, setFavorites] = useState(initialFavorites);

  const handleFavorite = () => {
    setFavorites(prevFavorites => prevFavorites + 1);
  };

  return (
    <div className="flex space-x-4">
      <div className="flex items-center space-x-1">
        <Star
          className="w-5 h-5 text-yellow-400 hover:text-yellow-500 active:text-yellow-600 cursor-pointer transition-colors"
          onClick={handleFavorite}
        />
        <span className="text-sm text-yellow-600">{favorites}</span>
      </div>
    </div>
  );
};

export default FavoriteButton;