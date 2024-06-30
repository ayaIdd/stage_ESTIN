import React, { useState, useEffect, useRef, useCallback, useMemo, useLayoutEffect } from 'react';
import SliderItem from './SliderItem';
import ThumbnailItem from './Thumbnail';

const images = [
  { src: './image/nexus.jpg', title: 'Nexus', description: "The Nexus Security Club fosters cybersecurity interest at the Higher School of Computer Science in Amizour through workshops, seminars, and CTF events, preparing students for careers in digital security." },
  { src: './image/img12.jpg', title: 'NexZero', description: "CTF (Capture The Flag)." },
  { src: './image/img13.jpg', title: 'NexTrace', description: "Mini CTF" },
  { src: './image/img11.jpg', title: 'NEXLABS', description: "A collection of labs and conferences guided by seasoned mentors and industry experts in cybersecurity." },
];

function Nexus() {
  const [items, setItems] = useState(images);
  const [direction, setDirection] = useState(null);
  const sliderRef = useRef(null);

  const moveSlider = useCallback((newDirection) => {
    setDirection(newDirection);
    setItems(prevItems => {
      const newItems = [...prevItems];
      if (newDirection === 'next') {
        const firstItem = newItems.shift();
        newItems.push(firstItem);
      } else {
        const lastItem = newItems.pop();
        newItems.unshift(lastItem);
      }
      return newItems;
    });
  }, []);

  useEffect(() => {
    if (direction) {
      const timer = setTimeout(() => {
        setDirection(null);
        if (sliderRef.current) {
          sliderRef.current.classList.remove(direction);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [direction]);

  useLayoutEffect(() => {
    if (direction && sliderRef.current) {
      sliderRef.current.classList.add(direction);
    }
  }, [direction, items]);

  const sliderItems = useMemo(() => (
    items.map((image, index) => (
      <SliderItem
        key={image.src}
        image={image}
        isActive={index === 0}
      />
    ))
  ), [items]);

  const thumbnailItems = useMemo(() => (
    items.map((image) => (
      <ThumbnailItem
        key={image.src}
        image={image}
      />
    ))
  ), [items]);

  return (
    <div ref={sliderRef} className="slider">
      <div className="list">
        {sliderItems}
      </div>
      <div className="thumbnail">
        {thumbnailItems}
      </div>
      <div className="nextPrevArrows">
        <button className="prev" onClick={() => moveSlider('prev')}> &lt; </button>
        <button className="next" onClick={() => moveSlider('next')}> &gt; </button>
      </div>
    </div>
  );
}

export default Nexus;
