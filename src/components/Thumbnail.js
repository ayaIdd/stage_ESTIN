// components/ThumbnailItem.js
import React from 'react';

function ThumbnailItem({ image }) {
  return (
    <div className="item">
      <img src={image.src} alt="" />
    </div>
  );
}

export default ThumbnailItem;