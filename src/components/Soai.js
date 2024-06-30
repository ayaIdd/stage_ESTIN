import React, { useState, useEffect, useRef, useCallback, useMemo, useLayoutEffect } from 'react';
import SliderItem from './SliderItem';
import ThumbnailItem from './Thumbnail';

const images = [
  { src: './image/soai.png', title: 'School of AI', description:"The School of AI is a vibrant club based at ESTIN, founded by enthusiastic students passionate about AI and data science. Our mission is to create a community where members can share knowledge, learn together, and explore new concepts and technologies in the field of artificial intelligence." },
  { src: './image/img14.jpg', title: 'LearnIt ',  description:"- A series of accelerated workshops covering various fields." },
  { src: './image/img15.jpg', title: 'Conference', description:"Conference on 'HOW TO MAKE AN INTELLIGENT MOBILE APP' by Meziane Dahou."},
  { src: './image/img16.jpg', title: 'BrAinON', description:"Ideathon is an event to solve real-world problems." },
  { src: './image/img17.jpg', title: 'DATABLITZ',  description :" An AI and Data Science Bootcamp."},
];

function Soai() {
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

export default Soai;