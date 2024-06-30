// components/SliderItem.js
import React from 'react';

function SliderItem({ image, isActive }) {
  return (
    <div className={`item ${isActive ? 'active' : ''}`}>
      <img src={image.src} alt="" />
      <div className="content">
        <div className="title">{image.title}</div>
        <div className="type">{image.type}</div>
        <div className="description">
          {image.description}
        </div>
        {/* <div className="button">
          <button>SEE MORE</button>
        </div> */}
      </div>
    </div>
  );
}

export default SliderItem;